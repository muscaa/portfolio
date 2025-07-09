import {
    component$,
    useSignal,
} from "@builder.io/qwik";
import {
    Title,
} from "~/components/ui";

export const SectionProjects = component$(() => {
    const ref = useSignal<HTMLElement>();

    return (
        <section
            ref={ref}
            id="projects"
            class="flex justify-center h-screen"
        >
            <div class="flex flex-col max-w-6xl w-full bg-green-400">
                <Title>
                    Projects
                </Title>
            </div>
        </section>
    );
});
