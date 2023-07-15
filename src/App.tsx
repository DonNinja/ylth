import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './styles/App.css';
import Landing from './components/landing';
import Header from './components/header';
import Projects from './components/projects';
import About from './components/about';
import Mines from './components/mines';
import { home, about, projects, mines } from "./data/routes";
import Footer from "./components/footer";

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
                        <Route path={mines} element={<Mines />} />
                    </Routes>
                </div>
            </Router>
            <Footer />
        </>
    );
}

export default App;
