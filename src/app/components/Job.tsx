import React from "react";
import Reveal from "./Reveal";
import { hyphenateSync } from "hyphen/en";
import Image from "next/image";
import Divider from "./Divider";
import * as Classes from "../Classes";

export default function Job({ job }: { job: Classes.Job }) {
    return (
        <Reveal>
            <div className="w-80 h-64 sm:h-80 lg:h-96 bg-background-3 bg-opacity-25 backdrop-blur-sm
            shadow-md shadow-background-1 border border-background-3 border-opacity-25
            rounded-lg overflow-hidden flex flex-col transform transition-shadow duration-200 ease-in-out hover:shadow-glow-lg hover:shadow-text-2">
                <div className="p-4 flex flex-col gap-2">
                    <div className="flex gap-4 justify-between">
                        <div className="flex flex-col">
                            <h3 className="font-bold">{job.name}</h3>
                            <h5 className="text-text-3 font-bold">{job.company}</h5>
                            <h5 className="text-text-3">{job.date}</h5>
                        </div>
                        <Image className="w-16 h-16 rounded-xl" src={job.image} width={64} height={64} alt="" />
                    </div>
                    <Divider />
                    <div className="flex flex-wrap gap-1">
                        {job.skills.map((skill, index) => (
                            <span key={index} className={`text-secondary font-normal bg-secondary bg-opacity-10 px-2 rounded-lg h6`}>{skill}</span>
                        ))}
                    </div>
                    <p className="text-justify text-text-1">{hyphenateSync(job.description)}</p>
                </div>
            </div>
        </Reveal>
    );
}
