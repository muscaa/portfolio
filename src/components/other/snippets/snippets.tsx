import {
    Component,
    Slot,
    PropsOf,
    component$,
} from "@builder.io/qwik";
import { Button } from "~/components/ui";

export interface IconOpts {
    size?: number;
    "stroke-width"?: number;
    class?: string;
}

export type Icon = Component<IconOpts>;

interface IconLinkProps {
    href: string;
    icon: Icon;
}

export const IconLink = component$<IconLinkProps>((props) => {
    return (
        <a href={props.href} target="_blank" class="hover:text-primary transition-all">
            <props.icon class="size-8" />
        </a>
    );
});

interface ButtonLinkProps extends PropsOf<typeof Button> {
    href: string;
    target?: string;
}

export const ButtonLink = component$<ButtonLinkProps>(({ href, target, ...props }) => {
    return (
        <a href={href} target={target}>
            <Button {...props} class={`cursor-pointer ${props.className}`}>
                <Slot />
            </Button>
        </a>
    );
});
