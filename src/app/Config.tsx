import * as Classes from "./Classes";
import Anchor from "./components/Anchor";

export const userInfo = {
    fullName: "Musca Mihail",
    shortName: "Mihail",
    nickName: "muscaa",
    description: new Classes.Detail(
        "Description",
        <>
            Hi there!
            I'm a Computer Science student who got into coding back in 8th grade with Java.
            I love diving into tough problems and figuring out solutions (even if it means a bit
            of keyboard smashing). I'm aiming to be a full-stack developer — because why choose one
            side when you can do it all?
            <br /><br />
            When I'm not coding, I'm either snapping photos, vibing to music, or hanging out with
            my parrot, who's convinced he's the real star here.
        </>
    ),
    role: "Full-Stack Developer",
    education: {
        link: "https://info.uvt.ro/en/",
        school: "West University of Timisoara",
        period: "Bachelor's degree 2023 - 2026",
    },
    resumes: {
        EN: "resumes/EN.pdf",
        RO: "resumes/RO.pdf",
    },
};
export const skillSets = [
    new Classes.SkillSet(
        "Languages",
        [
            Classes.Skill.java,
            Classes.Skill.cpp,
            Classes.Skill.c,
            Classes.Skill.cSharp,
            Classes.Skill.dart,
            Classes.Skill.javaScript,
            Classes.Skill.typeScript,
        ]
    ),
    new Classes.SkillSet(
        "Front-End",
        [
            Classes.Skill.html5,
            Classes.Skill.css3,
            Classes.Skill.nextJs,
            Classes.Skill.reactJs,
            Classes.Skill.tailwindCss,
            Classes.Skill.flutter,
        ]
    ),
    new Classes.SkillSet(
        "Back-End",
        [
            Classes.Skill.spring,
            Classes.Skill.mySql,
            Classes.Skill.sqLite,
        ]
    ),
    new Classes.SkillSet(
        "IDEs",
        [
            Classes.Skill.eclipse,
            Classes.Skill.intelliJ,
            Classes.Skill.vsCode,
            Classes.Skill.visualStudio,
        ]
    ),
    new Classes.SkillSet(
        "Tools",
        [
            Classes.Skill.git,
            Classes.Skill.bash,
            Classes.Skill.docker,
            Classes.Skill.insomnia,
        ]
    ),
];
export const jobs = [
    new Classes.Job(
        "Freelancer",
        "Fiverr",
        "Mar 2022 - May 2022",
        [
            new Classes.Detail(
                "Description",
                <>
                    Created Minecraft mods and plugins, turning creative ideas into reality.
                    This experience helped me sharpen my skills and earn some extra income.
                </>
            ),
        ],
        "jobs/fiverr.png",
        [ "java", "minecraft", "opengl / lwjgl" ]
    ),
    new Classes.Job(
        "Competitive Programmer",
        "Cloudflight Coding Contest",
        "20 Oct 2023",
        [
            new Classes.Detail(
                "Description",
                <>
                    Secured second place in my university and
                    ranked <Anchor href="https://register.codingcontest.org/contest/5271/results?page.page=3&activeId=29120#29120">#124</Anchor> globally
                    in the Cloudflight Coding Contest.
                </>
            ),
        ],
        "jobs/cloudflight.png",
        [ "java" ]
    ),
    /*open source contributor ??*/
];
export const projects = [
    new Classes.Project(
        "Free CV Maker",
        [
            new Classes.Detail(
                "Description",
                <>
                    Created a free CV maker web app where users can choose from
                    existing templates or integrate their own custom designs using
                    a JavaScript API. Projects can be saved in the browser or downloaded,
                    with an easy way to manage your saved projects and templates.
                </>
            ),
        ],
        Classes.Status.inDev,
        [ "typescript", "next", "react", "tailwind css" ],
        "projects/cv-maker.png",
        "https://muscaa.github.io/cv-maker",
        "https://github.com/muscaa/cv-maker"
    ),
    new Classes.Project(
        "Developer Portfolio",
        [
            new Classes.Detail(
                "Description",
                <>
                    Built this portfolio to show my work and what I'm
                    passionate about in software development.
                </>
            ),
        ],
        Classes.Status.complete,
        [ "typescript", "next", "react", "tailwind css", "framer motion", "tsparticles", "formspree" ],
        "projects/portfolio.png",
        "https://muscaa.github.io/portfolio",
        "https://github.com/muscaa/portfolio"
    ),
    new Classes.Project(
        "Logic Gate Simulator",
        [
            new Classes.Detail(
                "Description",
                <>
                    Developed an app for designing and simulating logic gate systems.
                    Users can build, save, and load custom logic circuits, making it
                    easier to experiment with and understand digital logic concepts.
                </>
            ),
        ],
        Classes.Status.complete,
        [ "java", "gradle", "opengl / lwjgl", "slick2d" ],
        "projects/logic-gate-sim.png",
        undefined,
        "https://github.com/muscaa/logic-gates-sim"
    ),
    new Classes.Project(
        "Fluff Libraries",
        [
            new Classes.Detail(
                "Description",
                <>
                    Developed a set of small, versatile, and modular libraries,
                    designed to be efficient and easy to use in different projects.
                </>
            ),
        ],
        Classes.Status.complete,
        [ "java", "gradle", "jitpack" ],
        "black.png",
        undefined,
        "https://github.com/muscaa/fluff-core"
    ),
    new Classes.Project(
        "Quill",
        [
            new Classes.Detail(
                "Description",
                <>
                    Built a cross-platform package manager with a command-line
                    interface for installing and updating tools and libraries.
                </>
            ),
        ],
        Classes.Status.inDev,
        [ "java", "gradle", "fluff" ],
        "black.png",
        undefined,
        "https://github.com/muscaa/quill"
    ),
];
export const contactInfo = {
    formspreeKey: "xrbzglbe",
    reCaptchaKey: "6LdLCQkqAAAAAJqQeo3ss5PdqytaM9QWrol9x5vY",
    location: "Timisoara, Romania",
    phone: "+40 738 479 198",
    email: "muscamihailp@gmail.com",
    github: "https://github.com/muscaa/",
    telegram: "https://t.me/musca_mihail/",
    instagram: "https://www.instagram.com/musca.mihail/",
    linkedin: "https://www.linkedin.com/in/muscaa/",
};
export const footer = [
    "© 2024 Musca Mihail",
    "I use arch btw",
];
export const tracker = {
    toggled: true,
    url: "https://discord.com/api/webhooks/1284518791321223211/xfseq8uiNprW6Of-lx7gEytP1BhYB7n8NeTkH6U0sDSe9efJD5EaCXad-fTwyjHYdY_N",
};
