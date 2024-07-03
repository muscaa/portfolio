import React from "react";

export default function InputArea({ id, type, name, placeholder, className }:
    { id?: string, type?: string, name?: string, placeholder?: string, className?: string }) {
    return (
        <textarea
            id={id}
            name={name}
            placeholder={placeholder}
            className={`resize-none min-h-32 appearance-none placeholder-text-2 outline-none p-3
                bg-background-4 bg-opacity-25 backdrop-blur-msm rounded-md ${className}`}
        />
    );
}
