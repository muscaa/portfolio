import Link from "next/link";
import { useEffect, useState } from "react"

function NavButton({ href, text, active } : { href: string, text: string, active: boolean}) {
    return (
        <li className="md:py-4 py-2 px-4">
            <Link className={`md:text-xl text-sm text-center font-medium hover:underline ${active ? "text-primary" : ""}`} href={href}>
                {text}
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
        <nav className="bg-background-2 bg-opacity-75 backdrop-blur-lg shadow-md shadow-background-1 sticky top-0 px-20 z-50">
            <ul className="inline-flex w-full md:justify-end justify-center">
                <NavButton href="#home" text="Home" active={activeSection == "home"} />
                <NavButton href="#about" text="About" active={activeSection == "about"} />
                <NavButton href="#projects" text="Projects" active={activeSection == "projects"} />
                <NavButton href="#contact" text="Contact" active={activeSection == "contact"} />
            </ul>
        </nav>
    );
}
