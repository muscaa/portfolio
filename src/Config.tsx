import * as Classes from "@/Classes";
import moment from "moment";

export const userInfo = {
    fullName: "Musca Mihail",
    shortName: "Mihail",
    nickName: "muscaa",
    age: moment().diff(moment({
        day: 5,
        month: 6,
        year: 2004,
    }), "years"),
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
            Classes.Skill.c,
            Classes.Skill.cpp,
            Classes.Skill.cSharp,
            Classes.Skill.rust,
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
            Classes.Skill.node,
            Classes.Skill.mySql,
            Classes.Skill.sqLite,
            Classes.Skill.postgreSql,
            Classes.Skill.supabase,
        ]
    ),
    new Classes.SkillSet(
        "Tools",
        [
            Classes.Skill.eclipse,
            Classes.Skill.intelliJ,
            Classes.Skill.vsCode,
            Classes.Skill.visualStudio,
            Classes.Skill.bash,
            Classes.Skill.git,
            Classes.Skill.npm,
            Classes.Skill.graphQL,
            Classes.Skill.gradle,
            Classes.Skill.nginx,
            Classes.Skill.docker,
            Classes.Skill.postman,
            Classes.Skill.oci,
            Classes.Skill.hetzner,
        ]
    ),
];
export const jobs = [
    new Classes.Job(
        "Freelancer",
        "Mar 2022 - May 2022",
        "Fiverr",
        [
            new Classes.Detail(
                "Description",
                <>
                    Developed and maintained small-scale applications for freelance clients, enhancing my
                    technical skills and project management abilities while generating additional income.
                </>
            ),
        ],
        [ "java", "gradle", "opengl" ],
        "jobs/fiverr.png"
    ),
    new Classes.Job(
        "Open Source Contributor",
        "Dec 2023 - present",
        "GitHub",
        [
            new Classes.Detail(
                "Description",
                <>
                    Built and maintained several public GitHub repositories that showcase my projects
                    and coding skills. I focus on writing clean, well-documented code and use best
                    practices like version control and automated testing. Currently, I'm managing these
                    projects independently while looking forward to collaborating with others in the future.
                </>
            ),
        ],
        [ "java", "gradle", "jitpack", "spring", "c", "c++", "html", "css", "typescript" ],
        undefined
    ),
    new Classes.Job(
        "Self Employed",
        "Aug 2024 - present",
        undefined,
        [
            new Classes.Detail(
                "Description",
                <>
                    Working as a full-stack developer, I've had the chance to transform ideas into real,
                    functioning products, ranging from simple websites to more complex applications.
                    I enjoy the hands-on process of building and fine-tuning each project, and I make sure
                    to offer practical support and guidance so my clients feel comfortable using the software.
                </>
            ),
        ],
        [ "html", "css", "typescript", "next", "react", "supabase", "docker", "bash" ],
        undefined
    ),
];
export const projects = [
    new Classes.Project(
        "Chess",
        [
            new Classes.Detail(
                "Description",
                <>
                    Developed a chess game in Java supporting both single-player mode
                    with a BOT opponent and multiplayer mode for local or online play.
                    The project features an integrated player chat system with command
                    support, full modding capabilities to extend and customize gameplay,
                    and cross-platform compatibility with Windows, macOS, and Linux.
                    Additionally, a dedicated launcher enables users to select a specific
                    game version or opt for the latest version with auto-updates.
                </>
            ),
        ],
        Classes.Status.complete,
        [ "java", "gradle", "jitpack", "fluff", "swing", "libgdx", "opengl", "networking", "jdbc", "mysql", "sqlite" ],
        "projects/chess.png",
        undefined,
        "https://github.com/muscaa/chess"
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
        [ "java", "gradle", "opengl", "slick2d" ],
        "projects/logic-gate-sim.png",
        undefined,
        "https://github.com/muscaa/logic-gates-sim"
    ),
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
        [ "typescript", "next", "react", "tailwind css", "zustand" ],
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
        undefined,
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
        [ "java", "gradle", "jitpack", "fluff" ],
        undefined,
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
    "© " + moment().year() + " muscaa",
    "I use arch btw",
];
export const tracker = {
    toggled: true,
    url: "https://musca.duckdns.org/portfolio/",
};
