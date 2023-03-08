import { Title } from "./functions"
import "../styles/about.css"
// import 

function study(title: string, description: string, image: string, imageDescription: string) {
    return (
        <div>
            <h3 className="studyTitle"><a href="https://en.tskoli.is/" target="_blank" rel="noreferrer">{title}</a></h3>
            <div>
                <div dangerouslySetInnerHTML={{ __html: description }} />
                <img src={image} alt={imageDescription} />
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
                <div className="content">
                    {study(
                        "Tækniskólinn",
                        `I started my programming studies at Tækniskólinn, starting at their Computer Science classes in the spring of 2016. I decided quite early on in my life that I wanted to learn how to program and how programs, and computers in general, work to help us to solve the problems we face.
                        <br />
                        During my studies I was a dilligent student and always turned in my projects on time almost always with satisfying results.`,
                        "",
                        ""
                    )}
                </div>
            </div>
        </>
    )
}

export default About;