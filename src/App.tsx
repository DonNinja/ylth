import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './styles/App.css';
import Landing from './components/landing';
import Header from './components/header';
import Projects from './components/projects';
import About from './components/about';

function App() {
    return (
        <>
            <Router>
            <Header />
                <Routes>
                    <Route path='/' element={<Landing />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/about' element={<About />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
