import { type PropsOf, Slot, component$ } from "@builder.io/qwik";
import { Modal as HeadlessModal } from "@qwik-ui/headless";
import { cn } from "@qwik-ui/utils";
import { cva, type VariantProps } from "class-variance-authority";

const Root = HeadlessModal.Root;

const Trigger = HeadlessModal.Trigger;

const Close = HeadlessModal.Close;

export const overlayVariants = cva(
    [
        "fixed z-50 size-full group flex flex-col bg-transparent text-foreground transition-all",
        "backdrop:brightness-50 backdrop:backdrop-blur-sm",
        "data-[open]:duration-300 data-[closing]:duration-300",
        "data-[open]:animate-in data-[closing]:animate-out",
        "backdrop:data-[open]:duration-300 backdrop:data-[closing]:duration-300",
        "backdrop:data-[open]:animate-in backdrop:data-[closing]:animate-out",
        "backdrop:data-[open]:fade-in backdrop:data-[closing]:fade-out",
    ],
    {
        variants: {
            position: {
                center: "justify-center items-center p-2",
                top: "justify-start items-center",
                bottom: "justify-end items-center",
                left: "justify-center items-start",
                right: "justify-center items-end",
            },
        },
        defaultVariants: {
            position: "center",
        },
    },
);

type OverlayProps = PropsOf<typeof HeadlessModal.Panel> &
    VariantProps<typeof overlayVariants>;

const Overlay = component$<OverlayProps>(({ position, ...props }) => {
    return (
        <HeadlessModal.Panel
            {...props}
            bypassCloseOnBackdropClick
            class={cn(overlayVariants({ position }), props.class)}
        >
            <Slot />
        </HeadlessModal.Panel>
    );
});

export const popupVariants = cva(
    [
        "relative flex flex-col max-w-full max-h-full gap-2 bg-background p-6 text-foreground transition-all",
        "group-data-[open]:duration-300 group-data-[closing]:duration-300",
        "group-data-[open]:animate-in group-data-[closing]:animate-out",
    ],
    {
        variants: {
            position: {
                center: "max-w-lg w-full rounded-xl shadow-lg group-data-[closed]:fade-out group-data-[open]:fade-in group-data-[closed]:zoom-out-95 group-data-[open]:zoom-in-95 group-data-[open]:slide-in-from-bottom-2",
                top: "w-full rounded-b-xl border-b group-data-[closing]:slide-out-to-top group-data-[open]:slide-in-from-top",
                bottom: "w-full rounded-t-xl border-t group-data-[closing]:slide-out-to-bottom group-data-[open]:slide-in-from-bottom",
                left: "h-full max-w-sm rounded-r-xl border-r group-data-[closing]:slide-out-to-left group-data-[open]:slide-in-from-left",
                right: "h-full max-w-sm rounded-l-xl border-l group-data-[closing]:slide-out-to-right group-data-[open]:slide-in-from-right",
            },
        },
        defaultVariants: {
            position: "center",
        },
    },
);

type PopupProps = PropsOf<"div"> &
    VariantProps<typeof popupVariants>;

const Popup = component$<PopupProps>(({ position, ...props }) => {
    return (
        <div
            {...props}
            class={cn(popupVariants({ position }), props.class)}
        >
            <Slot />
        </div>
    );
});

type PanelProps = PopupProps;

const Panel = component$<PanelProps>(({ position, ...props }) => {
    return (
        <Overlay
            position={position}
        >
            <Popup
                {...props}
                position={position}
            >
                <Slot />
            </Popup>
        </Overlay>
    );
});

const Title = component$<PropsOf<"h2">>(({ ...props }) => {
    return (
        <HeadlessModal.Title
            {...props}
            class={cn("h2", props.class)}
        >
            <Slot />
        </HeadlessModal.Title>
    );
});

const Description = component$<PropsOf<"p">>(({ ...props }) => {
    return (
        <HeadlessModal.Description
            {...props}
            class={cn("text-muted-foreground p", props.class)}
        >
            <Slot />
        </HeadlessModal.Description>
    );
});

export const Modal = {
    Root,
    Trigger,
    Close,
    Overlay,
    Popup,
    Panel,
    Title,
    Description,
};
