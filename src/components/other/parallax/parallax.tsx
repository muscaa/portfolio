import {
    component$,
    useStore,
    useVisibleTask$,
    Signal,
} from "@builder.io/qwik";
import { Icon } from "~/components/other";

export interface Store {
    x: number;
    y: number;
}

export interface Layer {
    icon: Icon;
    offset: number;
    width: number;
    height: number;
    scale: number;
}

export interface Options {
    xFactor?: number;
    yFactor?: number;
}

export interface ParallaxLayerProps {
    store: Store;
    options: Options;
    layer: Layer;
}

export const ParallaxLayer = component$<ParallaxLayerProps>((props) => {
    const xFactor = props.layer.width / props.layer.height;
    const yFactor = props.layer.height / props.layer.width;

    return (
        <div
            class="absolute transition-transform duration-100 ease-out"
            style={{
                width: `max(${props.layer.scale}vw, calc(${props.layer.scale}vh * ${xFactor}))`,
                height: `max(${props.layer.scale}vh, calc(${props.layer.scale}vw * ${yFactor}))`,
                left: `calc(50vw - max(${props.layer.scale}vw, calc(${props.layer.scale}vh * ${xFactor})) / 2)`,
                top: `calc(50vh - max(${props.layer.scale}vh, calc(${props.layer.scale}vw * ${yFactor})) / 2)`,
                transform: `translate(
                    ${props.store.x * props.layer.offset * (props.options.xFactor ?? 1)}px,
                    ${props.store.y * props.layer.offset * (props.options.yFactor ?? 1)}px)`,
            }}
        >
            <props.layer.icon class="absolute inset-0 w-full h-full" />
        </div>
    );
});

export interface ParallaxLayersProps {
    interact: Signal<boolean>;
    options?: Options;
    layers: Layer[];
}

export const ParallaxLayers = component$<ParallaxLayersProps>((props) => {
    const store = useStore<Store>({
        x: 0,
        y: 0,
    });

    useVisibleTask$(({ track }) => {
        const interact = track(props.interact);

        const handleMouseMove = (event: MouseEvent) => {
            if (!interact) return;

            store.x = event.clientX / window.innerWidth - 0.5;
            store.y = event.clientY / window.innerHeight - 0.5;
        };

        const handleTouchMove = (event: TouchEvent) => {
            if (!interact) return;

            store.x = event.touches[0].clientX / window.innerWidth - 0.5;
            store.y = event.touches[0].clientY / window.innerHeight - 0.5;
        }

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("touchmove", handleTouchMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("touchmove", handleTouchMove);
        };
    });

    return (
        <div class="absolute inset-0 w-full h-full overflow-hidden">
            {
                props.layers.map((layer, index) => (
                    <ParallaxLayer
                        key={index}
                        store={store}
                        options={props.options || {}}
                        layer={layer}
                    />
                ))
            }
        </div>
    );
});
