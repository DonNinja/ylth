import { Title } from "./functions";
import '../styles/projects.css';
import ManaRumble from "../images/Projects/ManaRumble.png"
import YCP from "../images/Projects/YCP.png"

let i = 1;

function Project(title: string, description: string, link: string, githubLink: string, languages: string, image?: string, imageDescription?: string) {
    // i++;
    return (
        <section className="project">
            <h2 className="projectTitle"><a href={link} rel="noreferrer" target="_blank"> {title} </a></h2>
            <div className="projectDetails" style={
                // Reverse row direction for every other project
                i++ % 2 === 1 ?
                    { flexDirection: "row-reverse" } :
                    {}
            }>
                <div className="projectText">
                    <p className="projectDescription" dangerouslySetInnerHTML={{ __html: description }}></p>
                    <p className="projectLink"><a href={link} rel="noreferrer" target="_blank">See the project</a> |&nbsp;
                        {
                            // If no GitHub link given, assume repo is private
                            githubLink !== "" ?
                                <a href={githubLink} target="_blank" rel="noreferrer">See the GitHub repo</a>
                                :
                                <b>Repo is private</b>
                        }
                    </p>
                    <p className="projectLanguages"><i>Major languages and/or tools used</i>: <b>{languages}</b></p>
                </div>
                {
                    // If image is given, show it else don't
                    image ?
                        <img src={image} alt={imageDescription} className="projectLogo" /> :
                        <></>
                }
            </div>
        </section>
    );
}

const Projects = () => (
    <>
        {Title("My projects")}
        <div className="pageContainer">
            <h1 className="title">Projects</h1>
            {Project(
                "Ylth",
                `This is this website, I felt like it would be easier for me to create a website which I could periodically update instead of updating my CV periodically. We'll just have to see if this was a fruitless effort or if it will ultimately be more useful than not.`,
                "https://ylth.is/",
                "https://github.com/DonNinja/ylth",
                "React.js, Typescript, HTML, CSS"
            )}
            {Project(
                "YouTube Chapter Pauser",
                `YouTube Chapter Pauser is a personal project of mine. It was thought up as I was watching long YouTube videos and realising I was going to go do something but not wanting to pause there and then. I then realised that the video I was watching had chapters and it would be cool if I could stop the video when the next chapter started.

                <p>
                    This is a chrome extension that sets a YouTube video to stop when it reaches the next chapter as set by the video uploader.
                </p>`,
                "https://chrome.google.com/webstore/detail/youtube-chapter-pauser/igaciglbekobidklgklaejjkoefpcdgf",
                "https://github.com/DonNinja/YouTube-Chapter-Pauser",
                "Javascript, HTML, CSS",
                YCP,
                "YouTube Chapter Pauser icon"
            )}
            {Project(
                "Mana Rumble",
                `Mana Rumble was our final project during our Computer Science studies in Reykjavík University. It was developed using Unity while utilising Rewired so that two players can use separate controllers on the same machine.
                
                <p>
                    Mana Rumble is a team based PVP fantasy sports game, utilising a simplified version of handball while allowing the player to control any of 3 characters, each with an ability based on fantasy classes found in fantasy roleplaying games.
                </p>`,
                "https://ylth.itch.io/mana-rumble",
                "",
                "Unity, C#",
                ManaRumble,
                "Mana Rumble logo"
            )}
        </div>
    </>
);

export default Projects;