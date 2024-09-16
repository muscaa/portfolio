import * as Config from './Config';

export function onEnter() {
    if (!Config.tracker.toggled) return;

    console.log("%cHello there! 👋", "color: blue; font-size: 16px; font-weight: bold;");
    console.log("If you're seeing this, it means anonymous navigation data is being sent to a server to help me improve my website. No personal data is collected.");
    console.log("Thanks you. 😊");

    fetch(Config.tracker.url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            event: 1,
            name: "",
        }),
        mode: "no-cors",
    })
    .catch((error) => {});
}

export function onChangeSection(section: string) {
    if (!Config.tracker.toggled) return;

    fetch(Config.tracker.url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            event: 2,
            name: section,
        }),
        mode: "no-cors",
    })
    .catch((error) => {});
}

export function onJobView(job: string) {
    if (!Config.tracker.toggled) return;

    fetch(Config.tracker.url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            event: 3,
            name: job,
        }),
        mode: "no-cors",
    })
    .catch((error) => {});
}

export function onProjectView(project: string) {
    if (!Config.tracker.toggled) return;

    fetch(Config.tracker.url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            event: 4,
            name: project,
        }),
        mode: "no-cors",
    })
    .catch((error) => {});
}

export function onButtonClick(button: string) {
    if (!Config.tracker.toggled) return;

    fetch(Config.tracker.url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            event: 5,
            name: button,
        }),
        mode: "no-cors",
    })
    .catch((error) => {});
}

export function onIconClick(icon: string) {
    if (!Config.tracker.toggled) return;

    fetch(Config.tracker.url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            event: 6,
            name: icon,
        }),
        mode: "no-cors",
    })
    .catch((error) => {});
}

export function onInfoClick(info: string) {
    if (!Config.tracker.toggled) return;

    fetch(Config.tracker.url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            event: 7,
            name: info,
        }),
        mode: "no-cors",
    })
    .catch((error) => {});
}
