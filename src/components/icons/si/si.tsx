import { component$ } from "@builder.io/qwik";
import { IconProps } from "~/components/other";
import {
    SiGithub,
    SiTelegram,
    SiInstagram,
    SiLinkedin,
} from "@qwikest/icons/simpleicons";

export const Github = component$<IconProps>((props) => {
    return (
        <SiGithub
            {...props}
        />
    );
});

export const Telegram = component$<IconProps>((props) => {
    return (
        <SiTelegram
            {...props}
        />
    );
});

export const Instagram = component$<IconProps>((props) => {
    return (
        <SiInstagram
            {...props}
        />
    );
});

export const Linkedin = component$<IconProps>((props) => {
    return (
        <SiLinkedin
            {...props}
        />
    );
});
