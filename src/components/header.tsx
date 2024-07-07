import { Link } from "react-router-dom";
import "../styles/header.css";
import { home, about, projects, games, work } from "../data/routes";
import Logo from "../images/Logo/logo.png";

const Header = () => {
	return (
		<div id="header">
			{/* <Link to={work} className="navLink">
				<p>Work</p>
			</Link> */}
			<Link to={about} className="navLink">
				<p>About me</p>
			</Link>
			<Link to={home} className="logo">
				<img src={Logo} alt="Home" />
			</Link>
			<Link to={projects} className="navLink">
				<p>Projects</p>
			</Link>
			{/* <Link to={games} className="navLink">
				Games
			</Link> */}
		</div>
	);
};

export default Header;
