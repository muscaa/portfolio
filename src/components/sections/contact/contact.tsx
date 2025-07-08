import {
    component$,
    useSignal,
} from "@builder.io/qwik";

export const SectionContact = component$(() => {
    const ref = useSignal<HTMLElement>();

    return (
        <section
            ref={ref}
            id="contact"
            class="flex h-screen bg-blue-400"
        >
        </section>
    );
});
