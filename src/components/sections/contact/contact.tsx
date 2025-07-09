import {
    component$,
    useSignal,
} from "@builder.io/qwik";
import {
    Title,
} from "~/components/ui";

export const SectionContact = component$(() => {
    const ref = useSignal<HTMLElement>();

    return (
        <section
            ref={ref}
            id="contact"
            class="flex justify-center h-screen"
        >
            <div class="flex flex-col max-w-6xl w-full bg-blue-400">
                <Title>
                    Contact
                </Title>
            </div>
        </section>
    );
});
