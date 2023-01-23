import { Title } from "./functions";
import '../styles/projects.css';

function Project(title: string, description: string, link: string, languages: string, image?: string, imageDescription?: string) {
    return (
        <>
            <h2> {title} </h2>
            <div className="projectDetails">
                <div className="projectText">
                    <p className="projectDescription" dangerouslySetInnerHTML={{ __html: description }}></p>
                    <p className="projectLink"><a href={link} rel="noreferrer" target="_blank">View the project</a></p>
                    <p className="projectLanguages"><i>Languages and/or tools used</i>: {languages}</p>
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
                `<p>Insert description here</p> This should be second line`,
                "https://yngvi19.itch.io/mana-rumble",
                "Unity, C#",
                "https://img.itch.zone/aW1nLzg5MTM4NzMucG5n/original/bGatto.png",
                "Test image"
            )}
        </div>
    </>
);

export default Projects;