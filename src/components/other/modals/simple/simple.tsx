import {
    Slot,
    Signal,
    component$,
    useContext,
} from "@builder.io/qwik";
import { cn } from "@qwik-ui/utils";
import {
    Modal,
    ButtonProps,
    buttonVariants,
    Separator,
} from "~/components/ui";
import { Lu } from "~/components/icons";

export const ModalTrigger = component$<ButtonProps>(({ size, look, ...props }) => {
    return (
        <Modal.Trigger
            q:slot="trigger"
            {...props}
            class={cn(buttonVariants({ size, look }), props.class)}
        >
            <Slot />
        </Modal.Trigger>
    );
});

interface SimpleModalContentProps {
    title?: string;
    description?: string;
    class?: string;
}

const SimpleModalContent = component$<SimpleModalContentProps>((props) => {
    const context = useContext(Modal.contextId);

    return (
        <>
            <Slot name="trigger" />
            <div
                data-open={context.showSig.value && ""}
                data-closed={!context.showSig.value && ""}
                class={cn(
                    "fixed z-50 left-0 top-0 w-screen h-screen",
                    "flex flex-col p-2 justify-center items-center",
                    "data-[closed]:hidden data-[open]:visible"
                )}
            >
                <Modal.Panel
                    class={cn("relative flex flex-col gap-2 m-0", props.class)}
                >
                    {
                        props.title && (
                            <Modal.Title>
                                {props.title}
                            </Modal.Title>
                        )
                    }
                    {
                        props.description && (
                            <Modal.Description>
                                {props.description}
                            </Modal.Description>
                        )
                    }
                    <Separator />
                    <Slot />
                    <Modal.Close
                        class={cn(
                            buttonVariants({ size: "icon", look: "link" }),
                            "absolute top-2 right-2",
                        )}
                    >
                        <Lu.X class="h-6 w-6" />
                    </Modal.Close>
                </Modal.Panel>
            </div>
        </>
    );
});

interface SimpleModalProps extends SimpleModalContentProps {
    "bind:show"?: Signal<boolean>;
}

export const SimpleModal = component$<SimpleModalProps>(({ "bind:show": bindShow, ...props }) => {
    return (
        <Modal.Root bind:show={bindShow}>
            <SimpleModalContent
                {...props}
            >
                <q:template q:slot="trigger">
                    <Slot name="trigger" />
                </q:template>
                <Slot />
            </SimpleModalContent>
        </Modal.Root>
    );
});
