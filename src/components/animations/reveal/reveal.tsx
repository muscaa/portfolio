import { animate } from "animejs";
import {
    component$,
    Slot,
    useSignal,
    useVisibleTask$,
} from "@builder.io/qwik";

interface RevealProps {
    class?: string;
    direction?: "up" | "down" | "left" | "right" | "none";
    distance?: number;
    delay?: number;
    duration?: number;
}

export const Reveal = component$<RevealProps>(({ direction = "right", distance = 20, delay = 0, duration = 500, ...props }) => {
    const ref = useSignal<HTMLDivElement>();

    useVisibleTask$(() => {
        const element = ref.value!;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    let translate = {};

                    switch (direction) {
                        case "up":
                            translate = { translateY: [distance, 0] };
                            break;
                        case "down":
                            translate = { translateY: [-distance, 0] };
                            break;
                        case "left":
                            translate = { translateX: [distance, 0] };
                            break;
                        case "right":
                            translate = { translateX: [-distance, 0] };
                            break;
                    }

                    animate(element, {
                        opacity: [0, 1],
                        easing: "easeOutQuad",
                        delay,
                        duration,
                        ...translate,
                    });

                    observer.unobserve(element);
                }
            },
            { threshold: 0.1 }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    });

    return (
        <div ref={ref} class={`opacity-0 will-change-transform ${props.class}`}>
            <Slot />
        </div>
    );
});
