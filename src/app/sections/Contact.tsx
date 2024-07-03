import React from "react";
import Title from "../components/Title";
import { useForm, ValidationError } from "@formspree/react";
import Input from "../components/Input"
import InputArea from "../components/InputArea"
import Button from "../components/Button"

function ContactForm() {
    const [state, handleSubmit] = useForm("xrbzglbe");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <form onSubmit={handleSubmit} autoComplete="off" className="flex flex-col gap-2">
            <Input
                id="name"
                type="text"
                name="name"
                placeholder="Name"
                className="min-w-max"
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
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <div className="flex flex-col items-end my-2">
                <Button
                    type="submit"
                    disabled={state.submitting}
                    text="Submit"
                    className="w-32"
                />
            </div>
        </form>
    );
}

export default function Contact() {
    return (
        <section id="contact" className="flex flex-col justify-center items-center">
            <Title text="Contact" />
            <div className="
            w-64 sm:w-96 md:w-128
            mb-16 sm:mb-24 md:mb-32
            ">
                <p className="
                mb-4 sm:mb-8 md:mb-12
                ">
                    Have a question or want to work together?
                    Leave your details and I'll get back to you as soon as possible.
                </p>
                <ContactForm />
            </div>
        </section>
    );
}
