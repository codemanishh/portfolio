import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Footer_Contact.css'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_v5scc1u', 'template_7gcyemk', form.current, 'eqtBYCIjQ840F9LKm')
      .then((result) => {
        console.log(result.text);
        alert("Message Sent Successfully")
        e.target.reset();
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
<div className="new-contact">
Contact Me
Get in touch
My inbox is always open. Whether you have a question or just want to say hello, I will try my best to get back to you!
      <form className='div1-contact' ref={form} onSubmit={sendEmail}>
        <label>Name</label>
          <input type="text" name="from_name" />
         <label>Email</label>
          <input type="email" name="message" />
          <label>Message</label>
          <textarea name="message" />

        <input type="submit" value="Say Hallo {TbHeartHandshake}"  />
      </form>
      </div>

  );
};

export default Contact