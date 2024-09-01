import * as Classes from "./Classes";
import Anchor from "./components/Anchor";

export const userInfo = {
    fullName: "Musca Mihail",
    shortName: "Mihail",
    nickName: "muscaa",
    description: `
        I'm a Computer Science student with a solid Java foundation that began in 8th grade. 
        I enjoy tackling complex problems and adapting to new challenges. Passionate 
        about technology, I'm excited to pursue a career as a full-stack developer. 
        Outside of tech, I love photography, music, and spending time with my pet parrot.
    `,
    role: "Full-Stack Developer",
    education: {
        link: "https://info.uvt.ro/en/",
        school: "West University of Timisoara",
        period: "Bachelor's degree 2023 - 2026",
    },
    resumes: {
        "EN": "resumes/Musca_Mihail_Resume_EN.pdf",
        "RO": "resumes/Musca_Mihail_Resume_RO.pdf",
    }
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
                    Developed Minecraft mods & plugins, bringing fun and unique ideas to life.
                    It was a great way to improve my skills and earn some money.
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
                    Won second place in West University of Timisoara and
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
        "Logic Gate Simulator",
        [
            new Classes.Detail(
                "Description",
                <>
                    Created an app for designing and simulating logic gate systems.
                    Users can build, save, and load their own logic circuits, making
                    it easy to experiment with and understand digital logic concepts.
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
        "Developer Portfolio",
        [
            new Classes.Detail(
                "Description",
                <>
                    Built this portfolio to highlight my skills and projects. It serves as a
                    central hub for showcasing my work and achievements in software development.
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
        "Fluff Libraries",
        [
            new Classes.Detail(
                "Description",
                <>
                    Developed a collection of open source, small, versatile, modular libraries.
                    Each one is designed to be efficient and easy to use in various projects.
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
                    Created a cross-platform package manager for tools and libraries.
                    Features a command-line interface for package installation and updates.
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
