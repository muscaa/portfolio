import Link from "next/link";
import { useEffect, useState } from "react"
import { ComponentType } from "react";
import Home from "../svg/Home";
import UserMale from "../svg/UserMale";
import CheckAll from "../svg/CheckAll";
import Contacts from "../svg/Contacts";
import Menu from "../svg/Menu";
import Close from "../svg/Close";
import Maxi from "./Maxi";

function NavButton({ href, text, IconComponent, active }: { href: string, text: string, IconComponent: ComponentType<{ className?: string }>, active?: boolean }) {
    return (
        <li className="md:py-4 py-2 px-4">
            <Link className={`flex items-center md:text-xl text-sm text-center font-medium ${active ? "text-primary" : ""}`} href={href}>
                <div className="relative flex items-center">
                    <IconComponent className="w-6 h-6 mr-2" />
                    <p>{text}</p>
                </div>
            </Link>
        </li>
    );
}

function Small({ activeSection }: { activeSection: string }) {
    return (
        <div className="flex items-center">
            <Menu className="w-6 h-6 mr-2" />
        </div>
    );
}

function Big({ activeSection }: { activeSection: string }) {
    return (
        <ul className="inline-flex w-full justify-end">
            <NavButton href="#home" text="Home" IconComponent={Home} active={activeSection == "home"} />
            <NavButton href="#about" text="About" IconComponent={UserMale} active={activeSection == "about"} />
            <NavButton href="#projects" text="Projects" IconComponent={CheckAll} active={activeSection == "projects"} />
            <NavButton href="#contact" text="Contact" IconComponent={Contacts} active={activeSection == "contact"} />
        </ul>
    );
}

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("");
    useEffect(() => {
        const handleScroll = () => {
            let active = "home";

            document.querySelectorAll("section").forEach(section => {
                const offset = section.offsetTop + window.innerHeight / 2;
                const height = section.offsetHeight;
                const id = section.getAttribute("id") || "home";

                if (window.scrollY >= offset && window.scrollY < offset + height) {
                    active = id;
                }
            });

            setActiveSection(active);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0,
    });
    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        handleResize();

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    const isMobile = windowSize.width < 768;

    return (
        <nav className="bg-background-2 bg-opacity-25 backdrop-blur-lg shadow-bottom shadow-background-1 sticky top-0 z-50 flex">
            <ul className="inline-flex w-full justify-start">
                <NavButton href="https://github.com/muscaa/portfolio/" text="muscaa" IconComponent={Maxi} />
            </ul>

            {isMobile ? (
                <Small activeSection={activeSection} />
            ) : (
                <Big activeSection={activeSection} />
            )}
        </nav>
    );
}
