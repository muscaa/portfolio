import { component$, type PropsOf, Slot } from "@builder.io/qwik";
import { cn } from "@qwik-ui/utils";
import { cva, type VariantProps } from "class-variance-authority";

export const textLinkVariants = cva(
    "transition-all underline-offset-4 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
    {
        variants: {
            look: {
                default:
                    "text-accent-foreground hover:underline font-semibold",
                ghost:
                    "hover:underline hover:text-accent-foreground",
            },
            size: {
                default: "h-9 px-4 py-2 has-[>svg]:px-3",
                sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
                lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
                icon: "size-9",
                none: "",
            },
        },
        defaultVariants: {
            look: "default",
            size: "none",
        },
    }
);

type TextLinkProps = PropsOf<"a"> & VariantProps<typeof textLinkVariants>;

export const TextLink = component$<TextLinkProps>(({ size, look, ...props }) => {
    return (
        <a {...props} class={cn(textLinkVariants({ size, look }), props.class)}>
            <Slot />
        </a>
    );
});
