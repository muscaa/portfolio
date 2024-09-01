import React from "react";
import Arrow from "../svg/Arrow";
import { useState } from "react";
import Divider from "./Divider";

export default function Details({ className, title, children }: { className?: string, title: string, children: JSX.Element[] | JSX.Element }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`
        relative
        bg-background-4 bg-opacity-25 rounded-md
        border border-background-4 border-opacity-25
        ${className}`}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-full h-full
                apearance-none outline-none px-3 py-1 text-left"
            >
                {title}
                <Arrow className={`w-5 h-5 ml-2 transition-transform duration-200 ease-in-out ${isOpen ? "-rotate-180" : ""}`} />
            </button>
            {isOpen && (
                <>
                    <Divider />
                    <div className="p-3">
                        {Array.isArray(children) ? children : [children]}
                    </div>
                </>
            )}
        </div>
    );
}