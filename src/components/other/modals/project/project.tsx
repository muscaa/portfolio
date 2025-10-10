import {
    Slot,
    component$,
} from "@builder.io/qwik";
import { SimpleModal } from "../simple/simple";
import {
    Button,
    Separator,
    Badge,
} from "~/components/ui";
import { Project } from "~/config/types";
import { TechBadge } from "~/components/other";
import { Carousel } from "~/components/ui";

interface ProjectModalProps {
    project: Project;
}

export const ProjectModal = component$<ProjectModalProps>((props) => {
    return (
        <SimpleModal
            title={props.project.title}
        >
            <q:template q:slot="trigger">
                <Slot />
            </q:template>
            <div class="flex flex-col gap-2 overflow-auto">
                <div class="flex flex-wrap gap-1">
                    {
                        props.project.technologies.map((tech) => (
                            <TechBadge technology={tech} />
                        ))
                    }
                </div>
                <Carousel.Root class="w-full my-4">
                    <Carousel.Scroller>
                        {
                            props.project.images.map((image, index) => (
                                <Carousel.Slide key={index}>
                                    <div class="rounded-xl shadow-lg overflow-hidden">
                                        <img
                                            src={image}
                                        />
                                    </div>
                                </Carousel.Slide>
                            ))
                        }
                    </Carousel.Scroller>
                    <Carousel.Previous
                        look="transluscent"
                        extraClass="left-2"
                    />
                    <Carousel.Next
                        look="transluscent"
                        extraClass="right-2"
                    />
                </Carousel.Root>
                <h4>Description</h4>
                <Separator />
                <p class="text-justify">{props.project.description}</p>
            </div>
        </SimpleModal>
    );
});
