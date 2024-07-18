import React from "react";
import Reveal from "./Reveal";
import { hyphenateSync } from "hyphen/en";

export default function Job({ name, company, date, description, icon }: { name: string, company: string, date: string, description: string, icon: string }) {
    return (
        <Reveal>
            <div className="w-80 sm:w-128 h-52 sm:h-64 bg-background-3 bg-opacity-25 backdrop-blur-msm shadow-md shadow-background-1 hover:shadow-glow-lg hover:shadow-secondary
            rounded-lg overflow-hidden flex flex-col transform transition-all duration-200 ease-in-out hover:scale-105">
                <div className="p-4 flex flex-col">
                    <div className="flex mb-4 items-center">
                        <img className="w-16 h-16 rounded-xl mr-4" src={icon} alt="" />
                        <div className="flex flex-col">
                            <h2 className="text-xl font-bold">{name}</h2>
                            <h3 className="text-base font-bold text-text-3">{company}</h3>
                            <h3 className="text-sm font-normal text-text-3">{date}</h3>
                        </div>
                    </div>

                    <p lang="en" className="text-justify hyphens-auto text-text-1">{hyphenateSync(description)}</p>
                </div>
            </div>
        </Reveal>
    );
}