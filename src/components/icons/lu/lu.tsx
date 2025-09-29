import { component$ } from "@builder.io/qwik";
import { IconProps } from "~/components/other";
import {
    LuMenu,
    LuUser,
    LuWaypoints,
    LuFolderGit,
    LuBookMarked,
    LuChevronsUp,
    LuMapPin,
    LuPhone,
    LuMail,
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

export const ChevronsUp = component$<IconProps>((props) => {
    return (
        <LuChevronsUp
            {...props}
        />
    );
});

export const MapPin = component$<IconProps>((props) => {
    return (
        <LuMapPin
            {...props}
        />
    );
});

export const Phone = component$<IconProps>((props) => {
    return (
        <LuPhone
            {...props}
        />
    );
});

export const Mail = component$<IconProps>((props) => {
    return (
        <LuMail
            {...props}
        />
    );
});
