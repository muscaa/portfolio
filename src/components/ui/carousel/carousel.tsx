import {
  useContext,
  component$,
  createContextId,
  PropsOf,
  Slot,
  useContextProvider,
  Signal,
} from "@builder.io/qwik";

import { Carousel as HCarousel } from "@qwik-ui/headless";
import { cn } from "@qwik-ui/utils";
import { buttonVariants } from "../button/button";
import { VariantProps } from "class-variance-authority";
import {
  LuChevronDown,
  LuChevronLeft,
  LuChevronRight,
  LuChevronUp,
} from "@qwikest/icons/lucide";

const styledCarouselContextId = createContextId<{
  orientation: "horizontal" | "vertical";
  progress?: Signal<number>;
}>("styled-carousel-context");

const Provider = component$<{
  orientation?: "horizontal" | "vertical";
}>(({ orientation = "horizontal" }) => {
  const context = {
    orientation,
  };

  useContextProvider(styledCarouselContextId, context);
  return <Slot />;
});

const Root = ({
  orientation = "horizontal",
  ...props
}: PropsOf<typeof HCarousel.Root> & {
  orientation?: "horizontal" | "vertical";
  progress?: Signal<number>;
}) => {
  return (
    <Provider orientation={orientation}>
      <HCarousel.Root
        {...props}
        orientation={orientation}
        slideComponent={Slide}
        bulletComponent={Bullet}
        titleComponent={Title}
        stepComponent={Step}
        class={cn("relative", props.class)}
      >
        {props.children}
      </HCarousel.Root>
    </Provider>
  );
};

const Scroller = component$<PropsOf<typeof HCarousel.Scroller>>(
  ({ ...props }) => {
    const context = useContext(styledCarouselContextId);

    return (
      <HCarousel.Scroller
        {...props}
        class={cn(
          "flex",
          context.orientation === "horizontal" ? "-ml-4" : "-mt-4",
        )}
      >
        <Slot />
      </HCarousel.Scroller>
    );
  },
);

const Slide = component$<PropsOf<typeof HCarousel.Slide>>(({ ...props }) => {
  const context = useContext(styledCarouselContextId);
  return (
    <HCarousel.Slide
      {...props}
      class={cn(context.orientation === "horizontal" ? "pl-4" : "pt-4")}
    >
      <Slot />
    </HCarousel.Slide>
  );
});

const Previous = component$<
  PropsOf<typeof HCarousel.Previous> & VariantProps<typeof buttonVariants> & { extraClass?: string; }
>(({ look = "ghost", size = "iconSm", extraClass, ...props }) => {
  const context = useContext(styledCarouselContextId);
  return (
    <div
      class={cn(
        "absolute",
        context.orientation === "horizontal"
          ? "top-1/2 -left-12 -translate-y-1/2"
          : "-top-12 right-1/2 translate-x-1/2",
        extraClass,
      )}
    >
      <HCarousel.Previous
        {...props}
        class={cn(
          buttonVariants({ look, size }),
          "group rounded-full",
          props.class,
        )}
      >
        <div
          class={cn(
            context.orientation === "horizontal"
              ? "group-hover:-translate-x-px"
              : "group-hover:-translate-y-px",
            "group-hover:transition-all group-hover:duration-300",
          )}
        >
          {context.orientation === "horizontal" ? (
            <LuChevronLeft class="size-6" />
          ) : (
            <LuChevronUp class="size-6" />
          )}
        </div>
      </HCarousel.Previous>
    </div>
  );
});

const Next = component$<
  PropsOf<typeof HCarousel.Next> & VariantProps<typeof buttonVariants> & { extraClass?: string; }
>(({ look = "ghost", size = "iconSm", extraClass, ...props }) => {
  const context = useContext(styledCarouselContextId);
  return (
    <div
      class={cn(
        "absolute",
        context.orientation === "horizontal"
          ? "top-1/2 -right-12 -translate-y-1/2"
          : "right-1/2 -bottom-12 translate-x-1/2",
        extraClass,
      )}
    >
      {/* moves content to the right on hover */}
      <HCarousel.Next
        {...props}
        class={cn(
          buttonVariants({ look, size }),
          "group rounded-full",
          props.class,
        )}
      >
        <div
          class={cn(
            context.orientation === "horizontal"
              ? "group-hover:translate-x-px"
              : "group-hover:translate-y-px",
            "group-hover:transition-all group-hover:duration-300",
          )}
        >
          {context.orientation === "horizontal" ? (
            <LuChevronRight class="size-6" />
          ) : (
            <LuChevronDown class="size-6" />
          )}
        </div>
      </HCarousel.Next>
    </div>
  );
});

const Pagination = component$<PropsOf<typeof HCarousel.Pagination>>(
  ({ ...props }) => {
    return (
      <HCarousel.Pagination
        {...props}
        class={cn(
          "absolute -bottom-10 flex w-full justify-center gap-4",
          props.class,
        )}
      >
        <Slot />
      </HCarousel.Pagination>
    );
  },
);

const Bullet = component$<PropsOf<typeof HCarousel.Bullet>>((props) => {
  return (
    <HCarousel.Bullet
      {...props}
      class={cn(
        "border-background bg-muted outline-muted hover:border-muted size-5 rounded-full border outline-0 transition-all duration-300 ease-in-out",
        "data-[active]:border-primary data-[active]:bg-primary data-[active]:text-primary-foreground",
        props.class,
      )}
    />
  );
});

const Title = component$<PropsOf<typeof HCarousel.Title>>((props) => {
  return (
    <HCarousel.Title {...props}>
      <Slot />
    </HCarousel.Title>
  );
});

const Stepper = (props: PropsOf<typeof HCarousel.Stepper>) => {
  return (
    <HCarousel.Stepper
      {...props}
      class={cn("flex w-full items-center justify-between", props.class)}
    >
      {props.children}
    </HCarousel.Stepper>
  );
};

const Step = component$<PropsOf<typeof HCarousel.Step>>((props) => {
  return (
    <HCarousel.Step
      {...props}
      class={cn(
        "[&[data-current]_span:first-child]:outline-primary flex items-center gap-1 [&[data-current]_span:first-child]:outline-2 [&[data-current]_span:first-child]:outline-offset-[-2px]",
        props.class,
      )}
    >
      <Slot />
    </HCarousel.Step>
  );
});

export const Carousel = {
  Root,
  Scroller,
  Slide,
  Previous,
  Next,
  Pagination,
  Bullet,
  Title,
  Stepper,
  Step,
};
