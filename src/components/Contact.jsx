import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'
import img1 from '../image/contact.png'
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
    <div id='contact1' className="new-contact">
      <div className='contact1'>
        <h1 style={{ fontSize: '42px' }}> Contact Me</h1>
        <h3 style={{ fontSize: '25px', color: 'rgb(211 152 193)' }}>Get in touch</h3>
        <h4 style={{ fontSize: '13px', color: " #d12222" }}>
          My inbox is always open. Whether you have a question or just want to say hello, I will try my best to get back to you!
        </h4>
      </div>
      <div className="main-container">
        <div className='contact2'>
          <img src={img1} alt="connect" style={{ width: '50%' }} />
        </div>
        <div className='contact3'>
          <form className='div1-contact' ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="from_name" required />
            <label>Email</label>
            <input type="email" name="message" required />
            <label>Message</label>
            <textarea name="message" required />
            <input type="submit" value="Send"  />
          </form>
        </div>
      </div>



    </div>

  );
};

export default Contact