import React from "react";
import "../styles/links.css"
import { Title } from "./functions";

function Link(title: string, shortDescription: string, link: string, image: string, imageAlt: string) {
    return (
        <a href={link} className="link">
            <h3>{title}</h3>
            <div className="linkDetails">
                {shortDescription}
                <img className="icon" src={image} alt={imageAlt} />
            </div>
        </a>
    );
}

const Links = () => {
    return (
        <>
            {Title(`Links`)}
            <div className="pageContainer">
                <h1 className="title">Links</h1>
                <div className="linksContainer">
                    {Link("LinkedIn", "My LinkedIn page", "https://www.linkedin.com/in/yngvi-leó-þráinsson-533630239/", "https://cdn-icons-png.flaticon.com/128/174/174857.png", "Linkedin logo")}
                    {Link("GitHub", "Github Page", "https://github.com/DonNinja", "https://cdn-icons-png.flaticon.com/512/733/733553.png", "GitHub logo")}
                </div>
            </div>
        </>
    );
}

export default Links;