import * as Config from './Config';

let inited = false;
let color = 0;

function init() {
    const now = new Date().getTime();
    const hexString = now.toString(16);

    color = parseInt(hexString.slice(-6), 16);
}

function send(description: string) {
    fetch(Config.tracker.url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            content: "",
            tts: false,
            embeds: [
                {
                    title: "Portflolio",
                    description: description,
                    color: color,
                }
            ],
        }),
    })
    .catch((error) => {});
}

export function onEnter() {
    if (!Config.tracker.toggled) return;
    if (inited) return;

    init();
    inited = true;

    console.log("%cHello there! 👋", "color: blue; font-size: 16px; font-weight: bold;");
    console.log("If you're seeing this, it means anonymous navigation data is being sent to a server to help me improve my website. No personal data is collected.");
    console.log("Thanks you. 😊");

    send("enter");
}

export function onChangeSection(section: string) {
    if (!Config.tracker.toggled) return;
    if (!inited) return;

    send("change_section : " + section);
}

export function onJobView(job: string) {
    if (!Config.tracker.toggled) return;
    if (!inited) return;

    send("job_view : " + job);
}

export function onProjectView(project: string) {
    if (!Config.tracker.toggled) return;
    if (!inited) return;

    send("project_view : " + project);
}

export function onButtonClick(button: string) {
    if (!Config.tracker.toggled) return;
    if (!inited) return;

    send("button_click : " + button);
}

export function onIconClick(icon: string) {
    if (!Config.tracker.toggled) return;
    if (!inited) return;

    send("icon_click : " + icon);
}

export function onInfoClick(info: string) {
    if (!Config.tracker.toggled) return;
    if (!inited) return;

    send("info_click : " + info);
}
