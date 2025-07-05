import {
    component$,
    useSignal,
    useVisibleTask$,
} from "@builder.io/qwik";
import { ParallaxLayers } from "~/components/other";
import { Parallax } from "~/components/svg";

export const SectionHome = component$(() => {
    const ref = useSignal<HTMLElement>();
    const interact = useSignal(false);

    useVisibleTask$(() => {
        const handleMouseEnter = () => {
            interact.value = true;
        };
        const handleMouseLeave = () => {
            interact.value = false;
        };

        ref.value!.addEventListener("mouseenter", handleMouseEnter);
        ref.value!.addEventListener("mouseleave", handleMouseLeave);
        return () => {
            ref.value!.removeEventListener("mouseenter", handleMouseEnter);
            ref.value!.removeEventListener("mouseleave", handleMouseLeave);
        };
    });

    return (
        <section ref={ref} class="relative flex h-screen">
            <ParallaxLayers
                interact={interact}
                options={{
                    yFactor: 0
                }}
                layers={[
                    { icon: Parallax.Background, offset: 0, width: Parallax.width, height: Parallax.height, scale: 140 },
                    { icon: Parallax.Mountains, offset: 40, width: Parallax.width, height: Parallax.height, scale: 140 },
                    { icon: Parallax.ForestBack, offset: 80, width: Parallax.width, height: Parallax.height, scale: 140 },
                    { icon: Parallax.ForestMid, offset: 160, width: Parallax.width, height: Parallax.height, scale: 140 },
                    { icon: Parallax.ForestFront, offset: 320, width: Parallax.width, height: Parallax.height, scale: 140 },
                ]}
            />
            <div class="flex flex-col size-full justify-center items-center z-10">
                <h1>hello world</h1>
            </div>
        </section>
    );
});
