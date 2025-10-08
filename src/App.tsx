import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Landing from "./components/landing";
import Header from "./components/header";
import Projects from "./components/projects";
import About from "./components/about";
import { home, about, projects } from "./data/routes";

function App() {
	return (
		<>
			<Router>
				<Header />
				<div className="container">
					<div className="pageContainer">
						<Routes>
							<Route path={home} element={<Landing />} />
							<Route path={projects} element={<Projects />} />
							<Route path={about} element={<About />} />
						</Routes>
					</div>
				</div>
			</Router>
			{/* <Footer /> */}
		</>
	);
}

export default App;
