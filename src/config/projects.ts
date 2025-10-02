import * as types from "./types";
import { technologies } from "./technologies";

export const projectStatuses = {
    complete: {
        text: "COMPLETE",
        color: "#00FF00",
    },
    indev: {
        text: "IN DEV",
        color: "#FF8800",
    },
} satisfies Record<string, types.ProjectStatus>;

export const projects: types.Project[] = [
    {
        title: "Vest Visuals",
        description: `
            Developed a photography and videography studio website that showcases the portfolio,
            services, and contact information. The site is built with Next.js and Tailwind CSS,
            ensuring a responsive and modern design.
        `,
        status: projectStatuses.complete,
        technologies: [
            technologies.html5,
            technologies.css3,
            technologies.typescript,
            technologies.nextjs,
            technologies.react,
            technologies.tailwindcss,
            technologies.hetzner,
            technologies.docker,
            technologies.pocketbase,
        ],
        images: [
            "https://images.unsplash.com/photo-1758846182577-799b413b0da5?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ],
        githubUrl: "https://github.com/muscaa/vest-visuals",
    },
    {
        title: "Chess",
        description: "test",
        status: projectStatuses.complete,
        technologies: [
        ],
        images: [
            "https://images.unsplash.com/photo-1758846182577-799b413b0da5?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ],
        githubUrl: "https://github.com/muscaa/test",
    },
    {
        title: "Logic Gate Simulator",
        description: "test",
        status: projectStatuses.complete,
        technologies: [
        ],
        images: [
            "https://images.unsplash.com/photo-1758846182577-799b413b0da5?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ],
        githubUrl: "https://github.com/muscaa/test",
    },
    {
        title: "Telebot",
        description: "test",
        status: projectStatuses.indev,
        technologies: [
        ],
        images: [
            "https://images.unsplash.com/photo-1758846182577-799b413b0da5?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ],
        githubUrl: "https://github.com/muscaa/test",
    },
    {
        title: "CV Maker",
        description: "test",
        status: projectStatuses.indev,
        technologies: [
        ],
        images: [
            "https://images.unsplash.com/photo-1758846182577-799b413b0da5?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ],
        githubUrl: "https://github.com/muscaa/test",
    },
    {
        title: "Developer Portfolio",
        description: "test",
        status: projectStatuses.complete,
        technologies: [
        ],
        images: [
            "https://images.unsplash.com/photo-1758846182577-799b413b0da5?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ],
        githubUrl: "https://github.com/muscaa/test",
    },
    {
        title: "Fluff Libraries",
        description: "test",
        status: projectStatuses.complete,
        technologies: [
        ],
        images: [
            "https://images.unsplash.com/photo-1758846182577-799b413b0da5?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ],
        githubUrl: "https://github.com/muscaa/test",
    },
    {
        title: "Quill",
        description: "test",
        status: projectStatuses.indev,
        technologies: [
        ],
        images: [
            "https://images.unsplash.com/photo-1758846182577-799b413b0da5?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ],
        githubUrl: "https://github.com/muscaa/test",
    },
];

/*
export const projects = [
    new Classes.Project(
        "Vest Visuals",
        [
            new Classes.Detail(
                "Description",
                <>
                    Developed a photography and videography studio website that showcases the portfolio,
                    services, and contact information. The site is built with Next.js and Tailwind CSS,
                    ensuring a responsive and modern design.
                </>
            ),
        ],
        Classes.Status.complete,
        [ "html", "css", "typescript", "next", "react", "tailwind", "shadcn/ui", "animejs", "hetzner cloud",
            "docker", "nginx", "s3", "minio", "pocketbase" ],
        "projects/vest-visuals.png",
        "https://vestvisuals.ro",
        "https://github.com/muscaa/vest-visuals"
    ),
    new Classes.Project(
        "Chess",
        [
            new Classes.Detail(
                "Description",
                <>
                    Developed a chess game in Java supporting both single-player mode
                    with a BOT opponent and multiplayer mode for local or online play.
                    The project features an integrated player chat system with command
                    support, full modding capabilities to extend and customize gameplay,
                    and cross-platform compatibility with Windows, macOS, and Linux.
                    Additionally, a dedicated launcher enables users to select a specific
                    game version or opt for the latest version with auto-updates.
                </>
            ),
        ],
        Classes.Status.complete,
        [ "java", "gradle", "jitpack", "fluff", "swing", "libgdx", "opengl", "networking", "jdbc", "mysql", "sqlite" ],
        "projects/chess.png",
        undefined,
        "https://github.com/muscaa/chess"
    ),
    new Classes.Project(
        "Logic Gate Simulator",
        [
            new Classes.Detail(
                "Description",
                <>
                    Developed an app for designing and simulating logic gate systems.
                    Users can build, save, and load custom logic circuits, making it
                    easier to experiment with and understand digital logic concepts.
                </>
            ),
        ],
        Classes.Status.complete,
        [ "java", "gradle", "opengl", "slick2d" ],
        "projects/logic-gate-sim.png",
        undefined,
        "https://github.com/muscaa/logic-gates-sim"
    ),
    new Classes.Project(
        "Telebot",
        [
            new Classes.Detail(
                "Description",
                <>
                    Developed a cross-platform robot control application in C++ using
                    SDL3 and Boost, enabling users to remotely operate ESP32-powered
                    robots via the internet. It supports real-time video and audio feedback
                    and user input via controller, keyboard or GUI. And a plugin system for
                    adding new features and functionalities.
                </>
            ),
        ],
        Classes.Status.inDev,
        [ "c", "c++", "cmake", "vcpkg", "networking", "cross-platform", "sdl3", "boost", "esp32", "java", "android", "github actions" ],
        undefined,
        undefined,
        "https://github.com/muscaa/telebot"
    ),
    new Classes.Project(
        "Free CV Maker",
        [
            new Classes.Detail(
                "Description",
                <>
                    Created a free CV maker web app where users can choose from
                    existing templates or integrate their own custom designs using
                    a JavaScript API. Projects can be saved in the browser or downloaded,
                    with an easy way to manage your saved projects and templates.
                </>
            ),
        ],
        Classes.Status.inDev,
        [ "typescript", "next", "react", "tailwind css", "zustand" ],
        "projects/cv-maker.png",
        "https://muscaa.github.io/cv-maker",
        "https://github.com/muscaa/cv-maker"
    ),
    new Classes.Project(
        "Developer Portfolio",
        [
            new Classes.Detail(
                "Description",
                <>
                    Built this portfolio to show my work and what I'm
                    passionate about in software development.
                </>
            ),
        ],
        Classes.Status.complete,
        [ "typescript", "next", "react", "tailwind css", "framer motion", "tsparticles", "formspree" ],
        "projects/portfolio.png",
        "https://muscaa.github.io/portfolio",
        "https://github.com/muscaa/portfolio"
    ),
    new Classes.Project(
        "Fluff Libraries",
        [
            new Classes.Detail(
                "Description",
                <>
                    Developed a set of small, versatile, and modular libraries,
                    designed to be efficient and easy to use in different projects.
                </>
            ),
        ],
        Classes.Status.complete,
        [ "java", "gradle", "jitpack" ],
        undefined,
        undefined,
        "https://github.com/muscaa/fluff-core"
    ),
    new Classes.Project(
        "Quill",
        [
            new Classes.Detail(
                "Description",
                <>
                    Built a cross-platform package manager with a command-line
                    interface for installing and updating tools and libraries.
                </>
            ),
        ],
        Classes.Status.inDev,
        [ "java", "gradle", "jitpack", "fluff" ],
        undefined,
        undefined,
        "https://github.com/muscaa/quill"
    ),
];
*/
