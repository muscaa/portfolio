import {
    component$,
    useSignal,
} from "@builder.io/qwik";
import {
    Title,
} from "~/components/ui";

export const SectionAbout = component$(() => {
    const ref = useSignal<HTMLElement>();

    return (
        <section
            ref={ref}
            id="about"
            class="flex justify-center h-screen"
        >
            <div class="flex flex-col max-w-6xl w-full bg-red-400">
                <Title>
                    About
                </Title>
            </div>
        </section>
    );
});
