import { Link } from "react-router-dom";

const Games = () => {
    return (
        <>
            <ul>
                <li><Link to={"test1"}>Test 1</Link></li>
                <li>
                    <iframe title="Mana Rumble" src="https://itch.io/embed/1424286" width="552" height="167"><a href="https://ylth.itch.io/mana-rumble">Mana Rumble by ylth, langikottur, nei_tu, Max</a></iframe>
                </li>
            </ul>
            <Link to={"test"}>
                <iframe title="My lil Sleipnir" src="https://itch.io/embed/1303330" width="552" height="167">My lil' Sleipnir by ylth, langikottur, brekih, aslaug20</iframe>
            </Link>
        </>
    )
}

export default Games;