import React from "react";
import Reveal from "./Reveal";
import { hyphenateSync } from "hyphen/en";
import { P, H4, H6 } from "./Text";
import Image from "next/image";

export default function Job({ name, company, date, description, icon }: { name: string, company: string, date: string, description: string, icon: string }) {
    return (
        <Reveal>
            <div className="w-80 sm:w-128 h-52 sm:h-64 bg-background-3 bg-opacity-25 backdrop-blur-msm shadow-md shadow-background-1 hover:shadow-glow-lg hover:shadow-secondary
            rounded-lg overflow-hidden flex flex-col transform transition-all duration-200 ease-in-out hover:scale-105">
                <div className="p-4 flex flex-col">
                    <div className="flex mb-4 items-center">
                        <Image className="w-16 h-16 rounded-xl mr-4" src={icon} width={64} height={64} alt="" />
                        <div className="flex flex-col">
                            <H4>{name}</H4>
                            <H6 className="text-text-3">{company}</H6>
                            <H6 className="font-normal text-text-3">{date}</H6>
                        </div>
                    </div>

                    <P className="text-justify text-text-1">{hyphenateSync(description)}</P>
                </div>
            </div>
        </Reveal>
    );
}
