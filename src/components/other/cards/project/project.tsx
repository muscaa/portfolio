import {
    component$,
} from "@builder.io/qwik";
import {
    Card,
    Separator,
} from "~/components/ui";
import { Project } from "~/config/types";
import {
    IconLink,
    ProjectModal,
    ModalTrigger,
    TechBadge,
    ColoredProjectStatus,
} from "~/components/other";
import { Si } from "~/components/icons";

interface ProjectCardProps {
    project: Project;
}

export const ProjectCard = component$<ProjectCardProps>((props) => {
    return (
        <Card.Root class="relative w-80 sm:w-96 lg:w-112 bg-transparent overflow-hidden">
            <Card.Image
                src={props.project.cover}
                class="absolute size-full -z-10 brightness-50 blur-sm"
            />
            <Card.Header>
                <Card.Title>
                    {props.project.title}
                </Card.Title>
                <Separator />
                <div class="flex flex-wrap gap-1">
                    {
                        props.project.technologies.map((tech) => (
                            <TechBadge technology={tech} />
                        ))
                    }
                </div>
            </Card.Header>
            <Card.Content class="flex justify-between">
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
                    <ProjectModal
                        project={props.project}
                    >
                        <ModalTrigger size="sm">
                            View
                        </ModalTrigger>
                    </ProjectModal>
                </div>
            </Card.Content>
        </Card.Root>
    );
});
