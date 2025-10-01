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
            <Slot />
            <Modal.Panel class={props.class}>
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
                <Slot name="content" />
                <Modal.Close
                    class={cn(
                        buttonVariants({ size: "icon", look: "link" }),
                        "absolute top-2 right-2",
                    )}
                >
                    <Lu.X class="h-6 w-6" />
                </Modal.Close>
            </Modal.Panel>
        </Modal.Root>
    );
});
