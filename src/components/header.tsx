import { Link } from "react-router-dom";
import "../styles/header.css"

const Header = () => (
    <>
        <ul id="header">
            <Link to="/" className="navLink"><li>Home</li></Link>
            <Link to="/projects" className="navLink"><li>Projects</li></Link>
            <Link to="/about" className="navLink"><li>About me</li></Link>
        </ul>

    </>
)

export default Header;