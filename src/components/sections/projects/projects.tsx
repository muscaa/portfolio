import {
    component$,
    useSignal,
} from "@builder.io/qwik";
import {
    Title,
} from "~/components/ui";
import { ProjectCard } from "~/components/other";
import { projects } from "~/config/projects";

export const SectionProjects = component$(() => {
    const ref = useSignal<HTMLElement>();

    return (
        <section
            ref={ref}
            id="projects"
            class="flex justify-center h-screen"
        >
            <div class="flex flex-col max-w-6xl w-full">
                <Title>
                    projects
                </Title>
                {
                    projects.map((project) => (
                        <ProjectCard project={project} />
                    ))
                }
            </div>
        </section>
    );
});
