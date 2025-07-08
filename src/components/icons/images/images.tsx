import { component$ } from "@builder.io/qwik";
import { IconProps } from "~/components/other";
import { cn } from "@qwik-ui/utils";

export const Profile64x64 = component$<IconProps>((props) => {
    return (
        <img
            {...props}
            src="/profile_64x64.jpg"
            alt="Profile 64x64 Icon"
            width={32}
            height={32}
            class={cn("rounded-full", props.class)}
        />
    );
});
