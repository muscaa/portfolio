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
import Info from "../components/Info";
import Divider from "../components/Divider";
import * as Config from "../Config";

// Icons
import Github from "../svg/Github";
import Instagram from "../svg/Instagram";
import Linkedin from "../svg/Linkedin";
import Mail from "../svg/Mail";
import Phone from "../svg/Phone";
import Location from "../svg/Location";

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
            <div className="grid grid-cols-2 my-2">
                <div className="flex justify-center items-center h-full text-text-2">
                    <Shield className="w-6 h-6 md:w-8 md:h-8 mr-2 sm:ml-0 ml-2 flex-shrink-0" />
                    <div className="flex flex-col">
                        <h5>Protected by</h5>
                        <h5>reCAPTCHA</h5>
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
                max-w-xl text-center text-text-1
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
                            <Info name="Location" value={Config.contactInfo.location} href={"https://www.google.com/maps/place/" + Config.contactInfo.location} IconComponent={Location} />
                            <Info name="Phone" value={Config.contactInfo.phone} href={"tel:" + Config.contactInfo.phone.replaceAll(" ", "")} IconComponent={Phone} />
                            <Info name="E-mail" value={Config.contactInfo.email} href={"mailto:" + Config.contactInfo.email} IconComponent={Mail} />
                        </div>
                        <Divider className="my-4" />
                        <div className="flex gap-2 justify-center items-center">
                            <IconLink href={Config.contactInfo.github} IconComponent={Github} />
                            <IconLink href={Config.contactInfo.instagram} IconComponent={Instagram} />
                            <IconLink href={Config.contactInfo.linkedin} IconComponent={Linkedin} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
