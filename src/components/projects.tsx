import { Title } from "./functions";
import '../styles/projects.css';
import { Link } from "react-router-dom";

function Project(title: string, description: string, link: string, languages: string[], image?: string, imageDescription?: string) {
    return (
        <>
            <h2> {title} </h2>
            <div className="projectDetails">
                <div className="projectDescription">
                    <p>
                        {description}
                    </p>
                    <p className=""><Link to={link} replace={true} target="_blank">View the project</Link></p>
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
                `<Insert description here>`,
                "https://yngvi19.itch.io/mana-rumble",
                ["Unity", "C#"],
                "https://img.itch.zone/aW1nLzg5MTM4NzMucG5n/original/bGatto.png",
                "Test image"
            )}
        </div>
    </>
);

export default Projects;