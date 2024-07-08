import React from "react";
import Reveal from "./Reveal";

export default function Title({ text }: { text: string }) {
    return (
        <Reveal>
            <div className="flex justify-center items-center py-24 text-4xl sm:text-5xl lg:text-6xl font-bold">
                <h1 className="absolute blur-md text-secondary">{text}</h1>
                <h1 className="relative">{text}</h1>
            </div>
        </Reveal>
    );
}
