import {
    component$,
    useSignal,
} from "@builder.io/qwik";
import {
    Title,
} from "~/components/ui";

export const SectionExperience = component$(() => {
    const ref = useSignal<HTMLElement>();

    return (
        <section
            ref={ref}
            id="experience"
            class="flex justify-center h-screen"
        >
            <div class="flex flex-col max-w-6xl w-full bg-orange-400">
                <Title>
                    experience
                </Title>
            </div>
        </section>
    );
});
