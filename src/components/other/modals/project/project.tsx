import {
    Slot,
    component$,
} from "@builder.io/qwik";
import { SimpleModal } from "../simple/simple";
import {
    Separator,
    Carousel,
    Button,
} from "~/components/ui";
import { Project } from "~/config/types";
import {
    TechBadge,
    ColoredProjectStatus,
    IconLink,
} from "~/components/other";
import { Si } from "~/components/icons";

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
                <div class="flex justify-between mt-6 mb-2">
                    <div class="flex items-end">
                        <h5 class="text-muted-foreground">
                            Status: <ColoredProjectStatus status={props.project.status} />
                        </h5>
                    </div>
                    <div class="flex items-center gap-2">
                        <IconLink
                            href={props.project.githubUrl}
                            icon={Si.Github}
                        />
                        <Button
                            size="sm"
                        >
                            Demo
                        </Button>
                    </div>
                </div>
            </div>
        </SimpleModal>
    );
});
