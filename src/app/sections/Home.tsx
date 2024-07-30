import React from "react";
import ButtonArrow from "../components/ButtonArrow";
import Reveal from "../components/Reveal";
import Atropos from "atropos";
import { useEffect, useMemo, useState } from "react";
import * as Parallax from "../svg/Parallax";
import * as Config from "../Config";
import IconLink from "../components/IconLink";

// Icons
import Github from "../svg/Github";
import Instagram from "../svg/Instagram";
import Linkedin from "../svg/Linkedin";

export default function Home() {
    useEffect(() => {
        const homeAtropos = Atropos({
            el: "#home-atropos",
            alwaysActive: true,
            shadow: false,
            highlight: false,
            rotateXMax: 5,
            rotateYMax: 5,
            activeOffset: 0,
            duration: 0,
        });

        return () => {
            homeAtropos.destroy();
        };
    }, []);

    return (
        <section id="home" className="flex h-screen overflow-hidden bg-navbar-opaque">
            <div id="home-atropos" className="atropos">
                <div className="atropos-scale">
                    <div className="atropos-rotate">
                        <div className="atropos-inner">
                            <Parallax.Background data-atropos-offset="-2" />
                            <Parallax.Mountains data-atropos-offset="-1" />
                            <Parallax.ForestBack data-atropos-offset="0" />
                            <Parallax.ForestMid data-atropos-offset="1" />
                            <Parallax.ForestFront data-atropos-offset="2" />
                            <div className="flex flex-col justify-center items-center" data-atropos-offset="0">
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
                                <div className="flex-grow"></div>
                                <div className="flex-grow"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
