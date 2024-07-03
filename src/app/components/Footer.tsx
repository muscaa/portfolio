import Link from "next/link";
import ButtonArrow from "./ButtonArrow";
import Github from "../svg/Github";
import Instagram from "../svg/Instagram";
import Linkedin from "../svg/Linkedin";

export default function Footer() {
    return (
        <div className="bg-background-2 bg-opacity-25 backdrop-blur-lg flex flex-col justify-center items-center text-center py-8 space-y-4">
            <ButtonArrow direction="up" href="#home" className="absolute -top-8" />
            <div className="flex space-x-2">
                <Link href="https://github.com/muscaa/" className="transform transition-transform hover:scale-110">
                    <Github className="w-10 h-10" />
                </Link>
                <Link href="https://www.instagram.com/musca.mihail/" className="transform transition-transform hover:scale-110">
                    <Instagram className="w-10 h-10" />
                </Link>
                <Link href="https://www.linkedin.com/in/muscaa/" className="transform transition-transform hover:scale-110">
                    <Linkedin className="w-10 h-10" />
                </Link>
            </div>
            <p className="text-xs font-light">Mihail Musca ©2024</p>
        </div>
    );
}
