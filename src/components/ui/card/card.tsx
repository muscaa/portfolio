import { component$, type PropsOf, Slot } from "@builder.io/qwik";
import { cn } from "@qwik-ui/utils";

const Root = component$<PropsOf<"div">>((props) => {
    return (
        <div
            {...props}
            class={cn(
                "rounded-xl bg-card text-card-foreground border shadow-sm",
                props.class,
            )}
        >
            <Slot />
        </div>
    );
});

const Header = component$<PropsOf<"div">>((props) => {
    return (
        <div {...props} class={cn("flex flex-col space-y-1.5 p-6", props.class)}>
            <Slot />
        </div>
    );
});

const Title = component$<PropsOf<"h3">>((props) => {
    return (
        <h3
            {...props}
            class={cn("leading-none", props.class)}
        >
            <Slot />
        </h3>
    );
});

const Description = component$<PropsOf<"p">>((props) => {
    return (
        <p {...props} class={cn("text-muted-foreground", props.class)}>
            <Slot />
        </p>
    );
});

const Content = component$<PropsOf<"div">>((props) => {
    return (
        <div {...props} class={cn("p-6 pt-0", props.class)}>
            <Slot />
        </div>
    );
});

const Footer = component$<PropsOf<"div">>(({ ...props }) => {
    return (
        <div {...props} class={cn("flex items-center p-6 pt-0", props.class)}>
            <Slot />
        </div>
    );
});

// Experimental API
const Image = component$<PropsOf<"img">>(({ ...props }) => {
    return <img {...props} class={cn("w-full object-cover", props.class)} />;
});

export const Card = {
    Root,
    Header,
    Title,
    Description,
    Content,
    Footer,
    Image,
};
