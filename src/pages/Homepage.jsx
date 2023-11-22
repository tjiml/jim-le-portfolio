import React, { useState, useEffect } from "react";


import Navbar from "../components/Navbar";
import HomeBanner from "../components/HomeBanner";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import SkillsTitle from "../components/SkillsTitle";

import Information from "../components/Information";
import SendMessage from "../components/SendMessage";
import NameBanner from "../components/NameBanner";



export default function Homepage() {

    const [backToTop, setBackToTop] = useState(false);

    useEffect(() => {
            window.addEventListener("scroll", () => {
                if (window.scrollY > 500) {
                    setBackToTop(true);
                } else {
                    setBackToTop(false);
                }
            })
        }, [])

    function scrollUp() {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            })
        }

    return (
        <>
        <div className="page-container">
            <Navbar />

            {/* home section */}
            <div className="home-section">
                <HomeBanner />
                <AboutMe />
            </div>

            {/* projects section */}
            <div className="project-section" id="projects">
                <Projects />
            </div>

            {/* skills section */}
            <div className="skills-section" id="skills">
                <SkillsTitle />
            </div>

            {/* contact section */}
            <div className="contact-section" id="contact">
                <NameBanner />
                <Information />
                <SendMessage />
            </div>

            {backToTop && (
                    <button className="back-to-top-button" onClick={scrollUp}>BACK TO TOP <i className="bi bi-arrow-up-short"></i></button>
                )}

        </div>
        </>
    )
}