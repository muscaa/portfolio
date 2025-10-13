import {
    component$,
    useSignal,
} from "@builder.io/qwik";
import {
    Button,
    Card,
    Separator,
} from "~/components/ui";
import { Project } from "~/config/types";
import {
    ProjectModal,
    TechBadge,
} from "~/components/other";
import { Lu } from "~/components/icons";

interface ProjectCardProps {
    project: Project;
}

export const ProjectCard = component$<ProjectCardProps>((props) => {
    const show = useSignal(false);

    return (
        <Card.Root class="relative flex flex-col w-80 sm:w-96 lg:w-112 bg-transparent overflow-hidden">
            <Card.Image
                src={props.project.images[0]}
                class="absolute size-full -z-10"
            />
            <div class="h-60"></div>
            <div class="relative flex flex-col justify-between grow">
                <div class="absolute size-full -z-10 backdrop-blur-sm backdrop-brightness-50 mask-t-from-90%"></div>
                <Card.Header>
                    <div class="flex justify-between items-center gap-2">
                        <Button
                            look="link"
                            size="none"
                            class="text-start flex justify-between items-center gap-2 size-full"
                            onClick$={() => show.value = true}
                        >
                            <Card.Title>
                                {props.project.title}
                            </Card.Title>
                            <Lu.ChevronRight class="size-8 shrink-0" />
                        </Button>
                    </div>
                    <Separator />
                    <div class="flex flex-wrap gap-1">
                        {
                            props.project.technologies.map((tech) => (
                                <TechBadge technology={tech} />
                            ))
                        }
                    </div>
                    <ProjectModal
                        bind:show={show}
                        project={props.project}
                    />
                </Card.Header>
            </div>
        </Card.Root>
    );
});
