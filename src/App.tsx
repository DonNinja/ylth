import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Landing from './components/landing';
import Header from './components/header';
import Projects from './components/projects';


function App() {
    return (
        <>
            <Router>
            <Header />
                <Routes>
                    <Route path='/' element={<Landing />} />
                    <Route path='/projects' element={<Projects />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
