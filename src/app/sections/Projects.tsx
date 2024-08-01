import React from "react";
import Title from "../components/Title";
import Project from "../components/Project";
import * as Config from "../Config";
import { useState, useEffect } from "react";
import Button from "../components/Button";

export default function Projects() {
    const array = Config.projects;
    const [sliced, setSliced] = useState(array);

    useEffect(() => {
        const max = window.innerWidth < 816 ? 1 : 2;

        setSliced(array.length <= max ? array : array.slice(0, max));
    }, []);

    return (
        <section id="projects">
            <Title text="Projects" />
            <div className="flex flex-wrap gap-4 md:gap-12 justify-center">
                {sliced.map((project, index) => (
                    <Project key={index} project={project} />
                ))}
            </div>
            {sliced !== array && (
                <div className="flex justify-center items-center mt-4 md:mt-12">
                    <Button text="Show All" onClick={() => setSliced(array)} />
                </div>
            )}
        </section>
    );
}
