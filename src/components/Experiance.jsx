import React, { Component } from 'react'
import "./Body.css";
import img4 from '../image/line.png'


export default class Experiance extends Component {
  render() {
    const API_KEY = "pk_NwK3F5Q-SjKCp6gfRQOF4A";

    return (
      <>
       <div className='about-me' id='work'>
        <span>Work Experience</span>
        <div>
          <img className='line' src={img4} alt="newimg" />
        </div>
      </div>

      <div className="timeline-container">
        <div className="timeline-wrapper">
          <div className="timeline-item left">
            <div className="timeline-dot">
              <img src={`https://img.logo.dev/kantar.com?token=${API_KEY}`} alt="Kantar logo" />
            </div>
            <div className="timeline-card">
              <h2>Kantar Analytics India - Bengaluru</h2>
              <h3>Software Engineer &nbsp;&nbsp;||&nbsp;&nbsp; July 2024 - Present</h3>
              <ul>
                <li><strong>Tech Stack -</strong> SQL Server, Oracle SQL, PL/SQL, ASP.NET MVC, Azure Data Factory, Azure Functions, Python, SSIS, REST APIs</li>
                <li>Built and optimized SQL queries, stored procedures, views, and schemas for reporting and business logic.</li>
                <li>Developed an automated ETL pipeline using Azure Data Factory, Azure Functions, and Python for analytics-ready data delivery.</li>
                <li>Enhanced a Governance Input Portal and Skill Management Platform with role-based access and reliable workflows.</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item right">
            <div className="timeline-dot">
              <img src={`https://img.logo.dev/ineuron.ai?token=${API_KEY}`} alt="INeuron.ai logo" />
            </div>
            <div className="timeline-card">
              <h2>INeuron.ai - Bangalore</h2>
              <h3>Frontend Developer Intern &nbsp;&nbsp;||&nbsp;&nbsp; Aug 2023 - Nov 2023</h3>
              <ul>
                <li><strong>Tech Stack -</strong> React.js, JavaScript, HTML, CSS, REST APIs</li>
                <li>Gained experience in the software development lifecycle, product thinking, and user experience design.</li>
                <li>Built a responsive front-end experience using modern web technologies.</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item left">
            <div className="timeline-dot">
              <img src={`https://img.logo.dev/persistent.com?token=${API_KEY}`} alt="Persistent Systems logo" />
            </div>
            <div className="timeline-card">
              <h2>Persistent Systems - Remote</h2>
              <h3>Martian Summer Internship program 2023 &nbsp;&nbsp;||&nbsp;&nbsp; Jun 2023 - Aug 2023</h3>
              <ul>
                <li><strong>Tech Stack -</strong> DSA, DBMS, Python, Linux</li>
                <li>Completed intensive training and practical assignments on Data Structures, Algorithms, and Core Computer Science concepts.</li>
                <li>Built coding proficiency in Python and Linux scripting for shell environments.</li>
                <li>Designed schemas and wrote queries using Database Management Systems (DBMS).</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </>
    )
  }
}
