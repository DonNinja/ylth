import { Link } from "react-router-dom";
import { Title } from "./functions";
import graduationPic from "../images/Me/graduationPicCropped.jpg";
import { about, projects } from "../data/routes";
import { ContactLink } from "./links";

import "../styles/landing.css";
import "../styles/links.css";

const Landing = () => (
	<>
		{Title("Ylth")}
		<h1 className="title">Greetings!</h1>
		<div className="landingContent">
			<div className="landingStory">
				Welcome to my personal website! I am Yngvi Leó Þráinsson, an Icelander who graduated
				from Reykjavík University with a BSc. in Computer Science in June of 2022. For more
				info about me check my <Link to={about}>About Me</Link> page, and my past projects
				will be found within the <Link to={projects}>Projects</Link> page.
			</div>
			<img src={graduationPic} alt="Me at my graduation from RU" className="graduationPic" />
		</div>
		<h2 className="title">Social links</h2>
		<div className="linksContainer">
			{ContactLink(
				"LinkedIn",
				"My LinkedIn page",
				"https://www.linkedin.com/in/yngvi-leó-þráinsson-533630239/",
				"https://cdn-icons-png.flaticon.com/128/174/174857.png",
				"Linkedin logo"
			)}
			{ContactLink(
				"GitHub",
				"My personal Github page",
				"https://github.com/DonNinja",
				"https://cdn-icons-png.flaticon.com/512/733/733553.png",
				"GitHub logo"
			)}
			{ContactLink("Itch.io", "My personal itch.io page", "https://donninja.itch.io")}
			{ContactLink("Contact me", "Send me an email", "mailto:www.yngvilth@gmail.com")}
		</div>
	</>
);

export default Landing;
