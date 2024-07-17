import React from "react";
import Title from "../components/Title";
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
            <div className="flex flex-wrap justify-center items-center">
                <Java />
                <Cpp />
                <C />
                <CSharp />
                <Dart />
                <Html5 />
                <Css3 />
                <JavaScript />
                <TypeScript />
                <Flutter />
                <Spring />
                <ReactJs />
                <NextJs />
            </div>
        </section>
    );
}
