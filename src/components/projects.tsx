import { Title } from "./functions";
import '../styles/projects.css';
import ManaRumble from "../images/Projects/ManaRumble.png"
import YCP from "../images/Projects/YCP.png"

let i = 0;


function Project(title: string, description: string, link: string, languages: string, image?: string, imageDescription?: string) {
    const projectStyle = {
        flexDirection: "row-reverse"
    }
    i++;
    return (
        <>
            <section className="project">
                <h2 className="projectTitle"><a href={link} rel="noreferrer" target="_blank"> {title} </a></h2>
                <div className="projectDetails" style={
                    // reverse row direction for every other project
                    i % 2 === 0 ?
                        { flexDirection: "row-reverse" } :
                        {}
                }>
                    <div className="projectText">
                        <p className="projectDescription" dangerouslySetInnerHTML={{ __html: description }}></p>
                        <p className="projectLink"><a href={link} rel="noreferrer" target="_blank">See the project</a></p>
                        <p className="projectLanguages"><i>Languages and/or tools used</i>: <b>{languages}</b></p>
                    </div>
                    {
                        // If image exists, show it
                        image !== "" ?
                            <img src={image} alt={imageDescription} className="projectLogo" /> :
                            <></>
                    }
                </div>
            </section>
        </>
    );
}

const Projects = () => (
    <>
        {Title("My projects")}
        <div className="pageContainer">
            <h1 className="title">Projects</h1>
            {Project(
                "Mana Rumble",
                `Mana Rumble was our final project during our Computer Science studies in Reykjavík University. It was developed using Unity while utilising Rewired so that two players can use separate controllers on the same machine.
                
                <p>
                    Mana Rumble is a team based PVP fantasy sports game, utilising a simplified version of handball while allowing the player to control any of 3 characters, each with an ability based on fantasy classes found in fantasy roleplaying games.
                </p>`,
                "https://ylth.itch.io/mana-rumble",
                "Unity, C#",
                ManaRumble,
                "Mana Rumble logo"
            )}
            {Project(
                "YouTube Chapter Pauser",
                `YouTube Chapter Pauser is a personal project of mine. It was thought up as I was watching long YouTube videos and realising I was going to go do something but not wanting to pause there and then. I then realised that the video I was watching had chapters and it would be cool if I could stop the video when the next chapter started.

                <p>
                    This is a chrome extension that sets a YouTube video to stop when it reaches the next chapter as set by the video uploader.
                </p>`,
                "https://chrome.google.com/webstore/detail/youtube-chapter-pauser/igaciglbekobidklgklaejjkoefpcdgf",
                "Javascript, HTML, CSS",
                YCP,
                "YouTube Chapter Pauser icon"
            )}
        </div>
    </>
);

export default Projects;