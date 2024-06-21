"use client";

import Home from "./sections/Home";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import ParticlesBackground from "./components/ParticlesBackground";

export default function Main() {
    return (
        <>
            <ParticlesBackground />
            <main className="flex flex-col md:text-base text-xs">
                <Home />
                <Navbar />
                <div className="backdrop-blur-sm">
                    <About />
                    <Projects />
                    <Contact />
                </div>
            </main>
        </>
    );
}