import { Link } from "react-router-dom";
import "../styles/header.css"
import { home, about, projects } from "../data/routes";
// , links, work

const Header = () => {
    return (
        <div id="header">
            <Link to={home} className="navLink">Home</Link>
            <Link to={about} className="navLink">About me</Link>
            <Link to={projects} className="navLink">Projects</Link>
            {/* <Link to={work} className="navLink">Work</Link> */}
        </div>
    );
}

export default Header;