import React from "react";
import Title from "../components/Title";
import Skill from "../components/Skill";
import Java from "../svg/languages/Java";
import Cpp from "../svg/languages/Cpp";
import C from "../svg/languages/C";
import CSharp from "../svg/languages/CSharp";
import Dart from "../svg/languages/Dart";
import Html5 from "../svg/languages/Html5";
import Css3 from "../svg/languages/Css3";
import JavaScript from "../svg/languages/JavaScript";
import TypeScript from "../svg/languages/TypeScript";
import Flutter from "../svg/frameworks/Flutter";
import Spring from "../svg/frameworks/Spring";
import ReactJs from "../svg/frameworks/ReactJs";
import NextJs from "../svg/frameworks/NextJs";

export default function Skills() {
    return (
        <section id="skills">
            <Title text="Skills" />
            <div className="flex flex-wrap justify-center items-center gap-12">
                <div className="bg-background-3 bg-opacity-25 backdrop-blur-msm shadow-md shadow-background-1 hover:shadow-glow-lg hover:shadow-secondary
            rounded-lg overflow-hidden flex flex-col items-center transform transition-all duration-200 ease-in-out hover:scale-105">
                    <h2 className="text-2xl font-semibold my-8">Languages</h2>
                    <div className="flex flex-wrap justify-center items-center gap-4">
                        <Skill name="Java" IconComponent={Java} />
                        <Skill name="C++" IconComponent={Cpp} />
                        <Skill name="C" IconComponent={C} />
                        <Skill name="C#" IconComponent={CSharp} />
                        <Skill name="Dart" IconComponent={Dart} />
                        <Skill name="HTML5" IconComponent={Html5} />
                        <Skill name="CSS3" IconComponent={Css3} />
                        <Skill name="JavaScript" IconComponent={JavaScript} />
                        <Skill name="TypeScript" IconComponent={TypeScript} />
                    </div>
                </div>

                <div className="bg-background-3 bg-opacity-25 backdrop-blur-msm shadow-md shadow-background-1 hover:shadow-glow-lg hover:shadow-secondary
            rounded-lg overflow-hidden flex flex-col items-center transform transition-all duration-200 ease-in-out hover:scale-105">
                    <h2 className="text-2xl font-semibold my-8">Frameworks</h2>
                    <div className="flex flex-wrap justify-center items-center gap-4">
                        <Skill name="Flutter" IconComponent={Flutter} />
                        <Skill name="Spring" IconComponent={Spring} />
                        <Skill name="React.js" IconComponent={ReactJs} />
                        <Skill name="Next.js" IconComponent={NextJs} />
                    </div>
                </div>
            </div>
        </section>
    );
}
