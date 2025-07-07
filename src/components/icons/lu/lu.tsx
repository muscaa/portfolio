import { component$ } from "@builder.io/qwik";
import { IconProps } from "~/components/other";
import {
    LuMenu,
    LuUser,
    LuWaypoints,
    LuFolderGit,
    LuBookMarked,
} from "@qwikest/icons/lucide";

export const Menu = component$<IconProps>((props) => {
    return (
        <LuMenu
            {...props}
        />
    );
});

export const User = component$<IconProps>((props) => {
    return (
        <LuUser
            {...props}
        />
    );
});

export const Waypoints = component$<IconProps>((props) => {
    return (
        <LuWaypoints
            {...props}
        />
    );
});

export const FolderGit = component$<IconProps>((props) => {
    return (
        <LuFolderGit
            {...props}
        />
    );
});

export const BookMarked = component$<IconProps>((props) => {
    return (
        <LuBookMarked
            {...props}
        />
    );
});
