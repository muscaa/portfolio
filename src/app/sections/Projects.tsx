import React from "react";
import Title from "../components/Title";
import Project from "../components/Project";
import * as Config from "../Config";
import { useState, useEffect } from "react";
import Button from "../components/Button";

function getMax() {
    return window.innerWidth < 816 ? 2 : 4;
}

function getMin(array: any[]) {
    const max = getMax();
    return array.length <= max ? array : array.slice(0, max);
}

export default function Projects() {
    const array = Config.projects;
    const [sliced, setSliced] = useState(array);

    useEffect(() => {
        setSliced(getMin(array));
    }, []);

    return (
        <section id="projects">
            <Title text="Projects" />
            <div className="flex flex-wrap gap-4 md:gap-12 justify-center">
                {sliced.map((project, index) => (
                    <Project key={index} project={project} />
                ))}
            </div>
            <div className="flex justify-center items-center mt-4 md:mt-12">
                {sliced !== array && (
                    <Button text="Show More" onClick={() => setSliced(array)} />
                )}
                {sliced === array && array.length != getMax() && (
                    <Button text="Show Less" onClick={() => setSliced(getMin(array))} />
                )}
            </div>
        </section>
    );
}
