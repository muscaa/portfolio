import React, { ReactNode } from "react";
import Title from "../components/Title";
import Skill from "../components/Skill";

// Languages
import Java from "../svg/languages/Java";
import Cpp from "../svg/languages/Cpp";
import C from "../svg/languages/C";
import CSharp from "../svg/languages/CSharp";
import Dart from "../svg/languages/Dart";
import Html5 from "../svg/languages/Html5";
import Css3 from "../svg/languages/Css3";
import JavaScript from "../svg/languages/JavaScript";
import TypeScript from "../svg/languages/TypeScript";

// Frameworks
import Flutter from "../svg/frameworks/Flutter";
import Spring from "../svg/frameworks/Spring";
import ReactJs from "../svg/frameworks/ReactJs";
import NextJs from "../svg/frameworks/NextJs";
import Arduino from "../svg/frameworks/Arduino";
import DotNet from "../svg/frameworks/DotNet";
import ElectronJs from "../svg/frameworks/ElectronJs";

// Databases
import MySql from "../svg/databases/MySql";
import SqLite from "../svg/databases/SqLite";
import Supabase from "../svg/databases/Supabase";

// IDEs
import Eclipse from "../svg/ides/Eclipse";
import IntelliJ from "../svg/ides/IntelliJ";
import VSCode from "../svg/ides/VSCode";
import VisualStudio from "../svg/ides/VisualStudio";

// Tools
import Git from "../svg/tools/Git";
import Bash from "../svg/tools/Bash";
import Docker from "../svg/tools/Docker";
import Insomnia from "../svg/tools/Insomnia";

/*function SkillSet({ title, children }: { title: string, children: ReactNode }) {
    return (
        <div className="flex flex-col justify-center items-center">
            <h2 className="text-2xl font-semibold mb-8">{title}</h2>
            <div className="flex flex-wrap max-w-2xl justify-center items-center gap-4">
                {children}
            </div>
        </div>
    );
}*/

function SkillSet() {
    return (
        <div className="flex animation-slide group-hover:animation-pause">
            <Skill name="Java" IconComponent={Java} />
            <Skill name="C++" IconComponent={Cpp} />
            <Skill name="C" IconComponent={C} />
            <Skill name="C#" IconComponent={CSharp} />
            <Skill name="Dart" IconComponent={Dart} />
            <Skill name="HTML5" IconComponent={Html5} />
            <Skill name="CSS3" IconComponent={Css3} />
            <Skill name="JavaScript" IconComponent={JavaScript} />
            <Skill name="TypeScript" IconComponent={TypeScript} />
            <Skill name="Flutter" IconComponent={Flutter} />
            <Skill name="Spring" IconComponent={Spring} />
            <Skill name="React" IconComponent={ReactJs} />
            <Skill name="Next" IconComponent={NextJs} />
            <Skill name="Arduino" IconComponent={Arduino} />
            <Skill name=".NET" IconComponent={DotNet} />
            <Skill name="Electron" IconComponent={ElectronJs} />
            <Skill name="MySQL" IconComponent={MySql} />
            <Skill name="SQLite" IconComponent={SqLite} />
            <Skill name="Supabase" IconComponent={Supabase} />
            <Skill name="Eclipse" IconComponent={Eclipse} />
            <Skill name="IntelliJ" IconComponent={IntelliJ} />
            <Skill name="VS Code" IconComponent={VSCode} />
            <Skill name="VS" IconComponent={VisualStudio} />
            <Skill name="Git" IconComponent={Git} />
            <Skill name="Bash" IconComponent={Bash} />
            <Skill name="Docker" IconComponent={Docker} />
            <Skill name="Insomnia" IconComponent={Insomnia} />
        </div>
    );
}

export default function Skills() {
    return (
        <section id="skills">
            <Title text="Skills" />
            <div className="flex flex-col justify-center items-center gap-12">
                <div className="flex max-w-4xl overflow-hidden" style={{
                    maskImage: "linear-gradient(to right, transparent, black, black, black, black, black, black, black, black, transparent)"
                }}>
                    <div className="flex group" style={{
                    maskImage: "linear-gradient(to right, transparent, black, black, black, black, black, black, black, black, transparent)"
                }}>
                        <SkillSet />
                        <SkillSet />
                    </div>
                </div>
            </div>
        </section>
    );
}
