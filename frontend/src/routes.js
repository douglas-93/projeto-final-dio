import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './pages/Contact';
import Home from './pages/Home';

const Paths = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact = {true} element={<Home />} />
                <Route path="/contact" exact = {true} element={<Contact />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Paths;