import {
    component$,
} from "@builder.io/qwik";
import { useIsMobile } from "~/utils";
import * as Config from "~/config";
import { Icon } from "~/components/other";
import {
    Lu,
    Images,
} from "~/components/icons";
import { Button } from "~/components/ui";

interface TabProps {
    href: string;
    text: string;
    icon: Icon;
    active?: boolean;
    target?: string;
}

const Tab = component$<TabProps>((props) => {
    return (
        <div class="md:py-4 py-2 px-4">
            <a
                href={props.href}
                target={props.target}
                class={`
                    flex items-center md:text-xl text-sm text-center font-medium
                    transition-colors duration-200 ease-in-out hover:text-primary-light
                    ${props.active ? "text-primary" : ""}
                `}
            >
                <div class="relative flex items-center">
                    <props.icon class="w-6 h-6 mr-2" />
                    <p>{props.text}</p>
                </div>
            </a>
        </div>
    );
});

interface TabListProps {
    activeSection: string;
}

const TabList = component$<TabListProps>((props) => {
    return (
        <div class="flex w-full justify-end">
            <Tab href="/#about" text="about" icon={Lu.User} active={props.activeSection === "about"} />
            <Tab href="/#experience" text="experience" icon={Lu.Waypoints} active={props.activeSection === "experience"} />
            <Tab href="/#projects" text="projects" icon={Lu.FolderGit} active={props.activeSection === "projects"} />
            <Tab href="/#contact" text="contact" icon={Lu.BookMarked} active={props.activeSection === "contact"} />
        </div>
    );
});

interface HamburgerProps {
    activeSection: string;
}

const Hamburger = component$<HamburgerProps>((props) => {
    return (
        <div class="flex items-center">
            <button /* onClick = open popup */>
                <Lu.Menu class="w-6 h-6 mr-4" />
            </button>
        </div>
    );
});

export const Navbar = component$(() => {
    const activeSection = "home";

    return (
        <nav class="sticky top-0 z-40 flex justify-center items-center shadow-sm bg-background2/25 backdrop-blur-lg">
            <div class="flex w-full max-w-6xl">
                <div class="flex w-full justify-start">
                    <Tab href="/#home" text={Config.userInfo.nickName} icon={Images.Profile64x64} />
                </div>

                {
                    useIsMobile() && (
                        <Hamburger activeSection={activeSection} />
                    ) || (
                        <TabList activeSection={activeSection} />
                    )
                }
            </div>
        </nav>
    );
});
