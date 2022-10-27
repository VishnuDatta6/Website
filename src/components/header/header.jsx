import React from 'react'
import './header.css'
import ME from '../../assets/w copy.jpg'
import Headersocial from './headersocial.jsx'

const header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Vishnu Datta</h1>
        <h5 className="text-light">Web Developer</h5>

        <Headersocial />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header