import React from "react";
import { Link } from "react-router-dom";
import './Header.css'
const Header = () => {
    return (
        <>

            <div className='nav-items'>
                <ul className="snip1226">
                    <Link to="/">
                        <li className='nav-items current' data-hover="Home">Home</li>
                    </Link>
                    <Link to="./Projects">
                        <li className='nav-items' data-hover="Products">Projects</li>
                    </Link>
                    <Link to="/about">
                        <li className='nav-items' data-hover="About Us">About me</li>
                    </Link>
                    <Link to="/contact">
                        <li className='nav-items' data-hover="Contact">Contact</li>
                    </Link>
                </ul>
            </div>


            {/* <ul class="snip1226">
  <li class="current"><a href="/" data-hover="Home">Home</a></li>
  <li><a href="/" data-hover="About Us">About Us</a></li>
  <li><a href="/" data-hover="Blog">Blog</a></li>
  <li><a href="/" data-hover="Services">Services</a></li>
  <li><a href="/" data-hover="Products">Products</a></li>
  <li><a href="/" data-hover="Contact">Contact</a></li>
</ul> */}
        </>
    );
};
export default Header;