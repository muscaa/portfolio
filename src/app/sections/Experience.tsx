import React from "react";
import Title from "../components/Title";
import Job from "../components/Job";
import * as Config from "../Config";

export default function Experience() {
    return (
        <section id="experience">
            <Title text="Experience" />
            <div className="flex flex-wrap gap-4 md:gap-12 justify-center">
                {Config.jobs.map((job, index) => (
                    <Job key={index} job={job} />
                ))}
            </div>
        </section>
    );
}
