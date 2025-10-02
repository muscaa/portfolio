import { Technology } from "./technologies";

export interface Project {
    title: string;
    description: string;
    status: "COMPLETE" | "IN DEV";
    technologies: Technology[];
    cover?: string;
    demoUrl?: string;
    githubUrl: string;
}
