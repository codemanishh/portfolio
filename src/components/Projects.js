import React, { useState } from 'react';
import './Projects.css';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";

const Projects = (props) => {
  const [visibleCount, setVisibleCount] = useState(4);

  const handleClick = () => {
    setVisibleCount(prevCount => prevCount + 4);
  };

  return (
    <div>
      <div className='proj-flex'>
        {props.details.slice(0, visibleCount).map((value, index) => (
          <div className="card" style={{ backgroundImage: `url(${value.img})` }} key={index}>
            <div className="card-info">
              <div className="card-title">{value.title}</div>
              {/* <div className="card-subtitle">{value.about}</div> */}
            </div>
            <ul className="card-social">
              <li className="card-social__item">
                <a href={value.githublink} target="_blank" rel="noreferrer">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <FaGithub />
                  </svg>
                </a>
              </li>
              <li className="card-social__item">
                <a href={value.linkedinlink} target="_blank" rel="noreferrer">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <FaLinkedin />
                  </svg>
                </a>
              </li>
              <li className="card-social__item">
                <a href={value.livelink} target="_blank" rel="noreferrer">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <SiNetlify />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        ))}
      </div>
      {visibleCount < props.details.length && (
        <button onClick={handleClick} className="load-more-button new-new">
          Explore more
        </button>
      )}
    </div>
  );
};

export default Projects;
