import React, { useState } from "react";
import "./Header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import img1 from './SlillCards/img/nodejs.png';

const Header = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  // Smooth scrolling function
  const handleSmoothScroll = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <img src={img1} style={{ width: '30px' }} alt="" />
        </div>

        {/* 2nd menu part  */}
        <div className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
          <ul>
            <li>
              <Link to="#" onClick={() => handleSmoothScroll('home')}>Home</Link>
            </li>
            <li>
              <Link to="#" onClick={() => handleSmoothScroll('work')}>Work Experiance</Link>
            </li>
            <li>
              <Link to="#" onClick={() => handleSmoothScroll('projects')}>Projects</Link>
            </li>
            <li>
              <Link to="#" onClick={() => handleSmoothScroll('about')}>About me</Link>
            </li>
            <li>
              <Link to="#" onClick={() => handleSmoothScroll('contact1')}>Contact</Link>
            </li>
           
          </ul>
        </div>
        <div className="social-media">
          <div className="hamburger-menu">
            <Link to="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </Link>
          </div>
        </div>
      </nav>

      {/* ..................... NAV BAR COMPLETED   */}
    </>
  );
};
export default Header;
