import React from "react";
import {
    useWindowSize,
    useActiveSection
} from "../States";
import Close from "../svg/Close";
import { Tab } from "./Navbar";
import Home from "../svg/Home";
import UserMale from "../svg/UserMale";
import CheckAll from "../svg/CheckAll";
import Contacts from "../svg/Contacts";

export function openPopupMenu() {
    const popupMenu = document.getElementById("popupMenu");
    if (popupMenu == null) return;

    popupMenu.style.width = "100%";
    document.body.style.overflow = "hidden";
}

export function closePopupMenu() {
    const popupMenu = document.getElementById("popupMenu");
    if (popupMenu == null) return;

    popupMenu.style.width = "0%";
    document.body.style.overflow = "auto";
}

function Tabs({ activeSection }: { activeSection: string }) {
    return (
        <ul className="flex flex-col w-full justify-center">
            <Tab href="#home" text="Home" IconComponent={Home} active={activeSection == "home"} />
            <Tab href="#about" text="About" IconComponent={UserMale} active={activeSection == "about"} />
            <Tab href="#projects" text="Projects" IconComponent={CheckAll} active={activeSection == "projects"} />
            <Tab href="#contact" text="Contact" IconComponent={Contacts} active={activeSection == "contact"} />
        </ul>
    );
}

export default function PopupMenu() {
    const activeSection = useActiveSection();
    const windowSize = useWindowSize();
    const isMobile = windowSize.width < 768;

    if (!isMobile) return null;
    return (
        <div id="popupMenu" className="fixed right-0 top-0 w-0 transition-all duration-200 ease-in-out h-full bg-background-1 bg-opacity-25 backdrop-blur-3xl z-50">
            <div className="absolute inset-0 w-screen flex flex-col">
                <div className="flex justify-end md:py-4 py-2">
                    <button onClick={closePopupMenu}>
                        <Close className="w-6 h-6 mr-4" />
                    </button>
                </div>
                <div>
                    <Tabs activeSection={activeSection} />
                </div>
            </div>
        </div>
    );
}
