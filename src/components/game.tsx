import { useParams } from "react-router-dom"

const Game = () => {
    let params = useParams()
    let ID = params.gameID;
    return (
        <>
            This is supposed to be game with ID {ID}
        </>
    )
}

export default Game;