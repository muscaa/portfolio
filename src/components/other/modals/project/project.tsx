import {
    Slot,
    component$,
    useSignal,
} from "@builder.io/qwik";
import { SimpleModal } from "../simple/simple";
import { Button } from "~/components/ui";

interface ProjectModalProps {

}

export const ProjectModal = component$<ProjectModalProps>(() => {
    const show = useSignal(false);

    return (
        <SimpleModal
            bind:show={show}
            title="Project"
        >
            <Slot name="trigger" q:slot="trigger" />
            <Button onClick$={() => show.value = false}>Close</Button>
        </SimpleModal>
    );
});
