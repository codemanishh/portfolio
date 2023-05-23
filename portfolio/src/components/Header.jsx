import React, { useState } from "react";
import "./Header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
import img1 from './SlillCards/img/nodejs.png'

const Header = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
         <img src={img1} style={{width:'30px'}} alt="" />
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/" href="#home" >Home</NavLink>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#about" >About me</a>
            </li>
            <li>
              <NavLink to="/contact">contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="social-media">
          <div className="hamburger-menu">
            <Link to="#" onClick={() => setShowMediaIcons(!showMediaIcons)} >
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
