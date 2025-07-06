import {
    component$,
    useSignal,
    useVisibleTask$,
} from "@builder.io/qwik";
import { ParallaxLayers } from "~/components/other";
import { Parallax } from "~/components/svg";
import { Reveal } from "~/components/animations";
import {
    IconLink,
    ButtonLink,
} from "~/components/other";
import { Si } from "~/components/icons";
import * as Config from "~/config";

export const SectionHome = component$(() => {
    const ref = useSignal<HTMLElement>();
    const interact = useSignal(false);
    const delay = 0;

    useVisibleTask$(() => {
        const handleMouseEnter = () => {
            interact.value = true;
        };
        const handleMouseLeave = () => {
            interact.value = false;
        };

        ref.value!.addEventListener("mouseenter", handleMouseEnter);
        ref.value!.addEventListener("mouseleave", handleMouseLeave);
        return () => {
            ref.value!.removeEventListener("mouseenter", handleMouseEnter);
            ref.value!.removeEventListener("mouseleave", handleMouseLeave);
        };
    });

    return (
        <section ref={ref} class="relative flex h-screen">
            <ParallaxLayers
                interact={interact}
                options={{
                    yFactor: 0
                }}
                layers={[
                    { icon: Parallax.Background, offset: 0, width: Parallax.width, height: Parallax.height, scale: 140 },
                    { icon: Parallax.Mountains, offset: 40, width: Parallax.width, height: Parallax.height, scale: 140 },
                    { icon: Parallax.ForestBack, offset: 80, width: Parallax.width, height: Parallax.height, scale: 140 },
                    { icon: Parallax.ForestMid, offset: 160, width: Parallax.width, height: Parallax.height, scale: 140 },
                    { icon: Parallax.ForestFront, offset: 320, width: Parallax.width, height: Parallax.height, scale: 140 },
                ]}
            />
            <div class="flex flex-col size-full justify-center items-center z-10">
                <div class="flex-grow"></div>
                <div class="flex-grow"></div>
                <Reveal direction="right" delay={delay + 200}>
                    <h1>Hi, I'm {Config.userInfo.shortName}</h1>
                </Reveal>
                <Reveal direction="right" delay={delay + 400}>
                    <h2>{Config.userInfo.role}</h2>
                </Reveal>
                <Reveal class="flex gap-2 justify-center items-center mt-4 lg:mt-8" direction="right" delay={delay + 600}>
                    <IconLink href={Config.contactInfo.github} icon={Si.Github} />
                    <IconLink href={Config.contactInfo.telegram} icon={Si.Telegram} />
                    <IconLink href={Config.contactInfo.instagram} icon={Si.Instagram} />
                    <IconLink href={Config.contactInfo.linkedin} icon={Si.Linkedin} />
                </Reveal>
                <div class="flex-grow"></div>
                <Reveal direction="up" delay={delay + 200}>
                    <ButtonLink href="#about">
                        More
                    </ButtonLink>
                </Reveal>
                <div class="flex-grow"></div>
                <div class="flex-grow"></div>
            </div>
        </section>
    );
});
