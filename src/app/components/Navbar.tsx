import Link from "next/link";
import { ComponentType } from "react";
import Home from "../svg/Home";
import UserMale from "../svg/UserMale";
import CheckAll from "../svg/CheckAll";
import Contacts from "../svg/Contacts";
import Menu from "../svg/Menu";
import Maxi from "./Maxi";
import {
    useWindowSize,
    useActiveSection
} from "../States";
import { openPopupMenu } from "./PopupMenu";

export function Tab({ href, text, IconComponent, active }: { href: string, text: string, IconComponent: ComponentType<{ className?: string }>, active?: boolean }) {
    return (
        <li className="md:py-4 py-2 px-4">
            <Link className={`flex items-center md:text-xl text-sm text-center font-medium transition-colors duration-200 ease-in-out hover:text-primary ${active ? "text-primary" : ""}`} href={href}>
                <div className="relative flex items-center">
                    <IconComponent className="w-6 h-6 mr-2" />
                    <p>{text}</p>
                </div>
            </Link>
        </li>
    );
}

function Hamburger({ activeSection }: { activeSection: string }) {
    return (
        <div className="flex items-center">
            <button onClick={openPopupMenu}>
                <Menu className="w-6 h-6 mr-4" />
            </button>
        </div>
    );
}

function Tabs({ activeSection }: { activeSection: string }) {
    return (
        <ul className="inline-flex w-full justify-end">
            <Tab href="#home" text="Home" IconComponent={Home} active={activeSection == "home"} />
            <Tab href="#about" text="About" IconComponent={UserMale} active={activeSection == "about"} />
            <Tab href="#projects" text="Projects" IconComponent={CheckAll} active={activeSection == "projects"} />
            <Tab href="#contact" text="Contact" IconComponent={Contacts} active={activeSection == "contact"} />
        </ul>
    );
}

export default function Navbar() {
    const activeSection = useActiveSection();
    const windowSize = useWindowSize();
    const isMobile = windowSize.width < 768;

    return (
        <nav className="bg-background-2 bg-opacity-25 backdrop-blur-lg shadow-md shadow-shadow sticky top-0 z-50 flex">
            <ul className="inline-flex w-full justify-start">
                <Tab href="https://github.com/muscaa/portfolio/" text="muscaa" IconComponent={Maxi} />
            </ul>

            {isMobile ? (
                <Hamburger activeSection={activeSection} />
            ) : (
                <Tabs activeSection={activeSection} />
            )}
        </nav>
    );
}
