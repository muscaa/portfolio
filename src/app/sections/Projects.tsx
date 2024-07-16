import React from "react";
import Title from "../components/Title";
import Project from "../components/Project";

export default function Projects() {
    const projects = [];
    for (let i = 1; i <= 10; i++) {
        projects.push({
            name: `Project ${i}`,
            description: `This is a description of Project ${i}.`,
            imageSrc: "project.png"
        });
    }

    return (
        <section id="projects">
            <Title text="Projects" />
            <div className="flex flex-wrap gap-12 justify-center mx-8">
                {projects.map((project, index) => (
                    <Project
                        key={index}
                        name={project.name}
                        description={project.description}
                        imageSrc={project.imageSrc}
                    />
                ))}
            </div>
        </section>
    );
}
