import React, { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

export default function SkillsTopBox() {

    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <>
            <div className="skills-and-experience-container">

                <div className="skills-container" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1500">
                    <h1>SKILLS</h1>
                    <p>My experiences include languages in <span>HTML</span>, <span>CSS</span>, <span>JavsScript</span>, and <span>Python</span>. My projects are created using frameworks in <span>Bootstrap</span> and <span>React.js</span>, and deployed using <span>Github</span> and <span>Render</span>.</p>

                    <div className="skills" data-aos="zoom-in" data-aos-delay="600" data-aos-duration="1500">

                        <div className="html-container">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/800px-HTML5_Badge.svg.png" 
                            className="html-logo"/>
                        </div>

                        <div className="css-container">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" 
                            className="css-logo"/>
                        </div>

                        <div className="js-container">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" 
                            className="js-logo"/>
                        </div>

                        <div className="python-container">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png" 
                            className="python-logo"/>
                        </div>

                        <div className="bootstrap-container">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png" 
                            className="bootstrap-logo"/>
                        </div>

                        <div className="react-container">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" 
                            className="react-logo"/>
                        </div>

                        <div className="github-container">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png" 
                            className="github-logo"/>
                        </div>

                        <div className="render-container">
                            <img src="https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_477db83f729d63210139ec7cd29c1351/render-render.png" 
                            className="render-logo"/>
                        </div>


                    </div>

                </div>

                <div className="experience-container" data-aos="zoom-in" data-aos-delay="1000" data-aos-duration="1500">

                    <h1>EXPERIENCE</h1>

                    <div className="experience">

                        <div className="work-1-container" data-aos="zoom-in" data-aos-delay="1200" data-aos-duration="1500">
                            <h4>BOBA ZONE ASSISTANT MANAGER <i className="bi bi-cup-straw"></i></h4>
                                <ul>
                                    <li>Responded to customer inquiries with utmost professionalism and efficiency.</li>
                                    <li>Maintained high customer satisfaction rates.</li>
                                    <li>Created long-lasting customer relationships, resulting in increased customer loyalty.</li>
                                </ul>
                        </div>

                        <div className="work-2-container" data-aos="zoom-in" data-aos-delay="1400" data-aos-duration="1500">
                            <h4>PHARMACY TECHNICIAN <i className="bi bi-prescription"></i></h4>
                                <ul>
                                    <li>Addressed an average of 50 complex inquiries and resolving issues regarding insurance and medication concerns.</li>
                                    <li>Displayed continuous technical guidance tailored to the specific needs of pharmacy staff.</li>
                                    <li>Demonstrated data entry to reduce dispension errors.</li>
                                </ul>
                        </div>

                        <div className="work-3-container" data-aos="zoom-in" data-aos-delay="1600" data-aos-duration="1500">
                            <h4>SALES ASSOCIATE <i className="bi bi-cart-check"></i></h4>
                                <ul>
                                    <li>Spearheaded proactive sales strategies, surpassing store target goals.</li>
                                    <li>Demonstrated product expertise. Promoted higher-tier services through credit card sign-ups, enhancing customer loyalty.</li>
                                </ul>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}