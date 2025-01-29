import * as Config from './Config';
//import md5 from "md5";

let inited = false;
let entered = false;
/*let color = 0;
let keys: string[] = [];
let values: string[] = [];

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
                    fields: [
                        {
                            name: "Key",
                            value: keys.join("\n"),
                            inline: true,
                        },
                        {
                            name: "",
                            value: "",
                            inline: true,
                        },
                        {
                            name: "Value",
                            value: values.join("\n"),
                            inline: true,
                        },
                    ],
                }
            ],
        }),
    })
    .catch((error) => {});
}

interface IPData {
    countryName: string;
    cityName: string;
    timeZones: string[];
    ipAddress: string;
}*/

function send(event: number, name: string) {
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
/*
    const now = new Date().getTime();
    const hexString = now.toString(16);

    color = parseInt(hexString.slice(-6), 16);

    fetch("https://freeipapi.com/api/json")
    .then(async (response) => {
        if (response.status !== 200) {
            keys.push("status");
            values.push(response.status.toString());
            return;
        }

        const data: IPData = await response.json();

        const hash = md5(data.ipAddress);
        color = parseInt(hash.slice(-6), 16);

        keys.push("country");
        values.push(data.countryName);

        keys.push("city");
        values.push(data.cityName);

        keys.push("timezone");
        values.push(data.timeZones.join("; "));

        keys.push("ip");
        values.push(data.ipAddress);
    })
    .catch((error) => {
        keys.push("error");
        values.push(error.toString());
    });

    console.log("%cHello there! 👋", "color: blue; font-size: 16px; font-weight: bold;");
    console.log("If you're seeing this, it means that navigation, basic region, city, and timezone data are sent anonymously to help me improve the site.");
    console.log("No personal info is collected.");
    console.log("Thanks you. 😊");*/
}

export function onEnter() {
    if (!Config.tracker.toggled) return;
    if (entered) return;
    entered = true;

    //send("enter");
    send(1, "enter");
}

export function onChangeSection(section: string) {
    if (!Config.tracker.toggled) return;
    if (!entered) return;

    //send("change_section : " + section);
    send(2, section);
}

export function onJobView(job: string) {
    if (!Config.tracker.toggled) return;
    if (!entered) return;

    //send("job_view : " + job);
    send(3, job);
}

export function onProjectView(project: string) {
    if (!Config.tracker.toggled) return;
    if (!entered) return;

    //send("project_view : " + project);
    send(4, project);
}

export function onButtonClick(button: string) {
    if (!Config.tracker.toggled) return;
    if (!entered) return;

    //send("button_click : " + button);
    send(5, button);
}

export function onIconClick(icon: string) {
    if (!Config.tracker.toggled) return;
    if (!entered) return;

    //send("icon_click : " + icon);
    send(6, icon);
}

export function onInfoClick(info: string) {
    if (!Config.tracker.toggled) return;
    if (!entered) return;

    //send("info_click : " + info);
    send(7, info);
}
