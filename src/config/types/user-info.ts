export interface UserInfo {
    fullName: string;
    shortName: string;
    nickName: string;
    age: number;
    description: string;
    role: string;
    education: {
        link: string;
        school: string;
        period: string;
    };
    resumes: {
        EN: string;
        RO: string;
    };
}
