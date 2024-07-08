import React from "react";
import Reveal from "./Reveal";

export default function Project({ name, description, imageSrc }: { name: string, description: string, imageSrc: string }) {
    return (
        <Reveal>
            <div className="w-80 h-96 bg-background-3 bg-opacity-25 backdrop-blur-msm shadow-md shadow-background-1 hover:shadow-glow-lg hover:shadow-secondary
            rounded-lg overflow-hidden flex flex-col items-center transform transition-all duration-200 ease-in-out hover:scale-105">
                <img className="w-full h-40 object-cover" src={imageSrc} alt={`${name} screenshot`} />
                <div className="p-4 flex flex-col items-center">
                    <h2 className="text-xl font-bold mb-2">{name}</h2>
                    <p className="text-center">{description}</p>
                </div>
            </div>
        </Reveal>
    );
}
