import React from 'react'
import './About.css'
import {MdOutlineArrowForwardIos} from 'react-icons/md'
import {SiHtml5} from 'react-icons/si'
import {IoLogoCss3} from 'react-icons/io'
import {TbBrandJavascript} from 'react-icons/tb'
import {DiNodejs} from 'react-icons/di'
import {GrReactjs} from 'react-icons/gr'
import {AiOutlineConsoleSql} from 'react-icons/ai'
import {SiKubernetes} from 'react-icons/si'
import {FaPython} from 'react-icons/fa'
import {SiAdobeillustrator} from 'react-icons/si'

function ShowandHide(a) {
  var x = document.getElementById(a);
  if (x.style.display === 'none') {
      x.style.display = 'block';
  } else {
      x.style.display = 'none';
  }
}

const About = () => {
  return (
    <section id='about'>
    <h5>Get to know</h5>
    <h2>About Me</h2>
    <button className='RHL' onClick={()=>ShowandHide('RHL_content')}>
      <strong>Career Objective   </strong> <MdOutlineArrowForwardIos/>
    <div className='RHL_content' id='RHL_content'>
      To work in learning and challenging environment, utilizing my skill and knowledge to the best of my
       abilities and contribute positively to my personal growth as well as growth of the organization.
    </div>
    </button>
    <button className='Psummary' onClick= {()=>ShowandHide('Psummary_content')}>
      <strong>Professional Summary   </strong> <MdOutlineArrowForwardIos/> <br/>
      <div className='Psummary_content' id='Psummary_content'>
        <ul>
        <li>Having 1.9 years of experience in web development using HTML5, CSS3, JavaScript and React in Tata Elxsi.</li>
        <li>Experience in writing simple SQL queries.</li>
        <li>Proficient in Adobe Illustrator.</li>
        <li>Good knowledge in SDLC and server-side programming with Node.js</li>
        </ul>
      </div>
    </button>
    <button className='Tskills' onClick={()=>ShowandHide('Tskills_content')}>
      <strong>Technical Skills   </strong> <MdOutlineArrowForwardIos/>
      <div className='Tskills_content' id='Tskills_content'>
         <article><big><SiHtml5/></big> <small>  HTML5</small></article>  
         <article><big><IoLogoCss3/></big><small>  CSS3</small> </article>
         <article><big><TbBrandJavascript/></big><small>  JavaScript</small> </article>  
         <article><big><DiNodejs/></big><small>  Nodejs</small> </article>  
         <article><big><GrReactjs/></big><small>  React</small></article>
         <article><big><AiOutlineConsoleSql/></big><small>  SQL</small> </article> 
         <article><big> <SiKubernetes/></big><small>  Kubernetes</small></article>
         <article><big><FaPython/></big><small>  Python</small></article>
         <article><big><SiAdobeillustrator/></big><small>  Adobe Illustrater</small></article>
      </div>
    </button>
    <button className='Education' onClick={()=>ShowandHide('Education_content')}>
      <strong>Education   </strong> <MdOutlineArrowForwardIos/>
      <div className='Education_content' id='Education_content'>
        <ul>
          <li>Bachelor of Technology in Mechanical Engineering from JNTUA College of Engineering, Anantapur with 8.05 CGPA.</li>
          <li>12th with an aggregate of 97.3 % (BIEAP).</li>
          <li>10th with a CGPA of 9.5 (BSEAP).</li>
        </ul>
      </div>
    </button>
    </section>
  )
}

export default About