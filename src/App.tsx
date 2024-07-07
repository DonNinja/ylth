import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Landing from "./components/landing";
import Header from "./components/header";
import Projects from "./components/projects";
import About from "./components/about";
// import Mines from "./components/mines";
import { home, about, projects/* , mines, games, individualgame, work */ } from "./data/routes";
// import Footer from "./components/footer";
// import GameList from "./components/games";
// import Game from "./components/game";
// import Work from "./components/work";

function App() {
	return (
		<>
			<Router>
				<Header />
				<div className="container">
					<div className="pageContainer">
						<Routes>
							{/* <Route path={work} element={<Work />} /> */}
							<Route path={home} element={<Landing />} />
							<Route path={projects} element={<Projects />} />
							<Route path={about} element={<About />} />
							{/* <Route path={mines} element={<Mines />} /> */}
							{/* <Route path={games} element={<GameList />} />
							<Route path={individualgame} element={<Game />} /> */}
						</Routes>
					</div>
				</div>
			</Router>
			{/* <Footer /> */}
		</>
	);
}

export default App;
