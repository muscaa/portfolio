import React from "react";
import Reveal from "./Reveal";

export default function Title({ text }: { text: string }) {
    return (
        <Reveal>
            <div className="flex justify-center items-center font-bold
            text-4xl sm:text-5xl lg:text-6xl
            pb-6 pt-12 sm:pb-12 sm:pt-20 md:pb-20 md:pt-28">
                <h1 className="absolute blur-md text-secondary">{text}</h1>
                <h1 className="relative">{text}</h1>
            </div>
        </Reveal>
    );
}
