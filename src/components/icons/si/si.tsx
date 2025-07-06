import { component$ } from "@builder.io/qwik";
import { IconOpts } from "~/components/other";
import {
    SiGithub,
} from "@qwikest/icons/simpleicons";

export const Github = component$<IconOpts>((opts) => {
    return (
        <SiGithub
            {...opts}
        />
    );
});
