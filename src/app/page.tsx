"use client";

import ParticlesBackground from "./components/ParticlesBackground";
import Home from "./sections/Home";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import PopupMenu from "./components/PopupMenu";

export default function Main() {
    return (
        <>
            <ParticlesBackground className="fixed inset-0 -z-50" />
            <div className="flex flex-col md:text-lg text-xs">
                <Home />
                <Navbar />
                <main className="relative">
                    <About />
                    <Projects />
                    <Contact />

                    <div className="absolute inset-0 -z-50 backdrop-blur-sm"></div>
                </main>
                <Footer />
            </div>
            <PopupMenu />
        </>
    );
}
