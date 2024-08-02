import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { useEffect } from "react";

function getRotation(direction: "up" | "down" | "left" | "right") {
    switch (direction) {
        case "up":
            return {
                class: "-rotate-90",
                x: [0, 0, 0, 0, 0],
                y: [0, -10, 0, -6, 0],
            }
        case "down":
            return {
                class: "rotate-90",
                x: [0, 0, 0, 0, 0],
                y: [0, 10, 0, 6, 0],
            }
        case "left":
            return {
                class: "rotate-180",
                x: [0, -10, 0, -6, 0],
                y: [0, 0, 0, 0, 0],
            }
        case "right":
            return {
                class: "",
                x: [0, 10, 0, 6, 0],
                y: [0, 0, 0, 0, 0],
            }
    }
}

export default function ButtonArrow({ direction = "right", href, className }: { direction: "up" | "down" | "left" | "right", href: string, className?: string }) {
    const rotation = getRotation(direction);
    const [springs, api] = useSpring(() => ({
        from: {
            x: rotation.x[0],
            y: rotation.y[0],
        },
    }));

    useEffect(() => {
        const interval = setInterval(() => {
            api.start({
                to: async (next) => {
                    for (let i = 0; i < 5; i++) {
                        await next({
                            x: rotation.x[i],
                            y: rotation.y[i],
                            config: {
                                duration: 120,
                            }
                        });
                    }
                },
            });
        }, 2500);

        return () => clearInterval(interval);
    }, [api]);

    return (
        <div
            className={className}
        >
            <animated.a
                href={href}
                style={springs}
                className="inline-block"
            >
                <button className={`p-3 bg-primary rounded-full transition-colors duration-200 ease-in-out hover:bg-primary-light active:bg-primary ${rotation.class}`}>
                    <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 5l7 7-7 7M5 5l7 7-7 7"
                        ></path>
                    </svg>
                </button>
            </animated.a>
        </div>
    );
}
