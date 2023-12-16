import { useParams } from "react-router-dom"

const Game = () => {
    let params = useParams()
    let ID = params.gameID;
    return (
        <>
            This is supposed to be game with ID {ID}
            <iframe title="My lil' Sleipnir" src="https://itch.io/embed-upload/4923098?color=00ced4" allowFullScreen={true} width="1024" height="596"><a href="https://ylth.itch.io/my-lil-sleipnir">Play My lil' Sleipnir on itch.io</a></iframe>
        </>
    )
}

export default Game;