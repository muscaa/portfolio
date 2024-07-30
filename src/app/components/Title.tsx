import React from "react";
import Reveal from "./Reveal";

export default function Title({ text }: { text: string }) {
    return (
        <Reveal>
            <div className="flex justify-center items-center
            pb-6 pt-12 sm:pb-12 sm:pt-20 md:pb-20 md:pt-28">
                <h1 className="font-bold first-letter:text-secondary">{text}</h1>
            </div>
        </Reveal>
    );
}
