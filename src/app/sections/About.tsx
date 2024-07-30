import React from "react";
import Title from "../components/Title";
import { hyphenateSync } from "hyphen/en";
import SkillSet from "../components/SkillSet";
import Button from "../components/Button";
import Image from "next/image";
import Divider from "../components/Divider";
import * as Config from "../Config";
import Reveal from "../components/Reveal";
import Selector from "../components/Selector";
import DoubleButton from "../components/DoubleButton";
import Info from "../components/Info";

// Icons
import Download from "../svg/Download";
import School from "../svg/School";

export default function About() {
    return (
        <section id="about">
            <Title text="About" />
            <div className="flex flex-col">
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
                                <h3 className="font-bold text-center">{Config.userInfo.fullName}</h3>
                            </Reveal>
                            <Reveal direction="right">
                                <Divider />
                            </Reveal>
                            <Reveal direction="right" delay={0.6}>
                                <p className="text-justify text-text-1">
                                    {hyphenateSync(Config.userInfo.description)}
                                </p>
                            </Reveal>
                        </div>
                        <Reveal className="flex flex-col h-full gap-2 lg:gap-4" delay={0.4}>
                            <Info name={Config.userInfo.education.school} value={Config.userInfo.education.period} href={Config.userInfo.education.link} IconComponent={School} />
                            <div className="grid grid-cols-[70%_30%] space-x-2 lg:space-x-4">
                                <DoubleButton className="w-full" text="View Resume" IconComponent={Download} />
                                <Selector
                                    className="h-full"
                                    options={["EN", "RO"]}
                                    selected={0}
                                    onSelect={(option, index) => console.log(option + " : " + index)}
                                />
                            </div>
                        </Reveal>
                    </div>
                </div>
                <div className="flex flex-wrap gap-2 lg:gap-4 mt-8 px-8 w-full">
                    {Config.skillSets.map((skillSet, index) => (
                        <SkillSet key={index} skillSet={skillSet} />
                    ))}
                </div>
            </div>
        </section>
    );
}
