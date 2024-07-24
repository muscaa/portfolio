import React from "react";
import { ReactTyped } from "react-typed";
import ButtonArrow from "../components/ButtonArrow";
import Reveal from "../components/Reveal";
import { H1, StyleH2 } from "../components/Text";

export default function Home() {
    return (
        <section id="home" className="flex flex-col justify-center items-center text-center min-h-screen">
            <div className="flex-grow"></div>
            <div className="flex flex-col items-center space-y-2 mx-8">
                <Reveal direction="up">
                    <H1>Hello, I'm Mihail.</H1>
                </Reveal>
                <hr className="md:w-144 w-72 border-t-2 my-4" />
                <Reveal direction="down">
                    <ReactTyped
                        strings={[
                            "Computer Science Student",
                            "Java Fanatic",
                            "C/C++ Developer",
                            "JavaScript &amp; TypeScript Enthusiast",
                            "Full-Stack Developer",
                            "Linux &amp; Windows User",
                            "Photography &amp; Music Lover",
                            "Technology Lover",
                            "Bird Lover",
                            // "Open Source Contributor", // not yet
                            // "Software Engineer", // not yet
                        ]}
                        typeSpeed={50}
                        backSpeed={30}
                        backDelay={2000}
                        startDelay={500}
                        loop
                        className={StyleH2}
                    />
                </Reveal>
            </div>
            <div className="flex-grow"></div>
            <ButtonArrow direction="down" href="#about" />
            <div className="flex-grow"></div>
        </section>
    );
}
