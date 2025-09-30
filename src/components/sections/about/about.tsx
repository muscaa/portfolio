import {
    component$,
    useSignal,
    useVisibleTask$,
} from "@builder.io/qwik";
import {
    Title,
} from "~/components/ui";
import * as d3 from "d3";
import { Icon } from "~/components/other";
import { Si } from "~/components/icons";

type Skill = {
    id: string;
    r: number;
    icon: Icon;
};

type SimulatedSkill = Skill & {
    x: number;
    y: number;
};

export const SectionAbout = component$(() => {
    const ref = useSignal<HTMLElement>();
    const ref2 = useSignal<HTMLDivElement>();
    const skills: Skill[] = Array.from({ length: 100 }).map(() => ({
        id: "skill",
        r: Math.random() * 64 + 32,
        icon: Si.Github,
    }));

    useVisibleTask$(() => {
        const div = ref2.value!;
        const rect = div.getBoundingClientRect();

        const simulatedSkills: SimulatedSkill[] = skills.map((skill) => ({
            ...skill,
            x: rect.width / 2,
            y: rect.height / 2,
        }));
        const simulation = d3.forceSimulation(simulatedSkills)
            .force("center", d3.forceCenter(rect.width / 2, rect.height / 2))
            .force("collision", d3.forceCollide<SimulatedSkill>().radius(d => d.r * 0.5))
            .force("body", d3.forceManyBody<SimulatedSkill>().strength(d => Math.exp(-d.r / 96)))
            .force("radial", d3.forceRadial(100))
            ;

        const node = d3
            .selectAll("#skill")
            .data(simulatedSkills)
            .join("#skill")
            ;

        node.call(d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended) as any);

        simulation.on("tick", () => {
            node
                .attr("style", d => `translate: ${d.x}px ${d.y}px; width: ${d.r}px; height: ${d.r}px;`)
                ;
        });

        function dragstarted(event: any) {
            if (!event.active) simulation.alphaTarget(0.05).restart();
            event.subject.fx = event.subject.x;
            event.subject.fy = event.subject.y;
        }

        function dragged(event: any) {
            event.subject.fx = event.x;
            event.subject.fy = event.y;
        }

        function dragended(event: any) {
            if (!event.active) simulation.alphaTarget(0);
            event.subject.fx = null;
            event.subject.fy = null;
        }
    });

    return (
        <section
            ref={ref}
            id="about"
            class="flex justify-center h-screen"
        >
            <div class="flex flex-col max-w-6xl w-full bg-red-400">
                <Title>
                    About
                </Title>
                <div ref={ref2} class="relative size-full bg-white">
                    {
                        skills.map((skill) => (
                            // <skill.icon id={skill.id} class={`absolute text-black`} />
                            <div id={skill.id} class="absolute bg-black rounded-full"></div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
});

/*
        // Specify the dimensions of the chart.
        const width = 928;
        const height = 680;

        // Specify the color scale.
        const color = d3.scaleOrdinal(d3.schemeCategory10);

        // The force simulation mutates links and nodes, so create a copy
        // so that re-evaluating this cell produces the same result.
        const nodes: Node[] = [];

        // Create a simulation with several forces.
        const simulation = d3.forceSimulation(nodes)
            .force("charge", d3.forceManyBody())
            .force("x", d3.forceX())
            .force("y", d3.forceY());

        // Create the SVG container.
        const svg = d3.select(".d3svg")
            .attr("width", width)
            .attr("height", height)
            .attr("viewBox", [-width / 2, -height / 2, width, height])
            .attr("style", "max-width: 100%; height: auto;");

        const node = svg.append("g")
            .attr("stroke", "#fff")
            .attr("stroke-width", 1.5)
            .selectAll("circle")
            .data(nodes)
            .join("circle")
            .attr("r", 5)
            .attr("fill", "#FF0000FF");

        node.append("title")
            .text(d => d.id);

        // Add a drag behavior.
        node.call(d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended));

        // Set the position attributes of links and nodes each time the simulation ticks.
        simulation.on("tick", () => {
            node
                .attr("cx", d => d.x)
                .attr("cy", d => d.y);
        });

        // Reheat the simulation when drag starts, and fix the subject position.
        function dragstarted(event: any) {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            event.subject.fx = event.subject.x;
            event.subject.fy = event.subject.y;
        }

        // Update the subject (dragged node) position during drag.
        function dragged(event: any) {
            event.subject.fx = event.x;
            event.subject.fy = event.y;
        }

        // Restore the target alpha so the simulation cools after dragging ends.
        // Unfix the subject position now that it’s no longer being dragged.
        function dragended(event: any) {
            if (!event.active) simulation.alphaTarget(0);
            event.subject.fx = null;
            event.subject.fy = null;
        }

        // When this cell is re-run, stop the previous simulation. (This doesn’t
        // really matter since the target alpha is zero and the simulation will
        // stop naturally, but it’s a good practice.)
        // invalidation.then(() => simulation.stop());

        // return svg.node();






        const skills: {
            id: string;
            icon: string;
            img?: HTMLImageElement;
            x: number;
            y: number;
        }[] = [
            { id: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", x: 0, y: 0 },
            { id: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", x: 0, y: 0 },
            { id: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", x: 0, y: 0 },
            { id: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", x: 0, y: 0 },
            // Add as many skills as you want
        ];

        const width = 500;
        const height = 200;

        const canvas = ref2.value!;
        const ctx = canvas.getContext("2d")!;

        // Resize canvas to fit window
        function resizeCanvas() {
            canvas.width = width;
            canvas.height = height;
        }
        resizeCanvas();

        const radius = 30; // size of nodes

        // Preload images
        await Promise.all(
            skills.map(skill => new Promise(resolve => {
                const img = new Image();
                img.src = skill.icon;
                img.onload = () => {
                    skill.img = img;
                    resolve(skill);
                };
            }))
        );

        console.log("loaded");

        // Setup D3 force simulation
        const simulation = forceSimulation(skills)
            .force("charge", forceManyBody())
            .force("collision", forceCollide(radius * 0.75))
            .force("x", forceX(width / 2).strength(0.5))
            .force("y", forceY(height / 2).strength(0.5))
            .alphaDecay(0.03) // controls how quickly it stabilizes
            .on("tick", draw);

        function draw() {
            console.log("tick");

            ctx.clearRect(0, 0, canvas.width * 16, canvas.height * 16);
            skills.forEach(node => {
                // Draw circle background
                ctx.beginPath();
                ctx.arc(node.x, node.y, radius / 1.3, 0, 2 * Math.PI);
                ctx.fillStyle = "#222";
                ctx.fill();

                // Draw icon
                if (node.img) {
                    ctx.drawImage(node.img, node.x - radius / 2, node.y - radius / 2, radius, radius);
                }

                // Draw text
                // ctx.font = "14px sans-serif";
                // ctx.fillStyle = "white";
                // ctx.textAlign = "center";
                // ctx.fillText(node.id, node.x, node.y + radius * 0.8);
            });
        }
*/
