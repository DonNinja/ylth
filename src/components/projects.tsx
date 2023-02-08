import { Title } from "./functions";
import '../styles/projects.css';
import ManaRumble from "../images/Projects/ManaRumble.png";
import YCP from "../images/Projects/YCP.png";

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
                `
                    Mana Rumble was our final project during our Computer Science studies in Reykjavík University. It was developed using Unity while utilising Rewired so that two players can use separate controllers on the same machine.
                <p>
                    Mana Rumble is a team based PVP fantasy sports game, utilising a simplified version of handball while allowing the player to control any of 3 characters, each with an ability based on fantasy classes found in fantasy roleplaying games.
                </p>`,
                "https://yngvi19.itch.io/mana-rumble",
                "Unity, C#",
                ManaRumble,
                "Mana Rumble logo"
            )}
            {Project(
                "YouTube Chapter Pauser",
                `   YouTube Chapter Pauser is a personal project of mine. It was thought up as I was watching long YouTube videos and realising I was going to go do something but not wanting to pause there and then. I then realised that the video I was watching had chapters and it would be cool if I could stop the video when the next chapter started.
                
                <p>
                    This is a chrome extension that sets a YouTube video to stop when it reaches the next chapter as set by the video uploader.
                </p>`,
                "https://chrome.google.com/webstore/detail/youtube-chapter-pauser/igaciglbekobidklgklaejjkoefpcdgf",
                "Javascript, CSS",
                YCP,
                "YouTube Chapter Pauser icon"
            )}
        </div>
    </>
);

export default Projects;