import React from "react";
import Title from "../components/Title";
import { hyphenateSync } from "hyphen/en";
import Skill from "../components/Skill";
import Button from "../components/Button";
import Image from "next/image";
import { ReactTyped } from "react-typed";
import Divider from "../components/Divider";

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

function SkillSet() {
    return (
        <div className="flex">
            <Skill name="Java" IconComponent={Java} />
            <Skill name="Spring" IconComponent={Spring} />

            <Skill name="C++" IconComponent={Cpp} />
            <Skill name="Arduino" IconComponent={Arduino} />

            <Skill name="C" IconComponent={C} />

            <Skill name="C#" IconComponent={CSharp} />
            <Skill name=".NET" IconComponent={DotNet} />

            <Skill name="Dart" IconComponent={Dart} />
            <Skill name="Flutter" IconComponent={Flutter} />

            <Skill name="HTML5" IconComponent={Html5} />
            <Skill name="CSS3" IconComponent={Css3} />
            <Skill name="JavaScript" IconComponent={JavaScript} />
            <Skill name="TypeScript" IconComponent={TypeScript} />
            <Skill name="React" IconComponent={ReactJs} />
            <Skill name="Next" IconComponent={NextJs} />
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

export default function About() {
    return (
        <section id="about">
            <Title text="About" />
            <div className="flex justify-center px-8
            flex-col sm:flex-row-reverse
            gap-8 lg:gap-16
            ">
                <div className="flex flex-col justify-center items-center min-w-64 min-h-64 md:min-w-80 md:min-h-80 lg:min-w-96 lg:min-h-96">
                    <Image className="rounded-full border-2 border-text-2 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96" src="me.png" width={384} height={384} alt="Me" />
                </div>

                <div className="flex flex-col flex-grow">
                    <div className="flex flex-col gap-2">
                        <h2 className="font-bold text-center">Musca Mihail</h2>
                        <Divider />
                        <div className="h3 font-bold">
                            <span>I am a </span>
                            <ReactTyped
                                strings={[
                                    "computer science student",
                                    "java fanatic",
                                    "full-stack developer",
                                    "linux &amp; windows user",
                                    "photography &amp; music lover",
                                    "bird lover",
                                    // "Open Source Contributor", // not yet
                                    // "Software Engineer", // not yet
                                ]}
                                typeSpeed={50}
                                backSpeed={30}
                                backDelay={2500}
                                startDelay={500}
                                loop
                                className="text-text-3"
                            />
                        </div>
                        <p className="text-justify text-text-1">
                            {hyphenateSync(`
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ante auctor,
                                interdum neque eu, porta ligula. Vivamus commodo imperdiet nulla, eu eleifend massa
                                rhoncus a. Morbi eget tristique enim. Cras dapibus tortor vitae urna commodo, semper
                                rutrum metus efficitur. Etiam nibh magna, pellentesque at risus id, venenatis rhoncus
                                nisi. Donec ut efficitur arcu. Aenean convallis elit lacus, sit amet varius velit
                                luctus in. Nunc suscipit congue auctor.
                                `)}
                        </p>
                    </div>
                    <div className="flex flex-col h-full justify-end">
                        <Button text="View Resume" />
                    </div>
                </div>
            </div>
            <div className="flex mt-16">
                <div className="flex w-full overflow-hidden mask-smooth-sm">
                    <div className="flex animation-slide hover:animation-pause">
                        <SkillSet />
                        <SkillSet />
                    </div>
                </div>
            </div>
        </section>
    );
}
