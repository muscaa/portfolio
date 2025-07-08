import {
    component$,
    useSignal,
} from "@builder.io/qwik";

export const SectionProjects = component$(() => {
    const ref = useSignal<HTMLElement>();

    return (
        <section
            ref={ref}
            id="projects"
            class="flex h-screen bg-green-400"
        >
        </section>
    );
});
