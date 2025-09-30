import {
    component$,
} from "@builder.io/qwik";
import {
    Button,
    Card,
    Separator,
    Badge,
} from "~/components/ui";
import { Project } from "~/config/types/projects";
import { IconLink } from "~/components/other";
import { Si } from "~/components/icons";
import { cn } from "@qwik-ui/utils";

interface ProjectCardProps {
    project: Project;
}

export const ProjectCard = component$<ProjectCardProps>((props) => {
    const statusColors: Record<Project["status"], string> = {
        "COMPLETE": "text-green-400",
        "IN DEV": "text-orange-400",
    };

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
                        props.project.stack.map((tech) => (
                            <Badge class="grow justify-center">{tech}</Badge>
                        ))
                    }
                </div>
            </Card.Header>
            <Card.Content class="flex justify-between">
                <div class="flex items-end">
                    <h5 class="text-muted-foreground">
                        Status: <span class={cn("h5", statusColors[props.project.status])}>
                            {props.project.status}
                        </span>
                    </h5>
                </div>
                <div class="flex items-center gap-2">
                    <IconLink
                        href={props.project.githubUrl}
                        icon={Si.Github}
                    />
                    <Button size="sm">
                        View
                    </Button>
                </div>
            </Card.Content>
        </Card.Root>
    );
});
