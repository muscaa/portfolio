import React from "react";
import Title from "../components/Title";
import Project from "../components/Project";
import * as Config from "../Config";
import { useState, useEffect } from "react";
import Button from "../components/Button";
import * as Tracker from "../Tracker";

function slice(array: any[], max: number) {
    return array.length <= max ? array : array.slice(0, max);
}

export default function Projects() {
    const array = Config.projects;
    const [max, setMax] = useState(0);
    const [sliced, setSliced] = useState(array);

    useEffect(() => {
        setMax(window.innerWidth < 816 ? 2 : 4);
        setSliced(slice(array, max));
    }, [ max ]);

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
                    <Button text="Show More" onClick={() => {
                        Tracker.onButtonClick("Show More");

                        setSliced(array)
                    }} />
                )}
                {sliced === array && array.length != max && (
                    <Button text="Show Less" onClick={() => {
                        Tracker.onButtonClick("Show Less");

                        setSliced(slice(array, max))
                    }} />
                )}
            </div>
        </section>
    );
}
