import React from "react";
import "../styles/links.css";
import { Title } from "./functions";

export function ContactLink(
	title: string,
	shortDescription: string,
	link: string,
	image?: string,
	imageAlt?: string
) {
	return (
		<a href={link} target="_blank" className="link" rel="noreferrer">
			<h3>{title}</h3>
			<div className="linkDetails">
				{shortDescription}
				<br />
				{image ? <img className="icon" src={image} alt={imageAlt} /> : <></>}
			</div>
		</a>
	);
}

const Links = () => {
	return (
		<>
			{Title(`Links`)}
			<h1 className="title">Links</h1>
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
};

export default Links;
