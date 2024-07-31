import React from "react";
import ButtonArrow from "../components/ButtonArrow";
import Reveal from "../components/Reveal";
import * as Config from "../Config";
import IconLink from "../components/IconLink";
import ParallaxBackground from "../components/ParallaxBackground";

// Icons
import Github from "../svg/Github";
import Instagram from "../svg/Instagram";
import Linkedin from "../svg/Linkedin";
import PartyParrot from "../svg/PartyParrot";

export default function Home() {
    return (
        <section id="home" className="flex h-screen overflow-hidden bg-navbar-opaque">
            <ParallaxBackground />
            <div className="flex flex-col w-full h-full justify-center items-center z-10">
                <div className="flex-grow"></div>
                <div className="flex-grow"></div>
                <Reveal direction="right">
                    <h1 className="font-bold">Hi, I'm {Config.userInfo.shortName}</h1>
                </Reveal>
                <Reveal direction="right" delay={0.4}>
                    <h2 className="font-bold">{Config.userInfo.role}</h2>
                </Reveal>
                <Reveal className="flex gap-2 justify-center items-center mt-4 lg:mt-8" direction="right" delay={0.6}>
                    <IconLink href={Config.contactInfo.github} IconComponent={Github} />
                    <IconLink href={Config.contactInfo.instagram} IconComponent={Instagram} />
                    <IconLink href={Config.contactInfo.linkedin} IconComponent={Linkedin} />
                </Reveal>
                <div className="flex-grow"></div>
                <Reveal direction="up">
                    <ButtonArrow direction="down" href="#about" />
                </Reveal>
                <PartyParrot className="pp-svg hidden" />
                <div className="flex-grow"></div>
                <div className="flex-grow"></div>
            </div>
        </section>
    );
}
