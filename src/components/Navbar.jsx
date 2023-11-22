
import React, { useState } from "react";

export default function Navbar() {
    const [click, setClick] = useState(false);
    
    function handleClick() {
        setClick(!click);
    }

    function closeMobileMenu() {
        setClick(false);
    }


    return (
        <>
        <nav className="nav-container">

            <div className="jim-logo">
                <h3>JL Portfolio</h3>
            </div>

            <div className="menu-icon" onClick={handleClick}>
                <i className="bi bi-list"></i>
            </div>

            <ul className={click ? "nav-menu active" : "nav-menu"}>

                <li className="x-nav list-inline-item" onClick={closeMobileMenu}><i className="bi bi-x-lg"></i></li>
                <li className="list-inline-item" onClick={closeMobileMenu}><a href="#home">HOME</a></li>
                <li className="list-inline-item" onClick={closeMobileMenu}><a href="#projects">PROJECTS</a></li>
                <li className="list-inline-item" onClick={closeMobileMenu}><a href="#skills">SKILLS</a></li>
                <li className="list-inline-item" onClick={closeMobileMenu}><a href="#contact">CONTACT</a></li>
            
            </ul>

        </nav>
        </>
    )
}