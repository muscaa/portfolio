import * as Classes from "./Classes";

export const userInfo = {
    fullName: "Musca Mihail",
    shortName: "Mihail",
    nickName: "muscaa",
    description: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ante auctor,
        interdum neque eu, porta ligula. Vivamus commodo imperdiet nulla, eu eleifend massa
        rhoncus a. Morbi eget tristique enim. Cras dapibus tortor vitae urna commodo, semper
        rutrum metus efficitur. Etiam nibh magna, pellentesque at risus id, venenatis rhoncus
        nisi. Donec ut efficitur arcu. Aenean convallis elit lacus, sit amet varius velit
        luctus in. Nunc suscipit congue auctor.
    `,
    roles: [
        "computer science student",
        "java fanatic",
        "full-stack developer",
        "linux &amp; windows user",
        "photography &amp; music lover",
        "bird lover",
    ]
};
export const skills = [
    Classes.Skill.java,
    Classes.Skill.spring,
    Classes.Skill.lwjgl,

    Classes.Skill.cpp,
    Classes.Skill.c,
    Classes.Skill.cSharp,

    Classes.Skill.dart,
    Classes.Skill.flutter,

    Classes.Skill.html5,
    Classes.Skill.css3,
    Classes.Skill.javaScript,
    Classes.Skill.typeScript,
    Classes.Skill.nextJs,
    Classes.Skill.reactJs,
    Classes.Skill.tailwindCss,

    Classes.Skill.mySql,
    Classes.Skill.sqLite,

    Classes.Skill.eclipse,
    Classes.Skill.intelliJ,
    Classes.Skill.vsCode,
    Classes.Skill.visualStudio,

    Classes.Skill.git,
    Classes.Skill.bash,
    Classes.Skill.docker,
    Classes.Skill.insomnia,
];
export const projects = [
    new Classes.Project(
        "Project 1",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        Classes.Status.complete,
        [ "Java", "Spring", "Angular", "PostgreSQL" ],
        "black.png",
        "idk",
        "git"
    ),
];
export const jobs = [
    new Classes.Job(
        "Freelancer",
        "Fiverr",
        "Mar 2022 - May 2022",
        <>
        I created Minecraft mods & plugins, bringing fun and unique ideas to life.
        It was a great way to improve my skills and earn some money.
        </>,
        "jobs/fiverr.png",
        [ "core java", "minecraft", "opengl / lwjgl" ]
    ),
    new Classes.Job(
        "Competitive Programmer",
        "Cloudflight Coding Contest",
        "20 Oct 2023",
        <>
        Won second place in West University of Timisoara and ranked <a className="text-primary" target="_blank" href="
        https://register.codingcontest.org/contest/5271/results?page.page=3&activeId=29120#29120">#124</a> globally in the Cloudflight Coding Contest.
        </>,
        "jobs/ccc.jpg",
        [ "core java" ]
    ),
    /*open source contributor?*/
];
export const contactInfo = {
    formspreeKey: "xrbzglbe",
    reCaptchaKey: "6LdLCQkqAAAAAJqQeo3ss5PdqytaM9QWrol9x5vY",
    location: "Timisoara, Romania",
    phone: "+40 738 479 198",
    email: "muscamihailp@gmail.com",
    github: "https://github.com/muscaa/",
    instagram: "https://www.instagram.com/musca.mihail/",
    linkedin: "https://www.linkedin.com/in/muscaa/",
};
export const footer = "© 2024 Musca Mihail";
