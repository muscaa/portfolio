import React from "react";
import Title from "../components/Title";
import {
    useForm,
    ValidationError
} from "@formspree/react";
import Input from "../components/Input"
import InputArea from "../components/InputArea"
import Button from "../components/Button"
import {
    GoogleReCaptchaProvider,
    useGoogleReCaptcha
} from "react-google-recaptcha-v3";
import Shield from "../svg/Shield";
import {
    useState
} from "react";
import { hyphenateSync } from "hyphen/en";
import IconLink from "../components/IconLink";
import Link from "next/link";
import { ComponentType } from "react";

// Icons
import Github from "../svg/Github";
import Instagram from "../svg/Instagram";
import Linkedin from "../svg/Linkedin";
import Mail from "../svg/Mail";
import Phone from "../svg/Phone";

function ContactForm() {
    const { executeRecaptcha } = useGoogleReCaptcha();
    const [state, handleSubmit] = useForm("xrbzglbe", {
        data: { "g-recaptcha-response": executeRecaptcha }
    });
    const [nameEmpty, setNameEmpty] = useState(true);
    const [emailEmpty, setEmailEmpty] = useState(true);
    const [messageEmpty, setMessageEmpty] = useState(true);

    return (
        <form onSubmit={handleSubmit} autoComplete="on" className="flex flex-col gap-2">
            <Input
                id="name"
                type="text"
                name="name"
                placeholder="Name"
                className="min-w-max"
                onChange={e => setNameEmpty(e.target.value.trim().length === 0)}
            />
            <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
            />
            <Input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                className="min-w-max"
                onChange={e => setEmailEmpty(e.target.value.trim().length === 0)}
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            <InputArea
                id="message"
                name="message"
                placeholder="Message"
                className="min-w-max"
                onChange={e => setMessageEmpty(e.target.value.trim().length === 0)}
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <div className="grid grid-cols-2 sm:grid-cols-[60%_40%] my-2">
                <div className="flex justify-center items-center h-full">
                    <Shield className="w-6 h-6 mr-2 sm:ml-0 ml-2 flex-shrink-0" />
                    <div className="flex max-w-20 sm:max-w-full text-text-2">
                        <p>Protected by reCAPTCHA</p>
                    </div>
                </div>
                <Button
                    type="submit"
                    disabled={nameEmpty || emailEmpty || messageEmpty || state.submitting || state.succeeded}
                    text={state.succeeded ? "Sent!" : "Send"}
                />
            </div>
        </form>
    );
}

function Info({ name, value, href, IconComponent }:
    { name: string, value: string, href: string, IconComponent: ComponentType<{ className?: string }> }) {
    return (
        <Link href={href} target="_blank" className="flex items-center gap-4 p-3
        bg-primary bg-opacity-25 backdrop-blur-sm rounded-md
        transform transition-transform duration-200 ease-in-out hover:scale-105
        ">
            <IconComponent className="w-8 h-8 text-text" />
            <div className="flex flex-col">
                <p className="font-bold text-text-1">{name}</p>
                <p className="font-light text-text-2">{value}</p>
            </div>
        </Link>
    );
}

export default function Contact() {
    return (
        <section id="contact">
            <Title text="Contact" />
            <div className="
                flex flex-col justify-center items-center
                mb-24 md:mb-32
                px-8 md:px-16
            ">
                <p className="
                mb-8 md:mb-12
                max-w-xl text-center
                ">
                    {hyphenateSync(`Have a question or want to work together? 
                        Leave your details and I'll get back to you as soon as possible.`)}
                </p>
                <div className="flex flex-col lg:flex-row justify-center items-center w-full">
                    <div className="w-full max-w-md">
                        <GoogleReCaptchaProvider reCaptchaKey="6LdLCQkqAAAAAJqQeo3ss5PdqytaM9QWrol9x5vY">
                            <ContactForm />
                        </GoogleReCaptchaProvider>
                    </div>
                    <div className="flex justify-center items-center p-4 text-text-2">
                        <p>OR</p>
                    </div>
                    <div className="w-full max-w-md">
                        <div className="flex flex-col gap-2">
                            <Info name="Phone" value="(+)40 738 479 198" href="tel:+40738479198" IconComponent={Phone} />
                            <Info name="E-mail" value="muscamihailp@gmail.com" href="mailto:muscamihailp@gmail.com" IconComponent={Mail} />
                        </div>
                        <div className="h-px my-4 md:my-8 bg-text-2"></div>
                        <div className="flex gap-2 justify-center items-center">
                            <IconLink href="https://github.com/muscaa/" IconComponent={Github} />
                            <IconLink href="https://www.instagram.com/musca.mihail/" IconComponent={Instagram} />
                            <IconLink href="https://www.linkedin.com/in/muscaa/" IconComponent={Linkedin} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
