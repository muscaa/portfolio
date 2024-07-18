import Link from "next/link";
import { ComponentType } from "react";
import ButtonArrow from "../components/ButtonArrow";
import Github from "../svg/Github";
import Instagram from "../svg/Instagram";
import Linkedin from "../svg/Linkedin";
import Mail from "../svg/Mail";

function IconLink({ href, IconComponent }: { href: string, IconComponent: ComponentType<{ className?: string }> }) {
    return (
        <Link href={href} target="_blank" className="transform transition-transform hover:scale-110">
            <IconComponent className="w-10 h-10" />
        </Link>
    );
}

export default function Footer() {
    return (
        <footer className="bg-background-2 bg-opacity-25 backdrop-blur-lg flex flex-col justify-center items-center text-center py-8 space-y-4">
            <ButtonArrow direction="up" href="#home" className="absolute -top-8" />
            <div className="flex space-x-2">
                <IconLink href="https://github.com/muscaa/" IconComponent={Github} />
                <IconLink href="https://www.instagram.com/musca.mihail/" IconComponent={Instagram} />
                <IconLink href="https://www.linkedin.com/in/muscaa/" IconComponent={Linkedin} />
                <IconLink href="mailto:muscamihailp@gmail.com" IconComponent={Mail} />
            </div>
            <p className="text-xs font-light">© 2024 Musca Mihail</p>
        </footer>
    );
}
