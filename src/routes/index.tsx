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
import {
    SectionHome
} from "~/components/sections";

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
        <>
            {/*<ParticlesBackground className="fixed inset-0 -z-50" />*/}
            <div class="flex flex-col h4 font-medium text-text">
                <SectionHome />
                {/*<Navbar />
                <main className="relative">
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
            <div class="flex justify-center items-center">
                <div class="flex flex-col gap-2 max-w-lg my-32">
                    <h1>Hi 👋</h1>
                    <p>Can't wait to see what you build with qwik!</p>
                    <p>Happy coding.</p>
                    <Button look="alert">
                        alert
                    </Button>
                    <Button look="ghost">
                        ghost
                    </Button>
                    <Button look="link">
                        link
                    </Button>
                    <Button look="outline">
                        outline
                    </Button>
                    <Button look="primary">
                        primary
                    </Button>
                    <Button look="secondary">
                        secondary
                    </Button>
                    <Accordion.Root behavior="single" collapsible class="w-full">
                        <Accordion.Item id="item-1">
                            <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
                            <Accordion.Content>Yes. It adheres to the WAI-ARIA design pattern.</Accordion.Content>
                        </Accordion.Item>
                    </Accordion.Root>
                    <Badge>Badge</Badge>
                    <Card.Root class="w-[380px]">
                        <Card.Header>
                            <Card.Title>Notifications</Card.Title>
                            <Card.Description>You have 3 unread messages.</Card.Description>
                        </Card.Header>
                        <Card.Content class="grid gap-4">
                            <div class=" flex items-center space-x-4 rounded-md border p-4">
                                <LuBell />
                                <div class="flex-1 space-y-1">
                                    <p class="text-sm font-medium leading-none">Push Notifications</p>
                                    <p class="text-sm text-muted-foreground">Send notifications to device.</p>
                                </div>
                                {/* <Switch /> */}
                            </div>
                            <div>
                                {notifications.map((notification, index) => (
                                    <div
                                        key={index}
                                        class="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                                    >
                                        <span class="flex h-2 w-2 translate-y-1 rounded-full bg-primary" />
                                        <div class="space-y-1">
                                            <p class="text-sm font-medium leading-none">{notification.title}</p>
                                            <p class="text-sm text-muted-foreground">{notification.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Card.Content>
                        <Card.Footer>
                            <Button class="w-full">
                                <LuCheck class="mr-2 h-4 w-4" /> Mark all as read
                            </Button>
                        </Card.Footer>
                    </Card.Root>
                    <Separator />
                    <Input type="email" placeholder="Email" />
                    <Separator />
                    <Textarea placeholder="Type your message here." />
                    <Separator />
                </div>
            </div>
        </>
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
