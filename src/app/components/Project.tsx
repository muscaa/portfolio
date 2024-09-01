import React from "react";
import Reveal from "./Reveal";
import Button from "./Button";
import Image from "next/image";
import Divider from "./Divider";
import * as Classes from "../Classes";
import IconLink from "./IconLink";
import Github from "../svg/Github";
import { openProjectMenu } from "./ProjectMenu";

export default function Project({ project }: { project: Classes.Project }) {
    /*
                    <Reveal direction="right" delay={0.6} className="space-y-1">
                        {project.details.map((detail, index) => (
                            <Details key={index} title={detail.title}>
                                <p className="text-justify text-text-1">
                                    {detail.content}
                                </p>
                            </Details>
                        ))}
                    </Reveal>
    */
    return (
        <Reveal className="w-80 sm:w-96 lg:w-112 bg-background-3 bg-opacity-25 backdrop-blur-sm
        shadow-md shadow-background-1 border border-background-3 border-opacity-25
        rounded-lg overflow-hidden flex flex-col">
            <Image loading="lazy" className="w-full h-40 object-cover" src={project.image} width={320} height={180} alt={`${project.name} screenshot`} />
            <div className="p-4 flex flex-col h-full justify-between gap-4">
                <div className="flex flex-col gap-2">
                    <Reveal direction="up" delay={0.4}>
                        <h3 className="font-bold">{project.name}</h3>
                    </Reveal>
                    <Reveal direction="right">
                        <Divider />
                    </Reveal>
                    <Reveal className="flex flex-wrap gap-1" direction="down" delay={0.4}>
                        {project.skills.map((skill, index) => (
                            <span key={index} className={`text-secondary font-normal bg-secondary bg-opacity-10 px-2 py-0.5 rounded-lg h6 flex-grow text-center`}>{skill}</span>
                        ))}
                    </Reveal>
                </div>
                <div className="flex justify-between">
                    <Reveal className="flex items-end h5 text-text-3" direction="right">
                        <p>Status: <span className={project.status.color}>{project.status.text}</span></p>
                    </Reveal>
                    <Reveal direction="left">
                        <div className="flex items-center gap-2">
                            {project.githubUrl && <IconLink href={project.githubUrl} IconComponent={Github} />}
                            <Button text="View" onClick={() => openProjectMenu(project)} />
                        </div>
                    </Reveal>
                </div>
            </div>
        </Reveal>
    );
}
