import { Link } from "react-router-dom";
import "../styles/header.css"

const Header = () => {
    return (
        <>
            <div id="header">
                <Link to="/ylth/" className="navLink">Home</Link>
                <Link to="/ylth/about" className="navLink">About me</Link>
                <Link to="/ylth/projects" className="navLink">Projects</Link>
                <Link to="/ylth/links" className="navLink">Links</Link>
            </div>

        </>
    );
}

export default Header;