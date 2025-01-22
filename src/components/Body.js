import React from 'react'
import "./Body.css";
import { FaGithub, FaLinkedin, FaInstagram, FaExternalLinkAlt } from "react-icons/fa";
import img1 from '../image/profile-pic.png'
import img2 from '../image/main-style-1.png'
import img3 from '../image/NW.png'
import img4 from '../image/line.png'
import img5 from '../image/education.png'
import img6 from '../image/AILWING.png'

import Ocard from './SlillCards/O_Cards.jsx'
import O_carddata from './SlillCards/O_CardsData'
import Bcard from './SlillCards/B_Cards'
import B_carddata from './SlillCards/B_CardsData'
import Fcard from './SlillCards/F_Cards.jsx'
import F_carddata from './SlillCards/F_CardsData'
import Cardd from './Projects'
import carddata from './ProjectsData.jsx'
import { Link } from "react-router-dom";
import Experiance from './Experiance.jsx';

const Body = () => {
  return (
    <>
      <div id="home" className='main-class'>
        <ul className="social-media-desktop-a">
          <li>
            <a
              href="https://github.com/codemanishh"
              target="_thapa">
              <FaGithub className="GithubIcon logo-s" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/codemanishh"
              target="_thapa">
              <FaLinkedin className="Telegram logo-s" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/codemanishh/"
              target="_thapa">
              <FaInstagram className="instagram logo-s" />
            </a>
          </li>
        </ul>
        <div className="parent">
          <div className="div1">
            <div className='name-one'>Hello I'm</div>
            <div className='name-two'>Manish Kumar</div>
            <div className='name-three'>Software Engineer- 1 @KANTAR bangalore2</div>
            <p>I focus on developing user-friendly web applications that meet the client's requirements, with attention to detail, scalability, and performance.</p>
            <div className='links'> <Link to="https://drive.google.com/drive/folders/1dbydsqXiwd_BwZzuLCFqsQiMs20ewgRa?usp=sharing" target='none' ><button>Resume</button></Link>
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
          <h4>FullStack Developer</h4>
          <p>I am a FullStack developer based in Bangalore, India. I'm an Information Technology graduate from DSI, and my journey in web development began during my second year of college. I'm passionate about creating beautiful, functional, and user-friendly websites and applications, and I'm constantly pushing myself to learn and grow as a developer. Love building full-stack clones and side projects.</p>
          <div className='links'> <Link to="https://drive.google.com/drive/folders/1dbydsqXiwd_BwZzuLCFqsQiMs20ewgRa?usp=sharing" target='none' ><button>Resume</button></Link>
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
      {/* <div class="outterContainer">
        <div class="container">
          <Certificate />
        </div>
      </div> */}


      <div className='about-me' id='about'>
        <span>Tech Stack</span>
        <div><img className='line' src={img4} alt="newimg" /></div>
      </div>

      {/* ..............................    */}
      <div className='tech-stacks'>
        <div className='front-end'>
          <p>FrontEnd</p>
          <div className='font-end_1'>
            <Fcard details={F_carddata} />
          </div>
        </div>
        <div className='backend'>
          <p>Backend</p>
          <div className="backend_1">
            <Bcard details={B_carddata} />
          </div>
        </div>
        <div className='other-tech'>
          <p>Other Skills</p>
          <div className="other-tech_1">
            <Ocard details={O_carddata} />
          </div>
        </div>
      </div>
      {/* ...................   ................. */}
      <div className='about-me' id='about'>
        <span>Projects</span>
        <div><img className='line' src={img4} alt="newimg" />
        </div>
      </div>
      <div id='projects' className='project-all'>
        <div className='proj-new'>
          <Cardd details={carddata} />
        </div>
      </div>
      {/* ...................  EDUACTION --------------------------   */}
      <div className='about-me' id='about'>
        <span>Education</span>
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
        <div className="new-card" >
          <h2>Dayananda Sagar Institutions -Bangalore</h2>
          <h3>B.E. Information Technology | 2020 - 2024</h3>
          <ul >
            <li style={{ listStyle: "circle" }}>Completed Bachelor of Engineering course from Dayananda Sagar Institutions with CGPA (8.03)</li>
            <li style={{ listStyle: "circle" }}>Worked on web application development using HTML, CSS, and JavaScript, designing a database system using SQL</li>
            <li style={{ listStyle: "circle" }}>Worked on web application development using HTML, CSS, and JavaScript, designing a database system using SQL</li>
          </ul>
        </div>
        {/* .....  cards  end  */}
        <div className='box-main'>
          <div className="box" style={{ background: 'white' }}></div>
        </div>
        {/* ..... image .....  */}
        <div className='box-main1'>
          <img className='line' src={img5} alt="newimg" />
        </div>

        <div className='box-main'>
          <div className="box" style={{ background: 'white' }}></div>
        </div>
        {/* .....  cards  */}
        <div className="new-card2" >
          <h2>Rajkiya Inter College Sah Madhyamik Vidyalaya | BSEB</h2>
          <h3>Science stream in Higher Secondary Certificate (HSC) in India | 2017 - 2019</h3>
        </div>
        {/* .....   cards     end  */}
        {/* ....... image ........ */}
        <div className='box-main1'>
          <img className='line' src={img6} alt="newimg" />
        </div>
      </div>


      {/* ..........  E X P E R I A N C E   --------------------------   */}
      <div className='about-me' id='about'>
        <span>Tranings </span>
        <div>
          <img className='line' src={img4} alt="newimg" />
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
        <div className="new-card" >
          <h2>IIT Kharagpur (NPTEL)</h2>
          <h3>Elite+Silver Certificate</h3>
          <ul >
            <li style={{ listStyle: "circle" }}>Problem Solving</li>
            <li style={{ listStyle: "circle" }}>C- programming</li>
          </ul>
        </div>
        {/* .....  cards  end  */}

        <div className='box-main'>
          <div className="box" style={{ background: 'white' }}></div>
        </div>
        {/* ..... image .....  */}
        <div className='box-main1'>
          <img className='line' src={img5} alt="newimg" />
        </div>

        <div className='box-main'>
          <div className="box" style={{ background: 'white' }}></div>
        </div>
        {/* .....  cards  */}
        <div className="new-card2" >
          <h2>PWSKILLS / INEURON </h2>
          <h3>Full Stack JavaScript Developement</h3>
          <li>ReactJS</li>

        </div>
        {/* .....  cards  end  */}
        {/* ..... image .....  */}
        <div className='box-main1'>
          <img className='line' src={img6} alt="newimg" />
        </div>

      </div>
      {/* ...................   D O N E  ....................  E X P E R I A N C E   -----------   */}


  <Experiance/>



    </>
  )
}

export default Body

