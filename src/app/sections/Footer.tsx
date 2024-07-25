import ButtonArrow from "../components/ButtonArrow";
import * as Config from "../Config";

export default function Footer() {
    return (
        <footer className="bg-background-2 bg-opacity-25 backdrop-blur-lg flex flex-col justify-center items-center text-center py-8 space-y-4">
            <ButtonArrow direction="up" href="#home" className="absolute -top-8" />
            <h6 className="font-light text-text-2">{Config.footer}</h6>
        </footer>
    );
}
