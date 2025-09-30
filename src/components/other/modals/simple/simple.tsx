import {
    Slot,
    Signal,
    component$,
} from "@builder.io/qwik";
import { cn } from "@qwik-ui/utils";
import {
    Modal,
    ButtonProps,
    buttonVariants,
} from "~/components/ui";
import { Lu } from "~/components/icons";

export const ModalTrigger = component$<ButtonProps>(({ size, look, ...props }) => {
    return (
        <Modal.Trigger {...props} class={cn(buttonVariants({ size, look }), props.class)}>
            <Slot />
        </Modal.Trigger>
    );
});

interface SimpleModalProps {
    'bind:show'?: Signal<boolean>;
    title?: string;
    description?: string;
    class?: string;
}

export const SimpleModal = component$<SimpleModalProps>((props) => {
    return (
        <Modal.Root bind:show={props["bind:show"]}>
            <Slot name="trigger" />
            <Modal.Panel>
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
                <div class={cn(
                    "flex flex-col gap-2",
                    props.class,
                )}>
                    <Slot />
                </div>
                <Modal.Close
                    class={cn(
                        buttonVariants({ size: "icon", look: "link" }),
                        "absolute top-2 right-3",
                    )}
                >
                    <Lu.X class="h-5 w-5" />
                </Modal.Close>
            </Modal.Panel>
        </Modal.Root>
    );
});
