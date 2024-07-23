import React from "react";
import Reveal from "./Reveal";
import Button from "./Button";

export default function Project({ name, description, skills, imageSrc }:
    { name: string, description: string, skills: string[], imageSrc: string }) {
    return (
        <Reveal>
            <div className="w-80 h-96 bg-background-3 bg-opacity-25 backdrop-blur-msm shadow-md shadow-background-1 hover:shadow-glow-lg hover:shadow-secondary
            rounded-lg overflow-hidden flex flex-col items-center transform transition-all duration-200 ease-in-out hover:scale-105">
                <img className="w-full h-40 object-cover" src={imageSrc} alt={`${name} screenshot`} />
                <div className="p-4 flex flex-col h-full justify-between">
                    <div className="flex flex-col">
                        <h2 className="text-xl font-bold">{name}</h2>
                        <div className="w-full h-px bg-text-3 mb-2"></div>
                        <div className="flex flex-wrap gap-1 mb-2">
                            {skills.map((skill, index) => (
                                <span key={index} className="text-sm text-secondary bg-background-4 bg-opacity-25 px-2 rounded-lg">{skill}</span>
                            ))}
                        </div>
                        <p className="text-text-1">{description}</p>
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
