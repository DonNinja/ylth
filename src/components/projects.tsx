import { Project, Title } from "./functions";
import '../styles/projects.css';

const Projects = () => (
    <>
        {Title("My projects")}
        <div className="projectsContainer">
            <h1 className="sectionTitle">Projects</h1>
            {Project(
                "Mana Rumble",
                `<Insert description here>`,
                "",
                ["Unity", "C#"],
                "https://img.itch.zone/aW1nLzg5MTM4NzMucG5n/original/bGatto.png",
                "Test image"
            )}
        </div>
    </>
);

export default Projects;