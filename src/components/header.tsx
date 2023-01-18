import { Link } from "react-router-dom";
import "../styles/header.css"

const Header = () => {
    return (
        <>
            <div id="header">
                <Link to="/" className="navLink">
                    Home
                </Link>
                <Link to="/projects" className="navLink">
                    Projects
                </Link>
                <Link to="/about" className="navLink">
                    About me
                </Link>
            </div>

        </>
    );
}

export default Header;