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
    images: string[];
    demoUrl?: string;
    githubUrl: string;
}
