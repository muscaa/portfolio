"use client";

import ParticlesBackground from "./components/ParticlesBackground";
import Home from "./sections/Home";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import PopupMenu from "./components/PopupMenu";

export default function Main() {
    return (
        <>
            <ParticlesBackground className="fixed inset-0 -z-50" />
            <div className="flex flex-col md:text-lg text-xs font-medium">
                <Home />
                <Navbar />
                <main className="relative">
                    <div className="flex justify-center items-center">
                        <div className="flex flex-col w-full max-w-6xl">
                            <About />
                            <Skills />
                            <Projects />
                            <Experience />
                            <Contact />
                        </div>
                    </div>

                    <div className="absolute inset-0 -z-50 backdrop-blur-sm"></div>
                </main>
                <Footer />
            </div>
            <PopupMenu />
        </>
    );
}
