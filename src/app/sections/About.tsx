import React from "react";
import Title from "../components/Title";
import { hyphenateSync } from "hyphen/en";

export default function About() {
    return (
        <section id="about">
            <Title text="About" />
            <div className="flex flex-col lg:flex-row justify-center items-center gap-x-32">
                <div className="flex-grow"></div>
                <div className="max-w-xs sm:max-w-md lg:max-w-lg">
                    <p className="text-justify">
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

                <div className="max-w-xs sm:max-w-md lg:max-w-lg">
                    <p className="text-justify">
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
                <div className="flex-grow"></div>
            </div>
        </section>
    );
}
