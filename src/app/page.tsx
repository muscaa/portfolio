"use client";

import ParticlesBackground from "./components/ParticlesBackground";
import Home from "./sections/Home";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import PopupMenu from "./components/PopupMenu";
import { useState, useEffect } from "react";

export default function Main() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isPageLoaded, setIsPageLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    useEffect(() => {
        if (isLoaded) {
            setIsPageLoaded(true);
        }
    }, [isLoaded]);

    useEffect(() => {
        const pp = document.getElementsByClassName("pp-svg")[0] as HTMLElement;
        console.log("hello");
        if (pp == null) return;
    
        pp.style.display = "none";

        setTimeout(() => {
            pp.style.display = "block";
        }, 1000);
    }, [isPageLoaded]);

    //<ParticlesBackground className="fixed inset-0 -z-50" />
    return (
        <>
            <div className="flex flex-col h4 font-medium text-text">
                <Home />
                <Navbar />
                <main className="relative">
                    <div className="flex justify-center items-center">
                        <div className="flex flex-col w-full max-w-6xl">
                            <About />
                            <Experience />
                            <Projects />
                            <Contact />
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
            <PopupMenu />
        </>
    );
}
