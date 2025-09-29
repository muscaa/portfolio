import { animate } from "animejs";
import {
    component$,
    Slot,
    useSignal,
    useVisibleTask$,
} from "@builder.io/qwik";

function getOffsets(direction: "up" | "down" | "left" | "right") {
    switch (direction) {
        case "up":
            return {
                x: [0, 0, 0, 0, 0],
                y: [0, -10, 0, -6, 0],
            };
        case "down":
            return {
                x: [0, 0, 0, 0, 0],
                y: [0, 10, 0, 6, 0],
            };
        case "left":
            return {
                x: [0, -10, 0, -6, 0],
                y: [0, 0, 0, 0, 0],
            };
        case "right":
            return {
                x: [0, 10, 0, 6, 0],
                y: [0, 0, 0, 0, 0],
            };
    }
}

interface BounceProps {
    class?: string;
    direction?: "up" | "down" | "left" | "right";
    distance?: number;
    delay?: number;
    duration?: number;
    loopDelay?: number;
}

export const Bounce = component$<BounceProps>(({ direction = "right", distance = 20, delay = 0, duration = 500, loopDelay = 2000, ...props }) => {
    const ref = useSignal<HTMLDivElement>();

    useVisibleTask$(() => {
        const element = ref.value!;

        const { x, y } = getOffsets(direction);

        animate(element, {
            translateX: x,
            translateY: y,
            easing: "easeInOut",
            delay,
            duration,
            loop: true,
            loopDelay,
        });
    });

    return (
        <div ref={ref} class={`will-change-transform ${props.class}`}>
            <Slot />
        </div>
    );
});

// export default function ButtonArrow({ direction = "right", href, className }: { direction: "up" | "down" | "left" | "right", href: string, className?: string }) {
//     const rotation = getRotation(direction);

//     return (
//         <div
//             className={className}
//         >
//             <motion.a
//                 href={href}
//                 className="inline-block"
//                 animate={{
//                     x: rotation.x,
//                     y: rotation.y,
//                     transition: {
//                         duration: 0.5,
//                         ease: "easeInOut",
//                         repeat: Infinity,
//                         repeatDelay: 2,
//                     },
//                 }}
//             >
//                 <button className={`p-3 bg-primary rounded-full transition-colors duration-200 ease-in-out hover:bg-primary-light active:bg-primary ${rotation.class}`}>
//                     <svg
//                         className="w-8 h-8"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                     >
//                         <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d="M13 5l7 7-7 7M5 5l7 7-7 7"
//                         ></path>
//                     </svg>
//                 </button>
//             </motion.a>
//         </div>
//     );
// }
