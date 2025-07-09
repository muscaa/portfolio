import {
    component$,
    Slot,
} from "@builder.io/qwik";
import { cn } from "@qwik-ui/utils";

interface TitleProps {
    class?: string;
}

export const Title = component$<TitleProps>((props) => {
    return (
        <h1 class={cn("first-letter:text-aquamarine h2 first-letter:h1 text-center py-12 sm:py-16 md:py-20", props.class)}>
            <Slot />
        </h1>
    );
});
