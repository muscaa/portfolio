import React from "react";
import Reveal from "./Reveal";
import { hyphenateSync } from "hyphen/en";
import Image from "next/image";

export default function Job({ name, company, date, description, icon }: { name: string, company: string, date: string, description: string, icon: string }) {
    return (
        <Reveal>
            <div className="w-80 h-96 bg-background-3 bg-opacity-25 backdrop-blur-sm shadow-md shadow-background-1
            rounded-lg overflow-hidden flex flex-col transform transition-shadow duration-200 ease-in-out hover:shadow-glow-lg hover:shadow-text-2">
                <div className="p-4 flex flex-col">
                    <div className="flex mb-4 items-center">
                        <Image className="w-16 h-16 rounded-xl mr-4" src={icon} width={64} height={64} alt="" />
                        <div className="flex flex-col">
                            <h3>{name}</h3>
                            <h5 className="text-text-3">{company}</h5>
                            <h5 className="text-text-3">{date}</h5>
                        </div>
                    </div>

                    <p className="text-justify text-text-1">{hyphenateSync(description)}</p>
                </div>
            </div>
        </Reveal>
    );
}
