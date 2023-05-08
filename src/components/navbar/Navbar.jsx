import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import logo from "../../assets/logo.svg";

const Menu = () => {
    return (
        <nav>
            <ul>
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#wgpt4">What is GPT?</a>
                </li>
                <li>
                    <a href="#possibility">Open AI</a>
                </li>
                <li>
                    <a href="#features">Case Studies</a>
                </li>
                <li>
                    <a href="#blog">Library</a>
                </li>
            </ul>
        </nav>
    );
};

export default function Navbar() {
    const [toggleMenu, setToggleMenu] = useState();
    return (
        <div className="gpt__navbar">
            <div className="gpt__navbar-links">
                <div className="gpt__navbar-links_logo">
                    <img src={logo} alt="logo-gpt4" />
                </div>
                <div className="gpt__navbar-links_container">
                    <Menu />
                </div>
                <div className="gpt__navbar-sign">
                    <p>Sign in</p>
                    <button type="button">Sign up</button>
                </div>
                <div className="gpt__navbar-menu">
                    {toggleMenu ? (
                        <RiCloseLine
                            color="#fff"
                            size={27}
                            onClick={() => setToggleMenu(false)}
                        />
                    ) : (
                        <RiMenu3Line
                            color="#fff"
                            size={27}
                            onClick={() => setToggleMenu(true)}
                        />
                    )}
                    {toggleMenu && (
                        <div className="gpt__navbar-menu_container scale-up-right">
                            <Menu />
                            <div className="gpt__navbar-sign gpt__navbar-mobile_sign">
                                <p>Sign in</p>
                                <button type="button">Sign up</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
