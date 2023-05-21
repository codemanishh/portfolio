import React from 'react'
import './Projects.css'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";

const Projects = (props) => {
  return (
    <div>
       {props.details.map((value,index)=>(
      <div className="card" style={{ backgroundImage: `url(${value.img})` }} key={index}>
        <div className="card-info">
          
          <div className="card-title">{value.title}</div>
          <div className="card-subtitle">{value.about}</div>
        </div>

        
        <ul className="card-social">
          <li className="card-social__item">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
             <FaGithub/>
            </svg></li>
          <li className="card-social__item">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
             <FaLinkedin/>
            </svg></li>
          <li className="card-social__item">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <SiNetlify/>
            </svg>
          </li>
        </ul>
      </div>
       ))}
    </div>
  )
}

export default Projects