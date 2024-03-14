import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full bg-gray-800 text-white p-4">
            <ul className="flex justify-center">
                <li className="mx-2">
                    <Link href="/">
                    <p className="hover:underline">Home</p>
                    </Link>
                </li>
                <li className="mx-2">
                    <Link href="/about">
                    <p className="hover:underline">About Me</p>
                    </Link>
                </li>
                <li className="mx-2">
                    <Link href="/projects">
                    <p className="hover:underline">Projects</p>
                    </Link>
                </li>
                <li className="mx-2">
                    <Link href="/resume">
                    <p className="hover:underline">Resume</p>
                    </Link>
                </li>
                <li className="mx-2">
                    <Link href="/contact">
                    <p className="hover:underline">Contact</p>
                    </Link>
                </li>
                <li className="mx-2">
                    <Link href="/contests">
                    <p className="hover:underline">Contests</p>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
