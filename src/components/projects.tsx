import { Title } from "./functions";
import '../styles/projects.css';
import ManaRumble from "../images/Projects/ManaRumble.png";

function Project(title: string, description: string, link: string, languages: string, image?: string, imageDescription?: string) {
    return (
        <>
            <h2> {title} </h2>
            <div className="projectDetails">
                <div className="projectText">
                    <p className="projectDescription" dangerouslySetInnerHTML={{ __html: description }}></p>
                    <p className="projectLink"><a href={link} rel="noreferrer" target="_blank">View the project</a></p>
                    <p className="projectLanguages"><i>Languages and/or tools used</i>: <b>{languages}</b></p>
                </div>
                {
                    // This works as an if statement since 'true && expression' evaluates to expression which is useful
                    image !== "" &&
                    <img src={image} alt={imageDescription} className="projectLogo" />
                }
            </div>
        </>
    );
}

const Projects = () => (
    <>
        {Title("My projects")}
        <div className="projectsContainer">
            <h1 className="sectionTitle">Projects</h1>
            {Project(
                "Mana Rumble",
                `<p>Insert description here</p>`,
                "https://yngvi19.itch.io/mana-rumble",
                "Unity, C#",
                ManaRumble,
                "Mana Rumble logo"
            )}
        </div>
    </>
);

export default Projects;