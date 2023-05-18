import React from 'react'
import "./Body.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
const Body = () => {
  return (
    <div className='main-class'>

        <ul className="social-media-desktop-a">
          <li>
            <a
              href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
              target="_thapa">
              <FaFacebookSquare className="facebook logo-s" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/thapatechnical/"
              target="_thapa">
              <FaInstagramSquare className="instagram logo-s" />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
              target="_thapa">
              <FaYoutubeSquare className="youtube logo-s" />
            </a>
          </li>
        </ul>
    </div>
  )
}

export default Body

