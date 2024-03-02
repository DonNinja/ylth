import { Title } from "./functions";
import "../styles/about.css";
import HR_Diploma from "../images/Diplomas/HR_Diploma.jpg";
import TSchool_Diploma from "../images/Diplomas/TSchool_Diploma.jpg";

function Study(
  title: string,
  description: string,
  image: string,
  imageDescription: string,
  average: number,
  link?: string
) {
  return (
    <div className="studyObject">
      <h3 className="studyTitle">
        <a href={link} target="_blank" rel="noreferrer">
          {title}
        </a>
      </h3>
      <div className="aboutSchool">
        <div
          dangerouslySetInnerHTML={{ __html: description }}
          className="schoolStory"
        />
        <img src={image} alt={imageDescription} className="schoolDiploma" />
      </div>
      <p className="studyGrade">Average grade: {average}/10</p>
    </div>
  );
}

const About = () => {
  return (
    <>
      {Title("About me")}
      <div className="pageContainer">
        <h1 className="title">About me</h1>
        <div className="aboutContent">
          <div>
            As I said on the main page, I am Yngvi Leó Þráinsson, and I'm a
            programmer. I have been interested in programming since I started
            playing video games, as that was my introduction to using computers.
            I've always been interested with knowing how the programs I have
            been using work behind the scenes to allow us to make life easier
            when doing tasks that don't require too much thought. I also receive
            a lot of happiness when I think of the people that I have helped
            with either configuring their workspaces, or by developing programs,
            or extensions, to increase their enjoyment when working with
            computers.
          </div>

          <h2>
            <center>Studies</center>
          </h2>
          {Study(
            "Reykjavík University",
            `I started studying in Reykjavík University in August of 2019, and quickly found that I may have had a bit more preparation than some of my peers, at least regarding formal education. I quickly discovered however that the studies would move fast and others would be caught up in no time. `,
            HR_Diploma,
            "My diploma from Reykjavík University",
            7.98,
            "https://en.ru.is"
          )}
          {Study(
            "Tækniskólinn",
            `I started my programming studies at Tækniskólinn, starting at their Computer Science classes in the spring of 2016. I decided quite early on in my life that I wanted to learn how to program and how programs, and computers in general, work to help us to solve the problems we face.
                        <br />
                        During my studies I was a dilligent student and always turned in my projects on time and almost always with satisfying results (Can't win 'em all, sadly).`,
            TSchool_Diploma,
            "My diploma from Tækniskólinn",
            8.11,
            "https://en.tskoli.is"
          )}
        </div>
      </div>
    </>
  );
};

export default About;
