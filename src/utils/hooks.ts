import {
    useVisibleTask$,
    useSignal,
} from "@builder.io/qwik";

export type WindowSize = {
    width: number;
    height: number;
} | null;

export function useWindowSize() {
    const windowSize = useSignal<WindowSize>(null);
    useVisibleTask$(() => {
        const handleResize = () => {
            windowSize.value = {
                width: window.innerWidth,
                height: window.innerHeight,
            };
        };

        handleResize();

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    });

    return windowSize;
}

export function useIsMobile() {
    const windowSize = useWindowSize();
    if (windowSize.value == null) return null;

    return windowSize.value.width < 768;
}
