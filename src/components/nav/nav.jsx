import React from 'react'
import './nav.css'
import {TiHome} from 'react-icons/ti'
import {CgProfile} from 'react-icons/cg'
import {MdWork} from 'react-icons/md'
import {CgNotes} from 'react-icons/cg'
import {AiFillMessage} from 'react-icons/ai'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><TiHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><CgProfile/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><MdWork/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><CgNotes/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiFillMessage/></a>
    </nav>
  )
}

export default Nav