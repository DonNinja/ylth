import { Title } from "./functions"
import "../styles/about.css"
import HR_Diploma from "../images/Diplomas/HR_Diploma.jpg";
import TSchool_Diploma from "../images/Diplomas/TSchool_Diploma.jpg";

function Study(title: string, description: string, image: string, imageDescription: string) {
    return (
        <div>
            <h3 className="studyTitle"><a href="https://en.tskoli.is/" target="_blank" rel="noreferrer">{title}</a></h3>
            <div className="aboutSchool">
                <div dangerouslySetInnerHTML={{ __html: description }} className="schoolStory" />
                <img src={image} alt={imageDescription} className="schoolDiploma" />
            </div>

        </div>
    );
}

const About = () => {
    return (
        <>
            {Title("About me")}
            <div className="pageContainer">
                <h1 className="title">About me</h1>
                <h2><center>Studies</center></h2>
                <div className="aboutContent">
                    {Study(
                        "Tækniskólinn",
                        `I started my programming studies at Tækniskólinn, starting at their Computer Science classes in the spring of 2016. I decided quite early on in my life that I wanted to learn how to program and how programs, and computers in general, work to help us to solve the problems we face.
                        <br />
                        During my studies I was a dilligent student and always turned in my projects on time almost always with satisfying results.`,
                        TSchool_Diploma,
                        "My diploma from Tækniskólinn"
                    )}
                    <br />
                    {Study(
                        "Reykjavík University",
                        `I started `,
                        HR_Diploma,
                        "My diploma from Reykjavík University"
                    )}
                </div>
            </div>
        </>
    )
}

export default About;