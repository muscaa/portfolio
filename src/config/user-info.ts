import * as types from "./types/user-info";

export const userInfo: types.UserInfo = {
    fullName: "Musca Mihail",
    shortName: "Mihail",
    nickName: "muscaa",
    age: 21,
    description: "",
    /*age: moment().diff(moment({
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
    ),*/
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
    contact: {
        location: "Timisoara, Romania",
        phone: "+40 738 479 198",
        email: "muscamihailp@gmail.com",
        github: "https://github.com/muscaa/",
        telegram: "https://t.me/musca_mihail/",
        instagram: "https://www.instagram.com/musca.mihail/",
        linkedin: "https://www.linkedin.com/in/muscaa/",
    },
};
