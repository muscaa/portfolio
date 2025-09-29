import { component$ } from "@builder.io/qwik";
import { Icon } from "../snippets/snippets";
import { ButtonLink } from "../snippets/snippets";

interface InfoProps {
    name: string;
    value: string;
    href: string;
    icon: Icon;
}

export const Info = component$<InfoProps>((props) => {
    return (
        <ButtonLink
            href={props.href}
            target="_blank"
            look="outline"
            size="lg"
            class="flex justify-start items-center w-full text-start gap-4"
        >
            <props.icon class="size-8 text-primary" />
            <div class="flex flex-col">
                <p class="font-bold text-primary">{props.name}</p>
                <p>{props.value}</p>
            </div>
        </ButtonLink>
    );
});
