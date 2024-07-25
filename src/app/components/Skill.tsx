import React from "react";
import { ComponentType } from "react";
import * as Classes from "../Classes";

export default function Skill({ skill }: { skill: Classes.Skill }) {
    return (
        <div className="flex flex-col
        w-16 h-16 md:w-28 md:h-28
        justify-center items-center m-1 md:m-2 gap-2">
            <skill.IconComponent className="w-8 h-8 md:w-16 md:h-16" />
            <p className="h6 md:h5 text-text-1">{skill.name}</p>
        </div>
    );
}
