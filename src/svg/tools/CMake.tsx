import React from "react";

export default function CMake({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            width="128px"
            height="128px"
            className={className}
        >
            <path fill="#064F8C" d="M62.8.4L.3 123.8l68.1-57.9z"></path>
            <path fill="#249847" d="M123.8 127.7l-84-33.9L0 127.7z"></path>
            <path fill="#BE2128" d="M128 126.6L65.6 2.5l9.2 102.6z"></path>
            <path fill="#CDCDCE" d="M71.9 104l-3.1-34.9L42 92z"></path>
        </svg>
    );
}
