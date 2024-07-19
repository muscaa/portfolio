import React from "react";
import { ComponentType } from "react";
import Reveal from "./Reveal";

export default function Skill({ name, IconComponent }: { name: string, IconComponent: ComponentType<{ className?: string }> }) {
    return (
        <Reveal>
            <div className="bg-background-3 bg-opacity-25 backdrop-blur-msm shadow-md shadow-background-1 hover:shadow-glow-sm hover:shadow-secondary
            rounded-lg overflow-hidden flex flex-col transform transition-all duration-200 ease-in-out hover:scale-105
            w-28 h-28 justify-center items-center">
                <IconComponent className="w-16 h-16" />
                <p>{name}</p>
            </div>
        </Reveal>
    );
}
