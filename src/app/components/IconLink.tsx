import Link from "next/link";
import { ComponentType } from "react";
import * as Tracker from "../Tracker";

export default function IconLink({ href, IconComponent }: { href: string, IconComponent: ComponentType<{ className?: string }> }) {
    return (
        <Link href={href} target="_blank" className="transform transition-transform hover:scale-110" onClick={() => Tracker.onIconClick(href)}>
            <IconComponent className="w-10 h-10" />
        </Link>
    );
}