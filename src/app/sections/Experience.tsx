import React from "react";
import Title from "../components/Title";
import Job from "../components/Job";

export default function Experience() {
    const jobs = [];
    for (let i = 1; i <= 4; i++) {
        jobs.push({
            name: `Job ${i}`,
            company: `Company ${i}`,
            date: "2020 - 2021",
            description: `This is a description of Job ${i}. Here you can write about your responsibilities, achievements, and skills you gained.`,
            icon: `job.png`,
        });
    }

    return (
        <section id="experience">
            <Title text="Experience" />
            <div className="flex flex-wrap gap-4 md:gap-12 justify-center">
                {jobs.map((job, index) => (
                    <Job
                        key={index}
                        name={job.name}
                        company={job.company}
                        date={job.date}
                        description={job.description}
                        icon={job.icon}
                    />
                ))}
            </div>
        </section>
    );
}
