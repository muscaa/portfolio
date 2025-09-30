export interface Project {
    title: string;
    description: string;
    status: "COMPLETE" | "IN DEV";
    stack: string[];
    cover?: string;
    demoUrl?: string;
    githubUrl: string;
}
