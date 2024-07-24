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

export default function Main() {
    return (
        <>
            <ParticlesBackground className="fixed inset-0 -z-50" />
            <div className="flex flex-col text-text">
                <Home />
                <Navbar />
                <main className="relative">
                    <div className="flex justify-center items-center">
                        <div className="flex flex-col w-full max-w-6xl">
                            <About />
                            <Projects />
                            <Experience />
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
