import { Link } from "react-router-dom";
import { Title } from "./functions";
import graduationPic from "../images/graduationPicCropped.jpg";

import "../styles/landing.css";

const Landing = () => (
    <>
        {Title("Ylth")}
        <div className="landingContainer">
            <h1 className="title">Greetings!</h1>
            <p>
                Welcome to my personal website! I am Yngvi Leó Þráinsson, an Icelander who graduated from Reykjavík University with a BSc. in Computer Science. For more info about me check my <Link to="/about">About Me</Link> page, and my past projects will be found within the <Link to="/projects">Projects</Link> page.
            </p>
            <p>
                <center>
                    <img src={graduationPic} alt="Me at my graduation from RU" className="graduationPic" />
                </center>
            </p>
        </div>
    </>
)

export default Landing;