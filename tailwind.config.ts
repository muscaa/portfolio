import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["selector", "[data-mode='dark']"],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                "background-1": "rgb(22, 25, 28)",
                "background-2": "rgb(42, 45, 48)",
                "background-3": "rgb(62, 65, 68)",
                "background-4": "rgb(82, 85, 88)",
                "primary-1": "rgb(220, 130, 30)",
                "primary-2": "rgb(220, 150, 30)",
                "primary-3": "rgb(220, 170, 30)",
                "primary-4": "rgb(220, 190, 30)",
            },
        },
    },
    plugins: [],
};
export default config;
