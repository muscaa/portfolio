import React from "react";
import { motion } from "framer-motion";

function getRotationClass(direction: string) {
    switch (direction) {
        case "up":
            return "-rotate-90";
        case "down":
            return "rotate-90";
        case "left":
            return "rotate-180";
        case "right":
        default:
            return "";
    }
}

export default function ButtonArrow({ direction = "right", href } : { direction: "up" | "down" | "left" | "right", href: string }) {
    return (
        <motion.a
            href={href}
            className="inline-block"
            animate={{
                y: [0, -10, 0, -6, 0],
                transition: {
                    duration: 0.5,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 2,
                },
            }}
        >
            <button className={`p-3 bg-primary rounded-full transform transition-transform hover:scale-110 ${getRotationClass(direction)}`}>
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
        </motion.a>
    );
}
