import { Link } from "react-router-dom";
import { Title } from "./functions";
import graduationPic from "../images/Me/graduationPicCropped.jpg";
import { about, projects } from "../data/routes";

import "../styles/landing.css";

const Landing = () => (
    <>
        {Title("Ylth")}
        <div className="pageContainer">
            <h1 className="title">Greetings!</h1>
            <h2 className="disclaimer"><center>Disclaimer: This website has not been finished yet, and some sites have little to no content.</center></h2>
            <div className="landingContent">
                <p>
                    Welcome to my personal website! I am Yngvi Leó Þráinsson, an Icelander who graduated from Reykjavík University with a BSc. in Computer Science. For more info about me check my <Link to={about}>About Me</Link> page, and my past projects will be found within the <Link to={projects}>Projects</Link> page.
                </p>
                <img src={graduationPic} alt="Me at my graduation from RU" className="graduationPic" />
            </div>
        </div>
    </>
)

export default Landing;