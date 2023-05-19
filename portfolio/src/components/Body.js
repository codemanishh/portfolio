import React from 'react'
import "./Body.css";
import { FaGithub, FaInstagram, FaYoutube, } from "react-icons/fa";
import img1 from '../image/profile-pic.png'
import img2 from '../image/main-style-1.png'
import { Link } from "react-router-dom";

const Body = () => {
  return (
    <>
      <div className='main-class'>
        <ul className="social-media-desktop-a">
          <li>
            <a
              href="https://github.com/codemanishh"
              target="_thapa">
              <FaGithub className="facebook logo-s" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/language__c/"
              target="_thapa">
              <FaInstagram className="instagram logo-s" />
            </a>
          </li>
          <li>
            <a
              href="https://youtu.be/A4e99gcFcPY"
              target="_thapa">
              <FaYoutube className="youtube logo-s" />
            </a>
          </li>
        </ul>
        <div className="parent">
          <div className="div1">
            <div className='name-one'>Hello I'm</div>
            <div className='name-two'>Manish Kumar</div>
            <div className='name-three'>FrontEnd Developer</div>
          </div>
          <div className="div2"> <img className='profile-pic' src={img1} alt="profile-pic" />
          </div>
        </div>
      </div>
      {/* ...............   */}
      <div className='about-me'>
        <p>About Me</p>
      </div>
      <div className="photo-1">
        <div className="about-me1">
          <img className='img-logo' src={img2} alt="logo-array" />
        </div>
        <div className="about-me2">
          <h2>Manish Kumar</h2>
          <h4>FrontEnd Developer</h4>
          <p>I am a FrontEnd developer based in Bangalore, India. I'm an Information Technology undergraduate from DSI, and my journey in web development began during my second year of college. I'm passionate about creating beautiful, functional, and user-friendly websites and applications, and I'm constantly pushing myself to learn and grow as a developer. Love building full-stack clones and side projects.</p>
          <Link  to="https://www.canva.com/design/DAFUqnQ8La4/7sCFNB12fpyKZE6ASxkSOQ/edit?utm_content=DAFUqnQ8La4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target='none' ><button>Go to Google</button></Link>

        </div>
      </div>

    </>
  )
}

export default Body

