import React, { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';


export default function HomeAboutMe() {

    useEffect(() => {
        AOS.init()
    }, [])



    return (
    
        <>

        <div className="about-me-container" data-aos="zoom-in" data-aos-delay="1500" data-aos-duration="1500">
            <p>Driven by a deep fascination for blending design and technology, I am eager to embark on the path of becoming a front-end developer, aspiring to shape digital landscapes and create visually stunning and user-centric web experiences.</p>
            <a href="#contact">
                <button>CONTACT ME</button>
            </a>
        </div>

        </>
    )
}