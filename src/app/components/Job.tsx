import React from "react";
import Reveal from "./Reveal";
import Image from "next/image";
import Divider from "./Divider";
import * as Classes from "../Classes";

export default function Job({ job }: { job: Classes.Job }) {
    return (
        <Reveal className="w-80 bg-background-3 bg-opacity-25 backdrop-blur-sm
        shadow-md shadow-background-1 border border-background-3 border-opacity-25
        rounded-lg overflow-hidden flex flex-col transform transition-shadow duration-200 ease-in-out hover:shadow-glow-lg hover:shadow-background-4 hover:z-10">
            <div className="p-4 flex flex-col gap-2">
                <div className="flex gap-4 justify-between">
                    <Reveal className="flex flex-col" direction="up" delay={0.4}>
                        <h3 className="font-bold">{job.name}</h3>
                        <h5 className="text-text-3 font-bold">{job.company}</h5>
                        <h5 className="text-text-3">{job.date}</h5>
                    </Reveal>
                    <Image loading="lazy" className="w-16 h-16 rounded-xl" src={job.image} width={64} height={64} alt="" />
                </div>
                <Reveal direction="right">
                    <Divider />
                </Reveal>
                <Reveal className="flex flex-wrap gap-1" direction="down" delay={0.4}>
                    {job.skills.map((skill, index) => (
                        <span key={index} className={`text-secondary font-normal bg-secondary bg-opacity-10 px-2 py-0.5 rounded-lg h6 flex-grow text-center`}>{skill}</span>
                    ))}
                </Reveal>
                <Reveal direction="right" delay={0.6}>
                    <p className="text-justify text-text-1">
                        {job.description}
                    </p>
                </Reveal>
            </div>
        </Reveal>
    );
}
