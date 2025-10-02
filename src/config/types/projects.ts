import { Technology } from "./technologies";

export interface ProjectStatus {
    text: string;
    color: string;
}

export interface Project {
    title: string;
    description: string;
    status: ProjectStatus;
    technologies: Technology[];
    cover?: string;
    demoUrl?: string;
    githubUrl: string;
}
