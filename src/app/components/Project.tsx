import React from "react";

export default function Project({ name, description, imageSrc }: { name: string, description: string, imageSrc: string }) {
    return (
        <div className="w-80 h-96 bg-background-3 bg-opacity-50 backdrop-blur-lg shadow-bottom shadow-background-1
        rounded-lg overflow-hidden shadow-lg flex flex-col items-center">
            <img className="w-full h-40 object-cover" src={imageSrc} alt={`${name} screenshot`} />
            <div className="p-4 flex flex-col items-center">
                <h2 className="text-xl font-bold mb-2">{name}</h2>
                <p className="text-center">{description}</p>
            </div>
        </div>
    );
}
