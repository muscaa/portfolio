import Link from 'next/link';

function NavButton({ href, text } : { href: string, text: string }) {
    return (
        <li className="my-6">
            <Link href={href}>
                <p className="hover:underline text-3xl">{text}</p>
            </Link>
        </li>
    );
}

export default function Navbar() {
    return (
        <nav className="fixed h-full bg-gray-800 text-white p-20">
            <ul className="flex-col justify-center">
                <NavButton href="/" text="Home" />
                <NavButton href="/about" text="About Me" />
                <NavButton href="/projects" text="Projects" />
                <NavButton href="/resume" text="Resume" />
                <NavButton href="/contact" text="Contact" />
            </ul>
        </nav>
    );
}
