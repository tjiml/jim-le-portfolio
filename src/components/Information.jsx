import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import AOS from "aos";
import 'aos/dist/aos.css';

export default function HomePersonalLinks() {

    useEffect(() => {
        AOS.init()
    }, [])

    function alertEmail() {
        alert('thejimle1@gmail.com')
    }

    function alertPhone() {
        alert('720 280 9087')
    }

    function alertResume() {
        alert('Opening resume')
    }

    return (
        <>

            <ul className="personal-links-row">

                <li onClick={alertEmail} className="email-link list-inline-item bi bi-envelope" data-aos="fade-in" data-aos-delay="1200" data-aos-duration="1500"></li>
                <li onClick={alertPhone} className="phone-link list-inline-item bi bi-telephone" data-aos="fade-in" data-aos-delay="1100" data-aos-duration="1500"></li>
                <a href="https://www.linkedin.com/in/jim-le-7a2712243/" target="_blank"><p className="linked-in-link list-inline-item bi bi-linkedin" data-aos="fade-in" data-aos-delay="1000" data-aos-duration="1500"></p></a>
                <a href="https://github.com/tjiml" target="_blank"><p className="github-link list-inline-item bi bi-github text-center" data-aos="fade-in" data-aos-delay="900" data-aos-duration="1500"></p></a>
                <Link to="/resume" onClick={alertResume}><p className="resume-link list-inline-item bi bi-person text-center" data-aos="fade-in" data-aos-delay="800" data-aos-duration="1500"></p></Link>

            </ul>
        </>
                  
    )
}