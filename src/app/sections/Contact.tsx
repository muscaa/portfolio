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
                    <p>Protected by reCAPTCHA</p>
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
            <div className="flex flex-col justify-center items-center">
                <div className="
                w-64 sm:w-96 md:w-128
                mb-24 md:mb-32
                ">
                    <p className="
                    mb-8 md:mb-12
                    ">
                        {hyphenateSync(`Have a question or want to work together? 
                            Leave your details and I'll get back to you as soon as possible.`)}
                    </p>
                    <GoogleReCaptchaProvider reCaptchaKey="6LdLCQkqAAAAAJqQeo3ss5PdqytaM9QWrol9x5vY">
                        <ContactForm />
                    </GoogleReCaptchaProvider>
                </div>
            </div>
        </section>
    );
}
