import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
    type ISourceOptions,
    MoveDirection,
    OutMode,
} from "@tsparticles/engine";
import { loadFull } from "tsparticles";

export default function ParticlesBackground({ className }: { className?: string }) {
    const [init, setInit] = useState(false);
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0,
    });
    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        handleResize();

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const calculateParticles = () => {
        const area = windowSize.width * windowSize.height;
        return Math.floor(area / 6000);
    };

    const options: ISourceOptions = useMemo(
        () => ({
            fullScreen: {
                enable: false,
            },
            fpsLimit: 120,
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
                    speed: 0.05,
                    direction: MoveDirection.none,
                    outModes: {
                        default: OutMode.bounce,
                    },
                },
                number: {
                    value: calculateParticles(),
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
                        min: 1,
                        max: 2.5,
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
            <Particles
                id="bg-particles"
                options={options}
                className={className}
            />
        );
    }

    return <></>;
}
