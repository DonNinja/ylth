import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './styles/App.css';
import Landing from './components/landing';
import Header from './components/header';
import Projects from './components/projects';
import About from './components/about';
import Links from './components/links';
import { home, about, projects, links } from "./data/routes";

function App() {
    return (
        <>
            <Router>
                <Header />
                <div className='container'>
                    <Routes>
                        <Route path={home} element={<Landing />} />
                        <Route path={projects} element={<Projects />} />
                        <Route path={about} element={<About />} />
                        <Route path={links} element={<Links />} />
                    </Routes>
                </div>
            </Router>
        </>
    );
}

export default App;
