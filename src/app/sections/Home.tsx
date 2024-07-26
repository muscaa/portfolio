import React from "react";
import { ReactTyped } from "react-typed";
import ButtonArrow from "../components/ButtonArrow";
import Reveal from "../components/Reveal";
import Atropos from "atropos";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
    type ISourceOptions,
    MoveDirection,
    OutMode,
} from "@tsparticles/engine";
import { loadFull } from "tsparticles";
import {
    useWindowSize
} from "../States";
import * as Parallax from "../svg/Parallax";
import * as Config from "../Config";

function calculateParticles(windowSize: { width: number, height: number }) {
    const area = windowSize.width * windowSize.height;
    return Math.floor(area / 32000);
};

function ParticlesHome({ className }: { className?: string }) {
    const [init, setInit] = useState(false);
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const windowSize = useWindowSize();

    const options: ISourceOptions = useMemo(
        () => ({
            fullScreen: {
                enable: false,
            },
            fpsLimit: 30,
            detectRetina: true,
            smooth: true,
            particles: {
                color: {
                    value: "#49FED0", // same as secondary
                },
                links: {
                    enable: true,
                    color: "#49FED0", // same as secondary
                    distance: 100,
                    opacity: 0.1,
                    width: 0.5,
                },
                move: {
                    enable: true,
                    speed: 0.08,
                    direction: MoveDirection.none,
                    outModes: {
                        default: OutMode.bounce,
                    },
                },
                number: {
                    value: calculateParticles(windowSize),
                },
                opacity: {
                    value: {
                        min: 0.1,
                        max: 0.6,
                    },
                },
                shape: {
                    type: "star",
                },
                size: {
                    value: {
                        min: 2,
                        max: 6,
                    },
                },
                collisions: {
                    enable: true,
                    mode: "bounce",
                }
            },
        }),
        [windowSize],
    );

    if (init) {
        return (
            <div className={className}>
                <Particles
                    id="home-particles"
                    options={options}
                    className="absolute inset-0"
                />
            </div>
        );
    }

    return <></>;
}

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
                            <h1>Hello, I'm {Config.userInfo.shortName}.</h1>
                            <div className="flex-grow"></div>
                            <ButtonArrow direction="down" href="#about" />
                            <div className="flex-grow"></div>
                            <div className="flex-grow"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
