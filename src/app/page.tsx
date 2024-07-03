"use client";

import ParticlesBackground from "./components/ParticlesBackground";
import Home from "./sections/Home";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

export default function Main() {
    return (
        <>
            <ParticlesBackground className="fixed inset-0 -z-50" />
            <main className="flex flex-col md:text-base text-xs">
                <Home />
                <Navbar />
                <div className="relative">
                    <About />
                    <Projects />
                    <Contact />

                    <div className="absolute inset-0 -z-50 backdrop-blur-sm"></div>
                </div>
                <Footer />
            </main>
        </>
    );
}
