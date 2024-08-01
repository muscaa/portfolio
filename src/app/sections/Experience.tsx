import React from "react";
import Title from "../components/Title";
import Job from "../components/Job";
import * as Config from "../Config";
import { useState, useEffect } from "react";
import Button from "../components/Button";

export default function Experience() {
    const array = Config.jobs;
    const [sliced, setSliced] = useState(array);

    useEffect(() => {
        const max = window.innerWidth < 656 ? 1 :
            window.innerWidth < 1056 ? 2 : 3;

        setSliced(array.length <= max ? array : array.slice(0, max));
    }, []);

    return (
        <section id="experience">
            <Title text="Experience" />
            <div className="flex flex-wrap gap-4 md:gap-12 justify-center">
                {sliced.map((job, index) => (
                    <Job key={index} job={job} />
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
