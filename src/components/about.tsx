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
				<div className="schoolDiploma">
					<img src={image} alt={imageDescription} />
					<p className="studyGrade">Average grade: {average}/10</p>
				</div>
				<div dangerouslySetInnerHTML={{ __html: description }} className="schoolStory" />
			</div>
		</div>
	);
}

const About = () => {
	return (
		<>
			{Title("About me")}
			<h1 className="title">About me</h1>
			<div className="aboutContent">
				<div>
					<p>
						As I said on the main page, my name is Yngvi Leó Þráinsson, and I'm a
						programmer. I have been interested in programming since I started playing
						video games when I was in kindergarten, as that was my introduction to using
						computers. I've always been interested in knowing how the programs I have
						been using work behind the scenes to allow us to make life easier when doing
						tasks that don't require too much thought. I also experience a lot of
						happiness when I think of the people that I have helped with either
						configuring their workspaces, or by developing programs or extensions,
						increase their enjoyment when working with computers.
					</p>
					<p>
						I have worked on a variety of different projects, though most done during my
						tenures at university and high school. A lot of my projects can be found on
						my{" "}
						<a href="https://github.com/DonNinja" target="_blank" rel="noreferrer">
							GitHub
						</a>
						, although quite a few have either never left my computer or need to be
						private for security reasons.
					</p>
				</div>

				<h2>
					<center>Studies</center>
				</h2>
				{Study(
					"Reykjavík University",
					`<p>I started studying in Reykjavík University in August of 2019, and quickly found that I may have had a bit more preparation than some of my peers, at least regarding formal education. I quickly discovered however that the studies would move fast and others would be caught up in no time.</p>
			        <p>I found the studies in Reykjavík University to be very interesting, and the projects that were given were always fun and brain stimulating challenges. I always tried the absolute hardest I could to finish each project with satisfactory results. The teams I worked within always had good comradery between every team member, and I took the role of team captain upon myself multiple times when it was needed.</p>`,
					HR_Diploma,
					"My diploma from Reykjavík University",
					7.98,
					"https://en.ru.is"
				)}
				{Study(
					"Tækniskólinn",
					`<p>I started my programming studies at Tækniskólinn, starting at their Computer Science classes in the spring of 2016. I decided quite early on in my life that I wanted to learn how to program and how programs, and computers in general, work to help us to solve the problems we face.</p>
                    <p>During my studies I was a dilligent student and always turned in my projects on time and almost always with satisfying results (Can't win 'em all, sadly).</p>`,

					TSchool_Diploma,
					"My diploma from Tækniskólinn",
					8.11,
					"https://en.tskoli.is"
				)}
			</div>
		</>
	);
};

export default About;
