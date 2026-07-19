import React from 'react';
import './Contact.css'
import img1 from '../image/contact.png'

const Contact = () => {
  return (
    <div id='contact1' className="new-contact">
      <div className='contact1'>
        <h1>Contact Me</h1>
        <h3>Get in touch</h3>
        <h4>
          My inbox is always open. Whether you have a question or just want to say hello, email me directly and I’ll respond quickly.
        </h4>
      </div>
      <div className="main-container">
        <div className='contact2'>
          <img src={img1} alt="connect" style={{ width: '50%' }} />
        </div>
        <div className='contact3'>
          <div className='contact-link-box'>
            <p style={{ marginBottom: '14px', fontSize: '18px', color: '#ffffff' }}>
              Send a message directly to:
            </p>
            <a className='contact-email' href="mailto:devwork.mkr@gmail.com" target="_blank" rel="noreferrer">
              devwork.mkr@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact
