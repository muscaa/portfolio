import React from "react";
import Title from "../components/Title";
import Project from "../components/Project";
import * as Config from "../Config";

export default function Projects() {
    return (
        <section id="projects">
            <Title text="Projects" />
            <div className="flex flex-wrap gap-4 md:gap-12 justify-center">
                {Config.projects.map((project, index) => (
                    <Project key={index} project={project} />
                ))}
            </div>
        </section>
    );
}
