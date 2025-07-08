import {
    component$,
    JSXOutput,
    Slot,
} from "@builder.io/qwik";
import { cn } from "@qwik-ui/utils";
import {
    Navbar,
    Footer,
} from "~/components/other";

interface MainProps {
    class?: string;
    navigation?: JSXOutput;
    header?: JSXOutput;
    footer?: JSXOutput;
}

export const Main = component$<MainProps>((props) => {
    return (
        <>
            {
                props.navigation || <Navbar />
            }
            <div class={cn("flex flex-col max-h-full h-full overflow-y-auto", props.class)}>
                {
                    props.header || <></>
                }
                <main class="grow">
                    <Slot />
                </main>
                {
                    props.footer || <Footer />
                }
            </div>
        </>
    );
});
