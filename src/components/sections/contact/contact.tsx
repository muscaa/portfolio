import {
    component$,
    useSignal,
} from "@builder.io/qwik";
import {
    Title,
    Input,
    Textarea,
    Button,
    Card,
    Separator,
} from "~/components/ui";
import { Info } from "~/components/other";
import { userInfo } from "~/config";
import { Lu } from "~/components/icons";

const ContactForm = component$(() => {
    return (
        <Card.Root class="max-w-xl">
            <Card.Header>
                <Card.Title>
                    Contact Form
                </Card.Title>
                <Card.Description>
                    Have a question or want to work together?
                    Leave your details and I'll get back to you as soon as possible.
                </Card.Description>
            </Card.Header>
            <Card.Content class="flex flex-col gap-2">
                <Input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Name"
                />
                <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email"
                />
                <Textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                    class="min-h-32"
                />
                <Separator />
                <div class="flex gap-2">
                    <div class="w-full">

                    </div>
                    <Button class="w-full">
                        Send
                    </Button>
                </div>
            </Card.Content>
        </Card.Root>
    );
});

export const SectionContact = component$(() => {
    const ref = useSignal<HTMLElement>();

    return (
        <section
            ref={ref}
            id="contact"
            class="flex justify-center"
        >
            <div class="flex flex-col max-w-6xl w-full px-8 md:px-16 pb-20">
                <Title>
                    contact
                </Title>
                <div class="flex not-lg:flex-col justify-center items-center w-full gap-4">
                    <ContactForm />
                    <p class="text-muted-foreground">OR</p>
                    <div class="w-full max-w-md">
                        <div class="flex flex-col gap-2">
                            <Info
                                name="Location"
                                value={userInfo.contact.location}
                                href={"https://www.google.com/maps/place/" + userInfo.contact.location}
                                icon={Lu.MapPin}
                            />
                            <Info
                                name="Phone"
                                value={userInfo.contact.phone}
                                href={"tel:" + userInfo.contact.phone.replaceAll(" ", "")}
                                icon={Lu.Phone}
                            />
                            <Info
                                name="E-mail"
                                value={userInfo.contact.email}
                                href={"mailto:" + userInfo.contact.email}
                                icon={Lu.Mail}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});




/*import React from "react";
import Title from "@/components/Title";
import {
    useForm,
    ValidationError
} from "@formspree/react";
import Input from "@/components/Input"
import InputArea from "@/components/InputArea"
import Button from "@/components/Button"
import {
    GoogleReCaptchaProvider,
    useGoogleReCaptcha
} from "react-google-recaptcha-v3";
import Shield from "@/svg/Shield";
import {
    useState
} from "react";
import { hyphenateSync } from "hyphen/en";
import IconLink from "@/components/IconLink";
import Info from "@/components/Info";
import Divider from "@/components/Divider";
import * as Config from "@/Config";
import Reveal from "@/components/Reveal";

// Icons
import Github from "@/svg/Github";
import Instagram from "@/svg/Instagram";
import Linkedin from "@/svg/Linkedin";
import Mail from "@/svg/Mail";
import Phone from "@/svg/Phone";
import Location from "@/svg/Location";
import Telegram from "@/svg/Telegram";

function ContactForm() {
    const { executeRecaptcha } = useGoogleReCaptcha();
    const [state, handleSubmit] = useForm(Config.contactInfo.formspreeKey, {
        data: { "g-recaptcha-response": executeRecaptcha }
    });
    const [nameEmpty, setNameEmpty] = useState(true);
    const [emailEmpty, setEmailEmpty] = useState(true);
    const [messageEmpty, setMessageEmpty] = useState(true);

    return (
        <Reveal>
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
                <Reveal className="relative grid grid-cols-2 my-2" direction="down" delay={0.4}>
                    <div>
                        <div className="flex justify-center items-center h-full text-text-2">
                            <Shield className="w-6 h-6 md:w-8 md:h-8 mr-2 sm:ml-0 ml-2 flex-shrink-0" />
                            <div className="flex flex-col">
                                <h5>Protected by</h5>
                                <h5>reCAPTCHA</h5>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Button
                            type="submit"
                            disabled={nameEmpty || emailEmpty || messageEmpty || state.submitting || state.succeeded}
                            text={state.succeeded ? "Sent!" : "Send"}
                            className="w-full"
                        />
                    </div>
                </Reveal>
            </form>
        </Reveal>
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
                <Reveal>
                    <p className="
                    mb-8 md:mb-12
                    max-w-xl text-center text-text-1
                    ">
                        {hyphenateSync(`Have a question or want to work together? 
                            Leave your details and I'll get back to you as soon as possible.`)}
                    </p>
                </Reveal>
                <div className="flex flex-col lg:flex-row justify-center items-center w-full">
                    <div className="w-full max-w-md">
                        <GoogleReCaptchaProvider
                            reCaptchaKey={Config.contactInfo.reCaptchaKey}
                            scriptProps={{
                                async: true,
                                defer: true,
                                appendTo: "body"
                            }}
                        >
                            <ContactForm />
                        </GoogleReCaptchaProvider>
                    </div>
                    <Reveal className="flex justify-center items-center p-4 text-text-2">
                        <p>OR</p>
                    </Reveal>
                    <div className="w-full max-w-md">
                        <Reveal className="flex flex-col gap-2" direction="up" delay={0.4}>
                            <Info name="Location" value={Config.contactInfo.location} href={"https://www.google.com/maps/place/" + Config.contactInfo.location} IconComponent={Location} />
                            <Info name="Phone" value={Config.contactInfo.phone} href={"tel:" + Config.contactInfo.phone.replaceAll(" ", "")} IconComponent={Phone} />
                            <Info name="E-mail" value={Config.contactInfo.email} href={"mailto:" + Config.contactInfo.email} IconComponent={Mail} />
                        </Reveal>
                        <Reveal direction="right">
                            <Divider className="my-4" />
                        </Reveal>
                        <Reveal className="flex gap-2 justify-center items-center" direction="down" delay={0.4}>
                            <IconLink href={Config.contactInfo.github} IconComponent={Github} />
                            <IconLink href={Config.contactInfo.telegram} IconComponent={Telegram} />
                            <IconLink href={Config.contactInfo.instagram} IconComponent={Instagram} />
                            <IconLink href={Config.contactInfo.linkedin} IconComponent={Linkedin} />
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}*/
