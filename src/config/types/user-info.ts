export interface UserInfo {
    fullName: string;
    shortName: string;
    nickName: string;
    age: number;
    description: string;
    role: string;
    education: {
        url: string;
        school: string;
        period: string;
    };
    resumeUrl: string;
    contact: {
        location: string;
        phone: string;
        email: string;
        github: string;
        telegram: string;
        instagram: string;
        linkedin: string;
    };
}
