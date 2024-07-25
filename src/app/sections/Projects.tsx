import React from "react";
import Title from "../components/Title";
import Project from "../components/Project";

export default function Projects() {
    const projects = [];
    for (let i = 1; i <= 10; i++) {
        projects.push({
            name: `Project ${i}`,
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ante auctor,
                        interdum neque eu, porta ligula. Vivamus commodo imperdiet nulla, eu eleifend massa
                        rhoncus a. Morbi eget tristique enim. ${i}.`,
            skills: [ "React", "TypeScript", "Tailwind CSS" ],
            imageSrc: "project.png",
            demoUrl: "https://example.com",
            githubUrl: "https://github.com",
        });
    }

    return (
        <section id="projects">
            <Title text="Projects" />
            <div className="flex flex-wrap gap-4 md:gap-12 justify-center">
                {projects.map((project, index) => (
                    <Project
                        key={index}
                        name={project.name}
                        description={project.description}
                        skills={project.skills}
                        imageSrc={project.imageSrc}
                        demoUrl={project.demoUrl}
                        githubUrl={project.githubUrl}
                    />
                ))}
            </div>
        </section>
    );
}
