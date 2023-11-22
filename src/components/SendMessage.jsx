import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

import AOS from "aos";
import 'aos/dist/aos.css';

export default function SendMessage() {

    const [submit, setSubmit] = useState(true);

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      if (document.querySelector('.f-name').value === "" ||
            document.querySelector('.email').value === "" ||
            document.querySelector('.message').value === "") {
                document.querySelector('.error-msg').innerHTML = 'ALL INPUT FIELDS ARE REQUIRED';
                document.querySelector('.error-msg').style.color = 'red';
        } else if (!document.querySelector('.email').value.includes('@yahoo.com') && 
                   !document.querySelector('.email').value.includes('@gmail.com') &&
                   !document.querySelector('.email').value.includes('@hotmail.com')) {
                document.querySelector('.error-msg').innerHTML = 'ENTER A VALID EMAIL';
                document.querySelector('.error-msg').style.color = 'red';
        } else if (document.querySelector('.message').value.length < 10) {
                document.querySelector('.error-msg').innerHTML = 'MESSAGE MUST CONTAIN AT LEAST 10 CHARACTERS';
                document.querySelector('.error-msg').style.color = 'red';            
        } else {
            setSubmit(false)
            emailjs.sendForm('service_c1dikyg', 'template_sd622fr', form.current, '0ORv3mQLytrF5zxbh')
            .then((result) => {
                console.log(result.text);
                console.log("Your Message Has Been Sent!")
            }, (error) => {
                console.log(error.text);
            });
        }
    };

    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <>

        <div className="send-message-container" data-aos="fade-in" data-aos-delay="1300" data-aos-duration="1500">

            {submit ? (
                <form ref={form} onSubmit={sendEmail}>
                    <h1>SEND ME A MESSAGE</h1>
                        <p className="error-msg"></p>

                        <input type="text" className="f-name" name="user_name" placeholder="FULL NAME"/>
                        <br />
                        <input type="email" className="email" name="user_email" placeholder="EMAIL"/>
                        <br />
                        <textarea type="text" className="message" name="message" placeholder="SEND A MESSAGE..."/>
                        <br />
                        <button type="submit" value="Send">SEND</button>
                </form>
            ) : (
                <div>
                    <div className="sent-message-container">
                            <h2>THANK YOU FOR YOUR MESSAGE! <i className="bi bi-check"></i></h2>
                    </div>
                </div>
            )}
        </div>

        </>
    )
}