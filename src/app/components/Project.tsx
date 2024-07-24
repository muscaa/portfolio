import React from "react";
import Reveal from "./Reveal";
import Button from "./Button";
import { P, Span, H2, StyleH6 } from "./Text";
import Image from "next/image";

export default function Project({ name, description, skills, imageSrc }:
    { name: string, description: string, skills: string[], imageSrc: string }) {
    return (
        <Reveal>
            <div className="w-80 h-96 bg-background-3 bg-opacity-25 backdrop-blur-msm shadow-md shadow-background-1 hover:shadow-glow-lg hover:shadow-secondary
            rounded-lg overflow-hidden flex flex-col items-center transform transition-all duration-200 ease-in-out hover:scale-105">
                <Image className="w-full h-40 object-cover" src={imageSrc} width={320} height={180} alt={`${name} screenshot`} />
                <div className="p-4 flex flex-col h-full justify-between">
                    <div className="flex flex-col">
                        <H2>{name}</H2>
                        <div className="w-full h-px bg-text-3 mb-2"></div>
                        <div className="flex flex-wrap gap-1 mb-2">
                            {skills.map((skill) => (
                                <Span className={`text-secondary bg-background-4 bg-opacity-25 px-2 rounded-lg ${StyleH6}`}>{skill}</Span>
                            ))}
                        </div>
                        <P className="text-text-1">{description}</P>
                    </div>
                    <div className="flex justify-end gap-2">
                        <Button text="View" />
                        <Button text="Source" />
                    </div>
                </div>
            </div>
        </Reveal>
    );
}
