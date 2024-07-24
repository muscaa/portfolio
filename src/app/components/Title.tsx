import React from "react";
import Reveal from "./Reveal";
import { H1 } from "./Text"

export default function Title({ text }: { text: string }) {
    return (
        <Reveal>
            <div className="flex justify-center items-center
            pb-6 pt-12 sm:pb-12 sm:pt-20 md:pb-20 md:pt-28">
                <H1 className="absolute blur-md text-secondary">{text}</H1>
                <H1 className="relative">{text}</H1>
            </div>
        </Reveal>
    );
}
