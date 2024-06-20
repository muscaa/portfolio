import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
    type ISourceOptions,
    MoveDirection,
    OutMode,
} from "@tsparticles/engine";
import { loadFull } from "tsparticles";

export default function ParticlesBackground({ className } : { className?: string }) {
    const [init, setInit] = useState(false);
    
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const options: ISourceOptions = useMemo(
        () => ({
            fullScreen: {
                enable: true,
                zIndex: -60,
            },
            fpsLimit: 120,
            detectRetina: true,
            smooth: true,
            particles: {
                color: {
                    value: "#49FED0",
                },
                links: {
                    enable: true,
                    color: "#49FED0",
                    distance: 100,
                    opacity: 0.1,
                    width: 0.5,
                },
                move: {
                    enable: true,
                    speed: 0.1,
                    direction: MoveDirection.none,
                    outModes: {
                        default: OutMode.bounce,
                    },
                },
                number: {
                    value: 200,
                },
                opacity: {
                    value: {
                        min: 0.1,
                        max: 0.5,
                    },
                },
                shape: {
                    type: "star",
                },
                size: {
                    value: {
                        min: 1,
                        max: 2,
                    },
                },
            },
            responsive: [
                {
                    maxWidth: 768,
                    options: {
                        particles: {
                            number: {
                                value: 100,
                            },
                        },
                    },
                },
                {
                    maxWidth: 425,
                    options: {
                        particles: {
                            number: {
                                value: 50,
                            },
                        },
                    },
                },
            ],
        }),
        [],
    );
    
    if (init) {
        return (
            <Particles
                id="bgparticles1"
                options={options}
                className={className}
            />
        );
    }

    return <></>;
}
