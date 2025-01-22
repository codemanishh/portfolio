import React, { Component } from 'react'
import "./Body.css";
import img4 from '../image/line.png'

import img6 from '../image/AILWING.png'
import img7 from '../image/job-logo.png'


export default class Experiance extends Component {
  render() {
    return (
      <>
       <div className='work' id='about'>
        <span>Working Experiance </span>
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
          <img className='line' src={img7} alt="newimg" />
        </div>
        {/* .....  cards  */}
        <div className="new-card" >
          <h2>KANTAR - Bangalore IN</h2>
          <h3>Software Engineer - 1 &nbsp;&nbsp;||&nbsp;&nbsp; July 2024 - Present </h3>
          
          <ul >
            <li style={{ listStyle: "circle" }}><bold>Tech Stacks -</bold>  MVC / C# / SQL / Razor Pages / ASP.NET / JavaScript / CSS / HTML / Python (api) </li>
            <li style={{ listStyle: "circle" }}>Boosted resource use by 30% with dynamic tracking and reporting.</li>
            <li style={{ listStyle: "circle" }}>Ensured error-free UI deployments via Azure pipelines.</li>
            <li style={{ listStyle: "circle" }}>Built APIs, Angular apps, and optimized Elasticsearch.</li>
          </ul>
        </div>
        {/* .....  cards  end  */}

        <div className='box-main'>
          <div className="box" style={{ background: 'white' }}></div>
        </div>
        {/* ..... image .....  */}
        <div className='box-main1'>
          <img className='line' src={img7} alt="newimg" />
        </div>

        <div className='box-main'>
          <div className="box" style={{ background: 'white' }}></div>
        </div>
        {/* .....  cards  */}
        <div className="new-card2" >
          <h2>INeuron.ai - Bangalore IN</h2>
          <h3>Frontend Developer - Intern &nbsp;&nbsp;||&nbsp;&nbsp; Aug 2023 - Nov 2023</h3>
          <li style={{ listStyle: "circle" }}><bold>Tech Stacks -</bold>ReactJs / JavaScript / CSS / HTML / API  </li>
<li style={{ listStyle: "circle" }}> Gained experience in software development, product management, and user experience design.</li>
<li style={{ listStyle: "circle" }}> Learned about the different stages of the software development lifecycle.</li>
<li style={{ listStyle: "circle" }}> Created a responsive front-end using HTML, CSS, and JavaScript</li>
        </div>
        {/* .....  cards  end  */}
        {/* ..... image .....  */}
        <div className='box-main1'>
          <img className='line' src={img6} alt="newimg" />
        </div>

      </div>
      </>
    )
  }
}
