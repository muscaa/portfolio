import { component$ } from "@builder.io/qwik";
import {
    IconLink,
    ButtonLink,
} from "~/components/other";
import {
    Si,
    Lu,
} from "~/components/icons";
import * as Config from "~/config";
import { TextLink } from "~/components/ui";

export const FooterBase = component$(() => {
    return (
        <div class="grid grid-cols-1 sm:grid-cols-2 justify-center items-center max-w-5xl w-full px-4 py-8 not-sm:pt-16 gap-4">
            <div class="flex items-center justify-center sm:justify-start gap-4">
                <IconLink href={Config.contactInfo.github} icon={Si.Github} />
                <IconLink href={Config.contactInfo.telegram} icon={Si.Telegram} />
                <IconLink href={Config.contactInfo.instagram} icon={Si.Instagram} />
                <IconLink href={Config.contactInfo.linkedin} icon={Si.Linkedin} />
            </div>
            <div class="flex flex-col items-center sm:items-end text-center">
                <p>
                    Copyright © {new Date().getFullYear()} <TextLink href="https://github.com/muscaa" target="_blank" class="inline-flex items-baseline gap-1">
                        <Si.Github class="size-4 translate-y-1" />
                        muscaa
                    </TextLink>
                </p>
                <p>
                    Made with ❤️ using ⚡️
                </p>
            </div>
        </div>
    );
});

export const Footer = component$(() => {
    return (
        <footer class="relative flex justify-center bg-background2">
            <FooterBase />
            <div class="absolute flex justify-center items-center w-full -translate-y-7">
                <ButtonLink href="#home" look="primary" size="iconLg" class="rounded-full">
                    <Lu.ChevronsUp class="size-12 stroke-[1.5]" />
                </ButtonLink>
            </div>
        </footer>
    );
});
