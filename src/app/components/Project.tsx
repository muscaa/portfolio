import React from "react";
import Reveal from "./Reveal";
import Button from "./Button";
import Image from "next/image";
import Divider from "./Divider";
import { hyphenateSync } from "hyphen/en";

export default function Project({ name, description, skills, imageSrc, demoUrl, githubUrl }:
    { name: string, description: string, skills: string[], imageSrc: string, demoUrl: string, githubUrl: string }) {
    return (
        <Reveal>
            <div className="w-80 h-112 sm:w-96 sm:h-120 lg:w-112 lg:h-128 bg-background-3 bg-opacity-25 backdrop-blur-sm shadow-md shadow-background-1
            rounded-lg overflow-hidden flex flex-col transform transition-shadow duration-200 ease-in-out hover:shadow-glow-lg hover:shadow-text-2">
                <Image className="w-full h-40 object-cover" src={imageSrc} width={320} height={180} alt={`${name} screenshot`} />
                <div className="p-4 flex flex-col h-full justify-between">
                    <div className="flex flex-col gap-2">
                        <h3 className="font-bold">{name}</h3>
                        <Divider />
                        <div className="flex flex-wrap gap-1">
                            {skills.map((skill, index) => (
                                <span key={index} className={`text-secondary font-normal bg-secondary bg-opacity-10 px-2 rounded-lg h6`}>{skill}</span>
                            ))}
                        </div>
                        <p className="text-justify text-text-1">{hyphenateSync(description)}</p>
                    </div>
                    <div className="flex justify-end gap-2">
                        {demoUrl && <Button text="Demo" onClick={() => window.open(demoUrl, "_blank")} />}
                        {githubUrl && <Button text="Github" onClick={() => window.open(githubUrl, "_blank")} />}
                    </div>
                </div>
            </div>
        </Reveal>
    );
}
