import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Button } from "~/components/ui";

export default component$(() => {
  return (
    <>
      <h1>Hi 👋</h1>
      <div class="flex flex-col gap-2">
        Can't wait to see what you build with qwik!
        Happy coding.
        <Button look="alert">
            alert
        </Button>
        <Button look="ghost">
            ghost
        </Button>
        <Button look="link">
            link
        </Button>
        <Button look="outline">
            outline
        </Button>
        <Button look="primary">
            primary
        </Button>
        <Button look="secondary">
            secondary
        </Button>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
