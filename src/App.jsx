import React from "react";
import "./App.css";
import {
    Header,
    Footer,
    Blog,
    Features,
    Possibility,
    WhatGPT,
} from "./containers";
import { CTA, Brand, Navbar } from "./components";

const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
        </div>
    );
};

export default App;
