import React from "react";
import { ReactTyped } from "react-typed";
import ButtonArrow from "../components/ButtonArrow";

export default function Home() {
    return (
        <section id="home" className="flex flex-col space-y-2 justify-center items-center text-center min-h-screen md:text-6xl text-3xl font-light">
            <p>Hello, Im <span className="text-primary font-medium">Mihail</span>.</p>
            <ReactTyped
                strings={[
                    "Java Developer",
                    "Web Developer",
                    "Full-Stack Developer",
                    "Software Engineer",
                    "Computer Science Student"
                ]}
                typeSpeed={50}
                backSpeed={30}
                backDelay={2000}
                startDelay={500}
                loop
                className="md:text-4xl text-2xl pb-32"
            />
            <ButtonArrow direction="down" href="#about"/>
        </section>
    );
}
