import * as Config from './Config';

let inited = false;
let entered = false;

async function send(event: number, name: string) {
    fetch(Config.tracker.url, {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            event: event,
            name: name,
        }),
    })
    .catch((error) => {});
}

export function init() {
    if (inited) return;
    inited = true;

    console.log("%cHello there! 👋", "color: blue; font-size: 16px; font-weight: bold;");
    console.log("If you're seeing this, it means that site navigation is sent anonymously to help me improve the site.");
    console.log("No personal info is collected.");
    console.log("Thanks you. 😊");
}

export function onEnter() {
    if (!Config.tracker.toggled) return;
    if (entered) return;
    entered = true;

    send(1, "enter");
}

export function onChangeSection(section: string) {
    if (!Config.tracker.toggled) return;
    if (!entered) return;

    send(2, section);
}

export function onJobView(job: string) {
    if (!Config.tracker.toggled) return;
    if (!entered) return;

    send(3, job);
}

export function onProjectView(project: string) {
    if (!Config.tracker.toggled) return;
    if (!entered) return;

    send(4, project);
}

export function onButtonClick(button: string) {
    if (!Config.tracker.toggled) return;
    if (!entered) return;

    send(5, button);
}

export function onIconClick(icon: string) {
    if (!Config.tracker.toggled) return;
    if (!entered) return;

    send(6, icon);
}

export function onInfoClick(info: string) {
    if (!Config.tracker.toggled) return;
    if (!entered) return;

    send(7, info);
}
