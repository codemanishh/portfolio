import React from 'react'
import "./Body.css";
import { FaGithub, FaLinkedin, FaInstagram, FaExternalLinkAlt, FaDatabase, FaCode, FaLayerGroup, FaCloud, FaTools } from "react-icons/fa";
import img1 from '../image/profile-pic.png'
import img2 from '../image/main-style-1.png'
import img4 from '../image/line.png'
import img5 from '../image/education.png'

import Cardd from './Projects'
import carddata from './ProjectsData.jsx'
import { Link } from "react-router-dom";
import Experiance from './Experiance.jsx';

const Body = () => {
  return (
    <>
      <div id="home" className='main-class'>
        <div className="parent">
          <div className="div1">
            <div className='name-one'>Hello I'm</div>
            <div className='name-two'>Manish Kumar</div>
            <div className='name-three'>Software Engineer @ Kantar Analytics India • Bengaluru</div>
            <p>Results-driven software engineer with 2+ years of experience in SQL, full-stack development, and data engineering. I build scalable solutions and automate data workflows with a strong focus on performance and reliability.</p>
            <div className='links'>
              <Link to="https://drive.google.com/drive/folders/1dbydsqXiwd_BwZzuLCFqsQiMs20ewgRa?usp=sharing" target='none'>
                <button>Resume</button>
              </Link>
              <Link to="https://topmate.io/manish_kumar47" target='none'>
                <button style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.9))',
                  color: '#7d32ff'
                }}>
                  Book a 1:1 call <FaExternalLinkAlt style={{ fontSize: '0.85rem' }} />
                </button>
              </Link>
            </div>
            <ul className="social-media-desktop-a">
              <li>
                <a href="https://github.com/codemanishh" target="_thapa">
                  <FaGithub className="GithubIcon logo-s" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/codemanishh" target="_thapa">
                  <FaLinkedin className="Telegram logo-s" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/codemanishh/" target="_thapa">
                  <FaInstagram className="instagram logo-s" />
                </a>
              </li>
            </ul>
          </div>
          <div className="div2"> <img className='profile-pic' src={img1} alt="profile-pic" />
          </div>
        </div>
      </div>

      <Experiance/>

      <div className='about-me' id='projects-header'>
        <span>Projects</span>
        <div><img className='line' src={img4} alt="newimg" />
        </div>
      </div>
      <div id='projects' className='project-all'>
        <div className='proj-new'>
          <Cardd details={carddata} />
        </div>
      </div>

      <div className='about-me' id='skills'>
        <span>Tech Stack</span>
        <div><img className='line' src={img4} alt="newimg" /></div>
      </div>

      <div className='tech-stacks-container'>
        <div className='tech-stacks'>
          <div className="tech-stack-card">
            <div className="tech-stack-header">
              <FaDatabase />
              <h3>Databases / Data Tech</h3>
            </div>
            <div className="tech-stack-tags">
              <span>SQL Server</span>
              <span>Oracle SQL</span>
              <span>T-SQL</span>
              <span>MySQL</span>
              <span>PostgreSQL</span>
            </div>
          </div>

          <div className="tech-stack-card">
            <div className="tech-stack-header">
              <FaCode />
              <h3>Programming Languages</h3>
            </div>
            <div className="tech-stack-tags">
              <span>SQL</span>
              <span>PL/SQL</span>
              <span>JavaScript</span>
              <span>C#</span>
              <span>Python</span>
              <span>HTML5</span>
              <span>CSS3</span>
            </div>
          </div>

          <div className="tech-stack-card">
            <div className="tech-stack-header">
              <FaLayerGroup />
              <h3>Frameworks & Libraries</h3>
            </div>
            <div className="tech-stack-tags">
              <span>ASP.NET</span>
              <span>ASP.NET MVC</span>
              <span>.NET Core</span>
              <span>Entity Framework</span>
              <span>Node.js</span>
              <span>Flask</span>
              <span>Bootstrap</span>
              <span>Tailwind CSS</span>
            </div>
          </div>

          <div className="tech-stack-card">
            <div className="tech-stack-header">
              <FaCloud />
              <h3>Cloud / APIs</h3>
            </div>
            <div className="tech-stack-tags">
              <span>Azure SQL Database</span>
              <span>Azure Data Factory</span>
              <span>Azure Blob Storage</span>
              <span>Azure Functions</span>
              <span>REST APIs</span>
            </div>
          </div>

          <div className="tech-stack-card">
            <div className="tech-stack-header">
              <FaTools />
              <h3>Tools & Methodologies</h3>
            </div>
            <div className="tech-stack-tags">
              <span>SSMS</span>
              <span>SSIS</span>
              <span>MySQL Workbench</span>
              <span>Git</span>
              <span>VS Code</span>
            </div>
          </div>
        </div>
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
          <h4>Software Engineer</h4>
          <p>I’m a software engineer with 2 years of experience building scalable data and web solutions in Bangalore, India. I specialize in SQL, PL/SQL, .NET MVC, Azure data services, and full-stack development. I enjoy solving business problems with clean architecture, automation, and reliable data pipelines.</p>
          <div className='links'>
            <Link to="https://drive.google.com/drive/folders/1dbydsqXiwd_BwZzuLCFqsQiMs20ewgRa?usp=sharing" target='none'>
              <button>Resume</button>
            </Link>
            <Link to="https://topmate.io/manish_kumar47" target='none'>
              <button style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.9))',
                color: '#7d32ff'
              }}>
                Book a 1:1 call <FaExternalLinkAlt style={{ fontSize: '0.85rem' }} />
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className='about-me' id='education'>
        <span>Education</span>
        <div><img className='line' src={img4} alt="newimg" />
        </div>
      </div>

      <div className="timeline-container">
        <div className="timeline-wrapper">
          <div className="timeline-item left">
            <div className="timeline-dot">
              <img src={img5} alt="education" />
            </div>
            <div className="timeline-card">
              <h2>Dayananda Sagar Academy of Technology & Management - Bangalore</h2>
              <h3>B.E. Information Science & Engineering | 2020 - 2024</h3>
              <ul>
                <li>Completed B.E. in Information Science & Engineering with CGPA 7.99/10.00.</li>
                <li>Built a strong foundation in software development, databases, web technologies, and problem solving.</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item right">
            <div className="timeline-dot">
              <img src={img5} alt="education" />
            </div>
            <div className="timeline-card">
              <h2>Rajkiya Inter College Sah Madhyamik Vidyalaya | BSEB</h2>
              <h3>Science stream in Higher Secondary Certificate (HSC) in India | 2017 - 2019</h3>
            </div>
          </div>
        </div>
      </div>

      <div className='about-me' id='trainings'>
        <span>Trainings</span>
        <div>
          <img className='line' src={img4} alt="newimg" />
        </div>
      </div>

      <div className="timeline-container">
        <div className="timeline-wrapper">
          <div className="timeline-item left">
            <div className="timeline-dot">
              <img src={img5} alt="training" />
            </div>
            <div className="timeline-card">
              <h2>IIT Kharagpur (NPTEL)</h2>
              <h3>Elite+Silver Certificate</h3>
              <ul>
                <li>Problem Solving</li>
                <li>C- programming</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item right">
            <div className="timeline-dot">
              <img src={img5} alt="training" />
            </div>
            <div className="timeline-card">
              <h2>PWSKILLS / INEURON </h2>
              <h3>Full Stack JavaScript Development</h3>
              <ul>
                <li>ReactJS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Body
