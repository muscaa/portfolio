import React from "react";
import * as Classes from "../Classes";
import Button from "./Button";
import { useState, useEffect } from "react";

let setOpenProject: (project: Classes.Project | null) => void;

export function openProjectMenu(project: Classes.Project) {
    const projectMenu = document.getElementById("project-menu");
    if (projectMenu == null) return;

    projectMenu.style.width = "100%";
    document.body.style.overflow = "hidden";

    setOpenProject(project);
}

function closeProjectMenu() {
    const projectMenu = document.getElementById("project-menu");
    if (projectMenu == null) return;

    projectMenu.style.width = "0%";
    document.body.style.overflow = "auto";
}

export default function ProjectMenu() {
    const [project, setProject] = useState<Classes.Project | null>(null);

    useEffect(() => {
        setOpenProject = setProject;
    }, []);

    return (
        <div id="project-menu" className="fixed right-0 top-0 w-0 transition-all duration-200 ease-in-out h-full bg-background-1 bg-opacity-95 backdrop-blur-sm z-50">
            <div className="absolute inset-0 w-screen h-screen flex flex-col">
                <Button text="Close" onClick={closeProjectMenu} />
                {project && (
                    <h1>{project?.name}</h1>
                )}
            </div>
        </div>
    );
}
