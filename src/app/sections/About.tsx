import React from "react";
import Title from "../components/Title";
import { hyphenateSync } from "hyphen/en";
import Skill from "../components/Skill";
import Info from "../components/Info";
import Button from "../components/Button";

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

// Icons
import Location from "../svg/Location";

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
            <div className="flex flex-col lg:flex-row justify-center items-center">
                <div className="flex flex-col w-full justify-center items-center">
                    <img src="me.png" alt="Me" className="rounded-full border-2 border-primary w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64" />
                    <p className="text-justify p-4 md:p-8">
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

                <div className="flex flex-col w-full gap-2">
                    <Info name="Location" value="Timisoara, Romania" href="https://www.google.com/maps/place/Timișoara/" IconComponent={Location} />
                    <Button text="View Resume" />
                </div>
            </div>
            <div className="flex flex-col justify-center items-center mask-smooth-sm">
                <div className="flex w-full overflow-hidden masked">
                    <div className="flex animation-slide hover:animation-pause">
                        <SkillSet />
                        <SkillSet />
                    </div>
                </div>
            </div>
        </section>
    );
}
