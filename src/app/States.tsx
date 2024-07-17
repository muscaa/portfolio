import { useState, useEffect } from "react";

export function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0,
    });
    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        handleResize();

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return windowSize;
}

export function useActiveSection() {
    const [activeSection, setActiveSection] = useState("");
    useEffect(() => {
        const handleScroll = () => {
            let active = "home";

            document.querySelectorAll("section").forEach(section => {
                const offset = section.offsetTop + window.innerHeight / 2;
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

    return activeSection;
}

export function useIsMobile() {
    return useWindowSize().width < 1024;
}
