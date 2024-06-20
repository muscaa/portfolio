import React from "react";

function Content() {
    return (
        <div>
            Home Page Content
        </div>
    );
}

export default function Home() {
    return (
        <section id="home" className="min-h-screen">
            <Content />
        </section>
    );
}
