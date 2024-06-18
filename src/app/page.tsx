import Home from "./components/content/Home";
import Navbar from "./components/Navbar";
import About from "./components/content/About";
import Projects from "./components/content/Projects";
import Resume from "./components/content/Resume";
import Contact from "./components/content/Contact";

export default function Main() {
    return (
        <>
            <Home />
            <Navbar />
            <About />
            <Projects />
            <Resume />
            <Contact />
        </>
    );
}