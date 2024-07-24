import React from "react";
import { StyleP } from "./Text";

export default function Input({ id, type, name, placeholder, className, onChange }:
    { id?: string, type?: string, name?: string, placeholder?: string, className?: string, onChange?: React.ChangeEventHandler<HTMLInputElement> }) {
    return (
        <input
            id={id}
            type={type}
            name={name}
            placeholder={placeholder}
            className={`appearance-none placeholder-text-2 outline-none p-3
                bg-background-4 bg-opacity-25 backdrop-blur-sm rounded-md ${StyleP} ${className}`}
            onChange={onChange}
        />
    );
}
