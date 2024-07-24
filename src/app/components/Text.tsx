import React from "react";

export const StyleP = "text-sm sm:text-base lg:text-lg font-medium";
export const StyleSpan = StyleP;
export const StyleH1 = "text-5xl sm:text-6xl lg:text-7xl font-bold";
export const StyleH2 = "text-3xl sm:text-4xl lg:text-5xl font-bold";
export const StyleH3 = "text-xl sm:text-2xl lg:text-3xl font-bold";
export const StyleH4 = "text-base sm:text-lg lg:text-xl font-bold";
export const StyleH5 = "text-sm sm:text-base lg:text-lg font-bold";
export const StyleH6 = "text-xs sm:text-sm lg:text-base font-bold";

export function P({ children, className }: { children?: any, className?: string }) {
    return (
        <p className={`${StyleP} ${className}`}>
            {children}
        </p>
    );
}

export function Span({ children, className }: { children?: any, className?: string }) {
    return (
        <span className={`${StyleSpan} ${className}`}>
            {children}
        </span>
    );
}

export function H1({ children, className }: { children?: any, className?: string }) {
    return (
        <h1 className={`${StyleH1} ${className}`}>
            {children}
        </h1>
    );
}

export function H2({ children, className }: { children?: any, className?: string }) {
    return (
        <h2 className={`${StyleH2} ${className}`}>
            {children}
        </h2>
    );
}

export function H3({ children, className }: { children?: any, className?: string }) {
    return (
        <h3 className={`${StyleH3} ${className}`}>
            {children}
        </h3>
    );
}

export function H4({ children, className }: { children?: any, className?: string }) {
    return (
        <h4 className={`${StyleH4} ${className}`}>
            {children}
        </h4>
    );
}

export function H5({ children, className }: { children?: any, className?: string }) {
    return (
        <h5 className={`${StyleH5} ${className}`}>
            {children}
        </h5>
    );
}

export function H6({ children, className }: { children?: any, className?: string }) {
    return (
        <h6 className={`${StyleH6} ${className}`}>
            {children}
        </h6>
    );
}
