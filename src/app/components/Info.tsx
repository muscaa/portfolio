import Link from "next/link";
import { ComponentType } from "react";

export default function Info({ name, value, href, IconComponent }:
    { name: string, value: string, href: string, IconComponent: ComponentType<{ className?: string }> }) {
    return (
        <Link href={href} target="_blank" className="flex items-center gap-4 p-2
        bg-background-4 bg-opacity-25 backdrop-blur-sm rounded-md
        transform transition-transform duration-200 ease-in-out hover:scale-105
        ">
            <IconComponent className="w-8 h-8 text-primary" />
            <div className="flex flex-col">
                <p className="font-bold text-primary">{name}</p>
                <p className="font-light text-text-2">{value}</p>
            </div>
        </Link>
    );
}