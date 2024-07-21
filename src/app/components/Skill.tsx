import React from "react";
import { ComponentType } from "react";
import Reveal from "./Reveal";

export default function Skill({ name, IconComponent }: { name: string, IconComponent: ComponentType<{ className?: string }> }) {
    return (
        <Reveal>
            <div className="bg-background-3 bg-opacity-25 backdrop-blur-msm shadow-md shadow-background-1
            rounded-lg overflow-hidden flex flex-col
            w-28 h-28 justify-center items-center m-2">
                <IconComponent className="w-16 h-16" />
                <p>{name}</p>
            </div>
        </Reveal>
    );
}
