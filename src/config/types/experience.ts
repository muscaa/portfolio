import { Icon } from "~/components/other";

export interface Workplace {
    title: string;
    company: string;
    icon: Icon;
    date: {
        start: string;
        end: string;
    };
    description: string;
}
