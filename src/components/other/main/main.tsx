import {
    component$,
    Slot,
} from "@builder.io/qwik";

export const Main = component$(() => {
    return (
        <div class="flex flex-col max-h-full h-full overflow-y-auto">
            <main class="grow">
                <Slot />
            </main>
        </div>
    );
});
