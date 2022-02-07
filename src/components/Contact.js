import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { StyledContact } from './styles/StyledContact.styled';


const Contact = () => {

    const form = useRef();


    const sendEmail = (e) => {


        e.preventDefault();

        emailjs.sendForm('service_2bjvieg', 'template_m7dswm7', form.current, 'user_PWZWIR81JJ518kEw4WF61')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <section id="4" className="vh-100">
            <StyledContact>
            <h1>Contact</h1>
            <form ref={form} onSubmit={sendEmail}>
                <div className="form-group">
                    <label for="exampleFormControlInput1">Name</label>
                    <input className="form-control" id="exampleFormControlInput1" name="name" placeholder="name..." />
                </div>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Email</label>
                    <input type="email" name="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Message</label>
                    <textarea class="form-control" name="message" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <input type="submit" value="Send" />
            </form>
            </StyledContact>
        </section>
    )
}

export default Contact;