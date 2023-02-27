import React from "react";
import "../styles/links.css"
import { Title } from "./functions";

function Link(title: string, shortDescription: string, link: string, image: string) {
    return (
        <div className="link">
            <h3>{title}</h3>
            <div className="linkDetails">
                This is a test
            </div>
        </div>
    );
}

const Links = () => {
    return (
        <>
            {Title(`Links`)}
            <div className="pageContainer">
                <h1 className="title">Links</h1>
                <div className="linksContainer">
                    {Link("LinkedIn", "My LinkedIn page", "", "")}
                    
                </div>
            </div>
        </>
    );
}

export default Links;