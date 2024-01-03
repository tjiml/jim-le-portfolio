import React, { useEffect } from "react";

import AOS from "aos";
import 'aos/dist/aos.css';

export default function ProjectDisplay() {

    function alertWebsite() {
        alert('Opening link to website');
    }

    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <>
            <div className="project-title-container" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1500">
                <h1>PROJECTS</h1>
                <p>Click or tap the icons to access the applications!</p>
            </div>

            <div className="projects-container">

                {/* bear creek nails project */}
                <div className="bc-nails-block" data-aos="fade-in" data-aos-delay="1000" data-aos-duration="1500">
                    <h4>BEAR CREEK NAILS</h4>
                    <a href="https://bearcreek-nails.onrender.com" target="_blank" onClick={alertWebsite}>
                        <h1 className="bi bi-pc-display-horizontal"></h1>
                    </a>
                </div>

                {/* interactive quiz project */}
                <div className="quiz-block" data-aos="fade-in" data-aos-delay="1200" data-aos-duration="1500">
                    <h4>TJL INTERACTIVE QUIZ</h4>
                    <a href="https://jim-react-quiz.onrender.com" target="_blank" onClick={alertWebsite}>
                        <h1 className="bi bi-question-square"></h1>
                    </a>
                </div>

                {/* boba zone project */}
                <div className="boba-block" data-aos="fade-in" data-aos-delay="1400" data-aos-duration="1500">
                    <h4>BOBA ZONE APP</h4>
                    <a href="https://boba-zone-app.onrender.com/" target="_blank" onClick={alertWebsite}>
                        <h1 className="bi bi-cup-straw"></h1>
                    </a>
                </div>

                {/* weather app*/}
                <div className="weather-block" data-aos="fade-in" data-aos-delay="1600" data-aos-duration="1500">
                    <h4>WEATHER APP</h4>
                    <a href="https://weather-app-rt8w.onrender.com/" target="_blank" onClick={alertWebsite}>
                        <h1 className="bi bi-thermometer-half"></h1>
                    </a>
                </div>

                {/* magic 8 ball app*/}
                <div className="magic-8-block" data-aos="fade-in" data-aos-delay="1800" data-aos-duration="1500">
                    <h4>MAGIC 8-BALL APP</h4>
                    <a href="https://magic-8-ball-app.onrender.com" target="_blank" onClick={alertWebsite}>
                        <h1 className="bi bi-8-circle"></h1>
                    </a>
                </div>

                {/* blockchain website app*/}
                <div className="blockchain-block" data-aos="fade-in" data-aos-delay="1800" data-aos-duration="1500">
                    <h4>BLOCKCHAIN TECHNOLOGY</h4>
                    <a href="https://blockchain-website.onrender.com/" target="_blank" onClick={alertWebsite}>
                        <h1 className="bi bi-pc-display-horizontal"></h1>
                    </a>
                </div>

                {/* gym app*/}
                <div className="gym-block" data-aos="fade-in" data-aos-delay="1800" data-aos-duration="1500">
                    <h4>GYM APPLICATION</h4>
                    <a href="https://gym-application-xg2r.onrender.com/" target="_blank" onClick={alertWebsite}>
                        <h1 className="bi bi-hammer"></h1>
                    </a>
                </div>


            </div>
        
        </>
    )
}