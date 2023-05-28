import React from 'react'
import img7 from './SlillCards/img/css.png'
import img8 from './SlillCards/img/reactjs.png'
import img9 from './SlillCards/img/js.png'
import './Footer.css'

const Footer = () => {
  return (
    <>
      <div className='footer-main'>
        <div className='footer-text'>
         <p> Made with ❤️ by  <span className='footer-text2'> Manish Kumar </span></p>
        </div>
        <div className='footer-images'>
          <img src={img7} style={{ width: '23px' }} alt="React js" />
          <img src={img8} style={{ width: '23px' }} alt="JS" />
          <img src={img9} style={{ width: '23px' }} alt="css3" />
        </div>
      </div>
    </>
  )
}

export default Footer