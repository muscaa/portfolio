import React from "react";
import Title from "../components/Title";
import { hyphenateSync } from "hyphen/en";
import Skill from "../components/Skill";
import Button from "../components/Button";
import Image from "next/image";
import { ReactTyped } from "react-typed";
import Divider from "../components/Divider";
import * as Config from "../Config";
import Reveal from "../components/Reveal";
import Selector from "../components/Selector";
import DoubleButton from "../components/DoubleButton";
import Download from "../svg/Download";

export default function About() {
    return (
        <section id="about">
            <Title text="About" />
            <div className="flex justify-center px-8
            flex-col sm:flex-row-reverse
            gap-8 lg:gap-16
            ">
                <div className="flex flex-col justify-center items-center min-w-64 min-h-64 md:min-w-80 md:min-h-80 lg:min-w-96 lg:min-h-96">
                    <Reveal direction="down">
                        <Image className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full shadow-glow-lg shadow-background-4
                            border border-background-4 border-opacity-25" src="profile.png" width={384} height={384} alt="Me" />
                    </Reveal>
                </div>

                <div className="flex flex-col flex-grow gap-8">
                    <div className="flex flex-col gap-2">
                        <Reveal direction="up" delay={0.4}>
                            <h2 className="font-bold text-center">{Config.userInfo.fullName}</h2>
                        </Reveal>
                        <Reveal direction="right">
                            <Divider />
                        </Reveal>
                        <Reveal className="h3 font-bold" direction="down" delay={0.4}>
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
                        </Reveal>
                        <Reveal direction="right" delay={0.6}>
                            <p className="text-justify text-text-1">
                                {hyphenateSync(Config.userInfo.description)}
                            </p>
                        </Reveal>
                    </div>
                    <Reveal className="flex flex-col h-full justify-end" direction="right" delay={0.4}>
                        <div className="grid grid-cols-[70%_30%] gap-2 lg:gap-4">
                            <DoubleButton className="w-full" text="View Resume" IconComponent={Download} />
                            <Selector
                                options={["EN", "RO"]}
                                selected={0}
                                onSelect={(option, index) => console.log(option + " : " + index)}
                            />
                        </div>
                    </Reveal>
                </div>
            </div>
            <Reveal className="flex mt-8 lg:mt-16" delay={0.6}>
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
            </Reveal>
        </section>
    );
}
