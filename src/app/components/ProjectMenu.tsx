import React from "react";
import * as Classes from "../Classes";
import Button from "./Button";
import { useState, useEffect } from "react";
import Image from "next/image";
import Divider from "./Divider";
import IconLink from "./IconLink";
import Github from "../svg/Github";
import Details from "./Details";

let setOpenProject: (project: Classes.Project | null) => void;

export function openProjectMenu(project: Classes.Project) {
    const projectMenu = document.getElementById("project-menu");
    if (projectMenu == null) return;

    projectMenu.style.display = "block";
    document.body.style.overflow = "hidden";

    setTimeout(() => {
        projectMenu.style.opacity = "100%";
    }, 0);

    setOpenProject(project);
}

function closeProjectMenu() {
    const projectMenu = document.getElementById("project-menu");
    if (projectMenu == null) return;

    projectMenu.style.opacity = "0%";
    document.body.style.overflow = "auto";

    setTimeout(() => {
        projectMenu.style.display = "none";
    }, 200);

    setOpenProject(null);
}

export default function ProjectMenu() {
    const [project, setProject] = useState<Classes.Project | null>(null);

    useEffect(() => {
        setOpenProject = setProject;
    }, []);

    return (
        <div id="project-menu" className="fixed right-0 top-0 w-full hidden transition-all duration-200 ease-in-out h-full bg-background-1 bg-opacity-95 backdrop-blur-sm z-50">
            <div className="absolute inset-0 w-screen h-screen flex flex-col">
                <Button text="Close" onClick={closeProjectMenu} />
                {project && (
                    <div className="flex w-full h-full justify-center items-center">
                        <div className="w-80 sm:w-96 lg:w-112 bg-background-3 bg-opacity-25 backdrop-blur-sm
                        shadow-md shadow-background-1 border border-background-3 border-opacity-25
                        rounded-lg overflow-hidden flex flex-col">
                            <Image loading="lazy" className="w-full h-40 object-cover" src={project.image} width={320} height={180} alt={`${project.name} screenshot`} />
                            <div className="p-4 flex flex-col h-full justify-between gap-4">
                                <div className="flex flex-col gap-2">
                                    <div>
                                        <h3 className="font-bold">{project.name}</h3>
                                    </div>
                                    <div>
                                        <Divider />
                                    </div>
                                    <div className="flex flex-wrap gap-1">
                                        {project.skills.map((skill, index) => (
                                            <span key={index} className={`text-secondary font-normal bg-secondary bg-opacity-10 px-2 py-0.5 rounded-lg h6 flex-grow text-center`}>{skill}</span>
                                        ))}
                                    </div>
                                    <div className="space-y-1">
                                        {project.details.map((detail, index) => (
                                            <Details key={index} title={detail.title}>
                                                <p className="text-justify text-text-1">
                                                    {detail.content}
                                                </p>
                                            </Details>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="flex items-end h5 text-text-3">
                                        <p>Status: <span className={project.status.color}>{project.status.text}</span></p>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            {project.githubUrl && <IconLink href={project.githubUrl} IconComponent={Github} />}
                                            <Button text="View" onClick={() => openProjectMenu(project)} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
