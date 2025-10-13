import {
    Technology,
    Status,
} from "~/utils";

export interface Project {
    title: string;
    description: string;
    status: Status;
    technologies: Technology[];
    images: string[];
    demoUrl?: string;
    githubUrl: string;
}

export type Projects = Project[];
