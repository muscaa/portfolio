import React from "react";
import ButtonArrow from "../components/ButtonArrow";
import Reveal from "../components/Reveal";
import Atropos from "atropos";
import { useEffect, useMemo, useState } from "react";
import * as Parallax from "../svg/Parallax";
import * as Config from "../Config";

export default function Home() {
    useEffect(() => {
        const homeAtropos = Atropos({
            el: "#home-atropos",
            alwaysActive: true,
            shadow: false,
            highlight: false,
            rotateXMax: 5,
            rotateYMax: 5,
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
                        <Parallax.Background data-atropos-offset="-4.5" />
                        <Parallax.Mountains data-atropos-offset="-2.5" />
                        <Parallax.ForestBack data-atropos-offset="0" />
                        <Parallax.ForestMid data-atropos-offset="2" />
                        <Parallax.ForestFront data-atropos-offset="4" />
                        <div className="flex flex-col justify-center items-center" data-atropos-offset="5">
                            <div className="flex-grow"></div>
                            <div className="flex-grow"></div>
                            <Reveal direction="up">
                                <h1 className="font-bold">Hello, I'm {Config.userInfo.shortName}.</h1>
                            </Reveal>
                            <div className="flex-grow"></div>
                            <Reveal direction="down">
                                <ButtonArrow direction="down" href="#about" />
                            </Reveal>
                            <div className="flex-grow"></div>
                            <div className="flex-grow"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
