import React from "react";
import Title from "../components/Title";
import { hyphenateSync } from "hyphen/en";
import Skill from "../components/Skill";
import Button from "../components/Button";
import Image from "next/image";
import { ReactTyped } from "react-typed";
import Divider from "../components/Divider";
import * as Config from "../Config";

export default function About() {
    return (
        <section id="about">
            <Title text="About" />
            <div className="flex justify-center px-8
            flex-col sm:flex-row-reverse
            gap-8 lg:gap-16
            ">
                <div className="flex flex-col justify-center items-center min-w-64 min-h-64 md:min-w-80 md:min-h-80 lg:min-w-96 lg:min-h-96">
                    <Image className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full
                    shadow-glow-lg shadow-text-2 border border-background-4 border-opacity-25" src="profile.png" width={384} height={384} alt="Me" />
                </div>

                <div className="flex flex-col flex-grow">
                    <div className="flex flex-col gap-2">
                        <h2 className="font-bold text-center">{Config.userInfo.fullName}</h2>
                        <Divider />
                        <div className="h3 font-bold">
                            <span>I'm a </span>
                            <ReactTyped
                                strings={Config.userInfo.roles}
                                typeSpeed={50}
                                backSpeed={30}
                                backDelay={2500}
                                startDelay={500}
                                loop
                                className="text-primary"
                            />
                        </div>
                        <p className="text-justify text-text-1">
                            {hyphenateSync(Config.userInfo.description)}
                        </p>
                    </div>
                    <div className="flex flex-col h-full justify-end">
                        <Button text="View Resume" />
                    </div>
                </div>
            </div>
            <div className="flex mt-8 lg:mt-16">
                <div className="flex w-full overflow-hidden mask-smooth-sm
                bg-background-4 bg-opacity-25 backdrop-blur-sm
                shadow-md shadow-background-1 border border-background-4 border-opacity-25">
                    <div className="flex animation-slide hover:animation-pause">
                        {Config.skills.map((skill, index) => (
                            <Skill key={index} skill={skill} />
                        ))}
                        {Config.skills.map((skill, index) => (
                            <Skill key={index} skill={skill} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
