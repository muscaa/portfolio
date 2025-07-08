import {
    component$,
    useSignal,
} from "@builder.io/qwik";

export const SectionExperience = component$(() => {
    const ref = useSignal<HTMLElement>();

    return (
        <section
            ref={ref}
            id="experience"
            class="flex h-screen bg-orange-400"
        >
        </section>
    );
});
