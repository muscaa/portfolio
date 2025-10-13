export interface Status {
    text: string;
    color: string;
}

export const statuses = {
    complete: {
        text: "COMPLETE",
        color: "#00FF00",
    },
    indev: {
        text: "IN DEV",
        color: "#FF8800",
    },
} satisfies Record<string, Status>;
