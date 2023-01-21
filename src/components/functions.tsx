import { useEffect } from "react";

export function Title(title: string) {
    useEffect(() => {
        document.title = title;
    })
}

export function Project(title: string, description: string, link: string, languages: string[], image?: string, imageDescription?: string) {
    return (
        <>
            <h2> {title} </h2>
            <div className="projectDetails">
                <div className="projectDescription">
                    {description}
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