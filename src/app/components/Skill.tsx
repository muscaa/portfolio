import React from "react";
import { ComponentType } from "react";

export default function Skill({ name, IconComponent }: { name: string, IconComponent: ComponentType<{ className?: string }> }) {
    return (
        <div className="bg-background-4 bg-opacity-25 backdrop-blur-sm shadow-md shadow-background-1
        rounded-lg overflow-hidden flex flex-col
        w-16 h-16 md:w-28 md:h-28
        justify-center items-center m-1 md:m-2 gap-1">
            <IconComponent className="w-8 h-8 md:w-16 md:h-16" />
            <p>{name}</p>
        </div>
    );
}
