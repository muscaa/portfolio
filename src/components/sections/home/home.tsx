import {
    component$,
    useSignal,
    useVisibleTask$,
} from "@builder.io/qwik";

export const SectionHome = component$(() => {
    const ref = useSignal<HTMLElement>();
    const interact = useSignal(false);

    useVisibleTask$(() => {
        const handleMouseEnter = () => {
            interact.value = true;
        };
        const handleMouseLeave = () => {
            interact.value = false;
        };

        ref.value!.addEventListener("mouseenter", handleMouseEnter);
        ref.value!.addEventListener("mouseleave", handleMouseLeave);
        return () => {
            ref.value!.removeEventListener("mouseenter", handleMouseEnter);
            ref.value!.removeEventListener("mouseleave", handleMouseLeave);
        };
    });

    return (
        <section ref={ref} class={`relative flex h-screen ${interact.value ? "bg-green-400" : "bg-red-400"}`}>
            <div class="flex flex-col size-full justify-center items-center">
                <h1>hello world</h1>
            </div>
        </section>
    );
});
