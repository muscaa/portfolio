import React from "react";
import { useState, useEffect } from "react";
import { ComponentType } from "react";
import * as Parallax from "../svg/Parallax";
import { motion } from "framer-motion";

function MotionDiv({ ImageComponent, x, y, offset }:
    { ImageComponent: ComponentType<{ className?: string }>, x: number, y: number, offset: number }) {

    return (
        <motion.div
            transition={{
                easings: "easeInOut",
                duration: 0.1,
            }}
            animate={{
                x: x * offset,
                //y: y * offset,
            }}
            className="absolute w-[calc(140vh*1.65)] h-[140vh] left-[calc(50vw-70vh*1.65)] top-[-25vh]"
        >
            <ImageComponent className="absolute inset-0 w-full h-full" />
        </motion.div>
    );
}

export default function ParallaxBackground() {
    const [mousePosition, setMousePosition] = useState({
        x: 0.5,
        //y: 0.5
    });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setMousePosition({
                x: event.clientX / window.innerWidth,
                //y: event.clientY / window.innerHeight,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);
  
    const x = (mousePosition.x - 0.5);
    //const y = (mousePosition.y - 0.5);
    const y = 0;

    return (
        <div
            id="bg-parallax"
            className="absolute inset-0 w-full h-full overflow-hidden"
        >
            <MotionDiv ImageComponent={Parallax.Background} x={x} y={y} offset={0} />
            <MotionDiv ImageComponent={Parallax.Mountains} x={x} y={y} offset={40} />
            <MotionDiv ImageComponent={Parallax.ForestBack} x={x} y={y} offset={80} />
            <MotionDiv ImageComponent={Parallax.ForestMid} x={x} y={y} offset={160} />
            <MotionDiv ImageComponent={Parallax.ForestFront} x={x} y={y} offset={320} />
        </div>
    );
}
