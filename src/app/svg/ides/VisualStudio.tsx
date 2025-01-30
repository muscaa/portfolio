import React from "react";

export default function VisualStudio({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            width="128px"
            height="128px"
            className={className}
        >
            <defs>
                <linearGradient id="a" x1="48" x2="48" y1="97.75" y2="2.25" gradientTransform="matrix(1 0 0 -1 0 97.75)" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#fff" />
                    <stop offset="1" stopColor="#fff" stopOpacity="0" />
                </linearGradient>
            </defs>
            <path fill="#52218a" d="M14.39 26.295a5.333 5.333 0 0 0-1.417.373l-9.694 4A5.333 5.333 0 0 0 0 35.561v56.88a5.333 5.333 0 0 0 3.28 4.893l9.693 4.066a5.333 5.333 0 0 0 5.521-.865l2.172-1.867a2.947 2.947 0 0 1-4.666-2.4V31.734a2.947 2.947 0 0 1 4.666-2.4l-2.172-1.799a5.333 5.333 0 0 0-4.103-1.24z" />
            <path fill="#6c33af" d="M94.75.416A8 8 0 0 0 88 2.668l-82.666 91.4A3.08 3.08 0 0 1 0 92.002v.44a5.333 5.333 0 0 0 3.28 4.892l9.693 4.066a5.333 5.333 0 0 0 5.521-.865l2.172-1.867 99.08-81.24A5.053 5.053 0 0 1 128 21.334v-.307a8 8 0 0 0-4.533-7.213L97.094 1.121A8 8 0 0 0 94.75.416Z" />
            <path fill="#854cc7" d="M14.871 26.238a5.333 5.333 0 0 0-1.898.43l-9.694 4A5.333 5.333 0 0 0 0 35.561v.441a3.08 3.08 0 0 1 5.334-2.066L88 125.334a8 8 0 0 0 9.094 1.547l26.373-12.694a8 8 0 0 0 4.533-7.212v-.307a5.053 5.053 0 0 1-8.254 3.906l-99.08-81.24-2.172-1.865a5.333 5.333 0 0 0-3.623-1.23z" />
            <path fill="#b179f1" d="M94.75.416a8 8 0 0 0-5.674 1.469A4.693 4.693 0 0 1 96 6.015v116a4.693 4.693 0 0 1-8 3.319 8 8 0 0 0 9.094 1.547l26.373-12.68a8 8 0 0 0 4.533-7.213V21.016a8 8 0 0 0-4.533-7.215L97.094 1.12A8 8 0 0 0 94.75.416Zm-5.674 1.469A4.693 4.693 0 0 0 88 2.668a8 8 0 0 1 1.076-.783Z" />
            <path fill="url(#a)" fillRule="evenodd" d="M94.145.348a8 8 0 0 0-3.026.386A8 8 0 0 0 88 2.668L45.494 49.682 20.666 29.334l-2.172-1.865a5.333 5.333 0 0 0-4.814-1.108 3.4 3.4 0 0 0-.707.24l-9.694 4.067A5.333 5.333 0 0 0 0 35.162v57.679a5.333 5.333 0 0 0 3.28 4.493l9.693 4a3.4 3.4 0 0 0 .707.24 5.333 5.333 0 0 0 4.814-1.105l2.172-1.801 24.828-20.346L88 125.334a8 8 0 0 0 3.854 2.135 8 8 0 0 0 5.24-.588l26.373-12.68a8 8 0 0 0 4.533-7.213V21.016a8 8 0 0 0-4.533-7.215L97.094 1.12a8 8 0 0 0-2.95-.773ZM96 36.908v54.186L62.947 64.002Zm-80 8.787 16.547 18.307L16 82.309Z" opacity=".25" />
        </svg>
    );
}
