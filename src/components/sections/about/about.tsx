import {
    component$,
    useSignal,
} from "@builder.io/qwik";

export const SectionAbout = component$(() => {
    const ref = useSignal<HTMLElement>();

    return (
        <section
            ref={ref}
            id="about"
            class="flex h-screen bg-red-400"
        >
        </section>
    );
});
