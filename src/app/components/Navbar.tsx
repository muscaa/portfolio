import Link from "next/link";
import { useEffect, useState } from "react"
import { ComponentType } from "react";
import Home from "../svg/Home";
import UserMale from "../svg/UserMale";
import CheckAll from "../svg/CheckAll";
import Contacts from "../svg/Contacts";

function NavButton({ href, text, IconComponent, active } : { href: string, text: string, IconComponent: ComponentType<{ className?: string }>, active: boolean}) {
    return (
        <li className="md:py-4 py-2 px-4">
            <Link className={`flex items-center md:text-xl text-sm text-center font-medium ${active ? "text-secondary" : ""}`} href={href}>
                <div className="absolute flex blur-md opacity-0 hover:opacity-100 transition-opacity duration-200">
                    <IconComponent className="w-6 h-6 mr-2" />
                    <span>{text}</span>
                </div>
                <div className="flex">
                    <IconComponent className="w-6 h-6 mr-2" />
                    <span>{text}</span>
                </div>
            </Link>
        </li>
    );
}

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            let active = "home";

            document.querySelectorAll("section").forEach(section => {
                const offset = section.offsetTop + section.offsetHeight / 2;
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

    return (
        <nav className="bg-background-2 bg-opacity-50 backdrop-blur-lg shadow-bottom shadow-background-1 sticky top-0 px-20 z-50">
            <ul className="inline-flex w-full md:justify-end justify-center">
                <NavButton href="#home" text="Home" IconComponent={Home} active={activeSection == "home"} />
                <NavButton href="#about" text="About" IconComponent={UserMale} active={activeSection == "about"} />
                <NavButton href="#projects" text="Projects" IconComponent={CheckAll} active={activeSection == "projects"} />
                <NavButton href="#contact" text="Contact" IconComponent={Contacts} active={activeSection == "contact"} />
            </ul>
        </nav>
    );
}
