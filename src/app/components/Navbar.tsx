import Link from 'next/link';

function NavButton({ href, text } : { href: string, text: string }) {
    return (
        <li className="py-4 px-4">
            <Link className="text-xl text-center font-medium" href={href}>
                {text}
            </Link>
        </li>
    );
}

export default function Navbar() {
    return (
        <nav className="bg-background-2 sticky top-0 px-20">
            <ul className="inline-flex w-full md:justify-end justify-center">
                <NavButton href="#home" text="Home" />
                <NavButton href="#about" text="About" />
                <NavButton href="#projects" text="Projects" />
                <NavButton href="#resume" text="Resume" />
                <NavButton href="#contact" text="Contact" />
            </ul>
        </nav>
    );
}
