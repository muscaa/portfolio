import {
    Component,
    Slot,
    PropsOf,
    QwikIntrinsicElements,
    component$,
} from "@builder.io/qwik";
import {
    Button,
    Badge,
} from "~/components/ui";
import {
    Technology,
    ProjectStatus,
} from "~/config/types";

export interface IconProps {
    id?: string;
    class?: string;
}

export type Icon = Component<QwikIntrinsicElements["svg"]>;

interface IconLinkProps {
    href: string;
    icon: Icon;
}

export const IconLink = component$<IconLinkProps>((props) => {
    return (
        <a href={props.href} target="_blank" class="hover:scale-110 transition-all">
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
            <Button {...props} class={`cursor-pointer ${props.class}`}>
                <Slot />
            </Button>
        </a>
    );
});

interface TechBadgeProps {
    technology: Technology;
}

export const TechBadge = component$<TechBadgeProps>((props) => {
    return (
        <Badge
            look="aquamarine"
            class="grow justify-center"
        >
            {props.technology.name}
        </Badge>
    );
});

interface ColoredProjectStatusProps {
    status: ProjectStatus;
}

export const ColoredProjectStatus = component$<ColoredProjectStatusProps>((props) => {
    return (
        <span
            class="h5"
            style={{
                color: props.status.color,
            }}
        >
            {props.status.text}
        </span>
    );
});
