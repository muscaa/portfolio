import {
    component$,
    useSignal,
} from "@builder.io/qwik";
import {
    Title,
} from "~/components/ui";
import { ProjectCard } from "~/components/other";
import { projects } from "~/config";

export const SectionProjects = component$(() => {
    const ref = useSignal<HTMLElement>();

    return (
        <section
            ref={ref}
            id="projects"
            class="flex justify-center"
        >
            <div class="flex flex-col max-w-6xl w-full">
                <Title>
                    projects
                </Title>
                <div class="flex flex-wrap justify-center gap-2 md:gap-12">
                    {
                        projects.map((project) => (
                            <ProjectCard project={project} />
                        ))
                    }
                </div>
            </div>
        </section>
    );
});
