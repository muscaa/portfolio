import React from "react";
import { ComponentType } from "react";
import Reveal from "./Reveal";

export default function Skill({ name, IconComponent }: { name: string, IconComponent: ComponentType<{ className?: string }> }) {
    return (
        <Reveal>
            <div className="w-24 h-24 flex flex-col justify-center items-center">
                <IconComponent className="w-16 h-16" />
                <p>{name}</p>
            </div>
        </Reveal>
    );
}
