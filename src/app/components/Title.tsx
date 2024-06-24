import React from "react";

export default function Title({ text } : { text: string }) {
  return (
    <div className="flex justify-center items-center py-32 text-5xl font-bold">
        <h1 className="absolute blur-md">{text}</h1>
        <h1 className="relative">{text}</h1>
    </div>
  );
}