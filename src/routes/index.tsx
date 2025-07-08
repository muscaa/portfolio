import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import {
    Button,
    Accordion,
    Badge,
    Card,
    Input,
    Separator,
    Textarea,
} from "~/components/ui";
import { LuBell, LuCheck } from '@qwikest/icons/lucide';
import { Main } from "~/components/other";
import {
    SectionHome
} from "~/components/sections";
import { Navbar } from "~/components/other";

export default component$(() => {
    const notifications = [
        {
            title: 'Your call has been confirmed.',
            description: '1 hour ago',
        },
        {
            title: 'You have a new message!',
            description: '1 hour ago',
        },
        {
            title: 'Your subscription is expiring soon!',
            description: '2 hours ago',
        },
    ];

    return (
        <Main
            navigation={<></>}
            header={
                <>
                    <div class="grow">
                        <SectionHome />
                    </div>
                    <Navbar />
                </>
            }
        >
            {/*<ParticlesBackground className="fixed inset-0 -z-50" />*/}
            <div class="flex flex-col">
                <SectionHome />
                {/*<main className="relative">
                    <div className="flex justify-center items-center">
                        <div className="flex flex-col w-full max-w-6xl">
                            <About />
                            <Experience />
                            <Projects />
                            <Contact />
                        </div>
                    </div>
                </main>
                <Footer />*/}
            </div>
            {/*<PopupMenu />
            <ProjectMenu />
            <LoadingScreen loading={loading} />*/}
        </Main>
    );
});

export const head: DocumentHead = {
    title: "Welcome to Qwik",
    meta: [
        {
            name: "description",
            content: "Qwik site description",
        },
    ],
};
