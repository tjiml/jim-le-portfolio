import React, { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

export default function HomeBanner() {

    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <>
            <div className="homebanner-container" data-aos="zoom-in" data-aos-delay="500" data-aos-duration="1500">
                <h1>JIM LE</h1>
                <p>FRONT END DEVELOPER</p>
            </div>
        </>
    )
}