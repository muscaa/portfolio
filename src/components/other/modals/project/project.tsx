import {
    Slot,
    component$,
    useSignal,
} from "@builder.io/qwik";
import { SimpleModal } from "../simple/simple";
import {
    Button,
    Separator,
    Badge,
} from "~/components/ui";
import { Project } from "~/config/types";

interface ProjectModalProps {
    project: Project;
}

export const ProjectModal = component$<ProjectModalProps>((props) => {
    return (
        <SimpleModal
            class="p-0"
        >
            <Slot />
            <div q:slot="content" class="flex flex-col">
                <img
                    src={props.project.cover}
                    alt="Cover"
                />
                <div class="flex flex-col gap-2 p-6">
                    <h2>{props.project.title}</h2>
                    <Separator />
                    <div class="flex flex-wrap gap-1">
                        {
                            props.project.stack.map((tech) => (
                                <Badge class="grow justify-center">{tech}</Badge>
                            ))
                        }
                    </div>
                </div>
            </div>
        </SimpleModal>
    );
});
