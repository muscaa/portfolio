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
                "text": "rgb(250, 249, 246)",
                "primary": "rgb(118, 73, 254)",
                "secondary": "rgb(73, 254, 208)",
            },
            width: {
                "112": "28rem",
                "128": "32rem",
                "144": "36rem",
                "160": "40rem",
                "176": "44rem",
                "192": "48rem",
                "208": "52rem",
                "224": "56rem",
                "240": "60rem",
                "256": "64rem",
            },
            gridTemplateColumns: {
                "fill": "repeat(auto-fill, minmax(20rem, 1fr))",
            },
        },
    },
    plugins: [],
};
export default config;
