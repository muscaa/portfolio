import { Icon } from "~/components/other";
import { Tech } from "~/components/icons";

export interface Technology {
    name: string;
    icon: Icon;
}

export const technologies = {
    java: {
        name: "java",
        icon: Tech.Java,
    },
    c: {
        name: "c",
        icon: Tech.C,
    },
    cpp: {
        name: "c++",
        icon: Tech.Cpp,
    },
    javascript: {
        name: "javascript",
        icon: Tech.JavaScript,
    },
    typescript: {
        name: "typescript",
        icon: Tech.TypeScript,
    },
    python: {
        name: "python",
        icon: Tech.Python,
    },
    html5: {
        name: "html5",
        icon: Tech.Html5,
    },
    css3: {
        name: "css3",
        icon: Tech.Css3,
    },
    nextjs: {
        name: "next js",
        icon: Tech.NextJs,
    },
    react: {
        name: "react",
        icon: Tech.React,
    },
    tailwindcss: {
        name: "tailwind css",
        icon: Tech.TailwindCss,
    },
    spring: {
        name: "spring",
        icon: Tech.Spring,
    },
    nodejs: {
        name: "node js",
        icon: Tech.NodeJs,
    },
    mysql: {
        name: "mysql",
        icon: Tech.MySql,
    },
    sqlite: {
        name: "sqlite",
        icon: Tech.SqLite,
    },
    postgresql: {
        name: "postgresql",
        icon: Tech.PostgreSql,
    },
    supabase: {
        name: "supabase",
        icon: Tech.Supabase,
    },
    pocketbase: {
        name: "pocketbase",
        icon: Tech.Pocketbase,
    },
    bash: {
        name: "bash",
        icon: Tech.Bash,
    },
    git: {
        name: "git",
        icon: Tech.Git,
    },
    gradle: {
        name: "gradle",
        icon: Tech.Gradle,
    },
    cmake: {
        name: "cmake",
        icon: Tech.CMake,
    },
    docker: {
        name: "docker",
        icon: Tech.Docker,
    },
    hetzner: {
        name: "hetzner",
        icon: Tech.Hetzner,
    },
} satisfies Record<string, Technology>;
