import React from "react";

export default function Button({ id, type, disabled, onClick, className, text }:
    { id?: string, type?: "submit" | "reset" | "button", disabled?: boolean, onClick?: () => void, className?: string, text: string }) {
    return (
        <button
            id={id}
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={`appearance-none outline-none p-3 bg-primary disabled:bg-background-4 backdrop-blur-msm rounded-md
                transform transition-transform duration-200 ease-in-out hover:scale-110 disabled:hover:scale-100 focus:scale-110
                ${className}`}
        >
            {text}
        </button>
    );
}