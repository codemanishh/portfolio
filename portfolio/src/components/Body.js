import React from 'react'
import "./Body.css";
import { FaGithub, FaInstagram, FaYoutube, FaExternalLinkAlt } from "react-icons/fa";
import img1 from '../image/profile-pic.png'
import img2 from '../image/main-style-1.png'
import img3 from '../image/NW.png'
import img4 from '../image/line.png'
import img5 from '../image/education.png'
import Ocard from './SlillCards/O_Cards.jsx'
import O_carddata from './SlillCards/O_CardsData'
import Bcard from './SlillCards/B_Cards'
import B_carddata from './SlillCards/B_CardsData'
import Fcard from './SlillCards/F_Cards.jsx'
import F_carddata from './SlillCards/F_CardsData'
import Cardd from './Projects'
import carddata from './ProjectsData.jsx'


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
            <p>I focus on developing user-friendly web applications that meet the client's requirements, with attention to detail, scalability, and performance.</p>
            <div className='links'> <Link to="https://www.canva.com/design/DAFUqnQ8La4/7sCFNB12fpyKZE6ASxkSOQ/edit?utm_content=DAFUqnQ8La4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target='none' ><button>Resume</button></Link>
              <Link to="https://topmate.io/manish_kumar47" target='none' ><button style={
                {
                  backgroundColor: 'white',
                  color: 'rgb(109 40 217)'
                }
              }>Book a 1:1 call <FaExternalLinkAlt /></button></Link>
            </div>
          </div>
          <div className="div2"> <img className='profile-pic' src={img1} alt="profile-pic" />
          </div>
        </div>
      </div>
      {/* ...............   */}
      <div className='about-me-above'>
        <img className='boy-1' src={img3} alt="nre" />
      </div>
      <div className='about-me' id='about'>
        <span>About Me</span>
        <div><img className='line' src={img4} alt="newimg" /></div>
      </div>
      <div className="photo-1">
        <div className="about-me1">
          <img className='img-logo' src={img2} alt="logo-array" />
        </div>
        <div className="about-me2">
          <h2>Manish Kumar</h2>
          <h4>FrontEnd Developer</h4>
          <p>I am a FrontEnd developer based in Bangalore, India. I'm an Information Technology undergraduate from DSI, and my journey in web development began during my second year of college. I'm passionate about creating beautiful, functional, and user-friendly websites and applications, and I'm constantly pushing myself to learn and grow as a developer. Love building full-stack clones and side projects.</p>
          <div className='links'> <Link to="https://www.canva.com/design/DAFUqnQ8La4/7sCFNB12fpyKZE6ASxkSOQ/edit?utm_content=DAFUqnQ8La4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target='none' ><button>Resume</button></Link>
            <Link to="https://topmate.io/manish_kumar47" target='none' ><button style={
              {
                backgroundColor: 'white',
                color: 'rgb(109 40 217)'
              }
            }>Book a 1:1 call <FaExternalLinkAlt /></button></Link>
          </div>

          {/* topmate.io/manish_kumar47?utm_source=topmate&utm_medium=popup&utm_campaign=Crest */}
        </div>
      </div>



      <div className='about-me' id='about'>
        <span>Tech Stack</span>
        <div><img className='line' src={img4} alt="newimg" /></div>
      </div>


      <div className='tech-stacks'>
        <div className='front-end'>
          <p>FrontEnd</p>
          <Fcard details={F_carddata} />
        </div>
        <div className='backend'>
          <p>Backend</p>
          <Bcard details={B_carddata} />
        </div>
        <div className='other-tech'>
          <p>Other Skills</p>
          <Ocard details={O_carddata} />
        </div>
      </div>

      <div className='about-me' id='about'>
        <span>Projects</span>
        <div><img className='line' src={img4} alt="newimg" />
        </div>
      </div>
      <div id='projects' className='project-all'>
        <Cardd details={carddata} />
        <Cardd details={carddata} />
        <Cardd details={carddata} />
        <Cardd details={carddata} />
        <Cardd details={carddata} />
        <Cardd details={carddata} />
        <Cardd details={carddata} />
        <Cardd details={carddata} />
        <Cardd details={carddata} />
        <Cardd details={carddata} />
      </div>

      <div className='about-me' id='about'>
        <span>Experience</span>
        <div><img className='line' src={img4} alt="newimg" />
        </div>
      </div>



      <div className='parenttoall'>
        <div className='box-main'>
          <div className="box" style={{ background: 'white' }}></div>
        </div>
        {/* ..... image .....  */}
        <div className='box-main1'>
          <img className='line' src={img5} alt="newimg" />
        </div>
        {/* .....  cards  */}
        <div className="card new-card" style={{width: '18rem'}}>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="/" className="card-link">Card link</a>
            <a href="/" className="card-link">Another link</a>
          </div>
        </div>
        {/* .....  cards ends  */}

        <div className='box-main'>
          <div className="box" style={{ background: 'white' }}></div>
        </div>

      </div>

    </>
  )
}

export default Body

