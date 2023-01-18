import { Link } from "react-router-dom";

const Header = () => (
    <>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/about">About me</Link></li>
        </ul>

    </>
)

export default Header;