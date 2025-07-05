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

export interface ParallaxLayerOpts {
    store: Store;
    options: Options;
    layer: Layer;
}

export const ParallaxLayer = component$<ParallaxLayerOpts>((opts) => {
    const xFactor = opts.layer.width / opts.layer.height;
    const yFactor = opts.layer.height / opts.layer.width;

    return (
        <div
            class="absolute transition-transform duration-100 ease-out"
            style={{
                width: `max(${opts.layer.scale}vw, calc(${opts.layer.scale}vh * ${xFactor}))`,
                height: `max(${opts.layer.scale}vh, calc(${opts.layer.scale}vw * ${yFactor}))`,
                left: `calc(50vw - max(${opts.layer.scale}vw, calc(${opts.layer.scale}vh * ${xFactor})) / 2)`,
                top: `calc(50vh - max(${opts.layer.scale}vh, calc(${opts.layer.scale}vw * ${yFactor})) / 2)`,
                transform: `translate(
                    ${opts.store.x * opts.layer.offset * (opts.options.xFactor ?? 1)}px,
                    ${opts.store.y * opts.layer.offset * (opts.options.yFactor ?? 1)}px)`,
            }}
        >
            <opts.layer.icon class="absolute inset-0 w-full h-full" />
        </div>
    );
});

export interface ParallaxLayersOpts {
    interact: Signal<boolean>;
    options?: Options;
    layers: Layer[];
}

export const ParallaxLayers = component$<ParallaxLayersOpts>((props) => {
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
