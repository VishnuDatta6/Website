import React from 'react'
import "./portfolio.css"
import {MdOutlineArrowForwardIos} from 'react-icons/md'
import {GoLinkExternal} from 'react-icons/go'
import AVTR1 from '../../assets/duck.jpg'
import AVTR2 from '../../assets/virtu-shield.jpg'
import AVTR3 from '../../assets/carevisor-covid-19.jpg'
import AVTR4 from '../../assets/insta.ly-app-icon.jpg'

// import Swiper core and required modules
import {Navigation, Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const data = [
  {
    avatar: AVTR1,
    info: 'Logo for an Apparal brand',
    required: 'Should be based on duck, and related to clothing'
  },
  {
    avatar: AVTR2,
    info: 'Logo for a Hand Sanitizer Product',
    required: 'Must be related to protection and should include Red Cross Symbol'
  },
  {
    avatar: AVTR3,
    info: 'App icon for covid helpline',
    required: 'Should relate to covid, easily remembered and relatable'
  },
  {
    avatar: AVTR4,
    info: 'App icon for instragram statistics app',
    required: 'Resembling with instagram and statistics'
  }
]

const portfolio = () => {
  return (
    <section id='portfolio'> 
    <h2>Portfolio</h2>
      <div className='Projects'>
         <strong>Projects  </strong> <MdOutlineArrowForwardIos/>
         <article className='Projects_content' >
          <h6>Tic-Tac-Toe Web App</h6>
          <p>Creating a Simple Web Application of Tic-Tac-Toe Game consisting outcome of game and navigation through the moves played throughout the game.</p>
          <a href='https://vishnudatta6.github.io/tic-tac-toe_app/'><GoLinkExternal/></a>
         </article>
      </div>
      <div className='Certifications'>
        <strong>Certifications  </strong> <MdOutlineArrowForwardIos/>
        <ul>
        <li> Introduction to Cloud Computing | Coursera <a href='https://coursera.org/verify/V7VCAHXE5CR6' target="_blank"><GoLinkExternal/></a></li>
        <li> Introduction to Web Development with HTML, CSS, JavaScript | Coursera <a href='https://coursera.org/verify/9BCJ5BHXQNYK' target="_blank"><GoLinkExternal/></a></li>
        <li> Developing Cloud Native Applications | Coursera <a href='https://coursera.org/verify/5VWA85HCZLFC' target="_blank"><GoLinkExternal/></a></li>
        <li> Getting Started with Git and GitHub | Coursera <a href='https://coursera.org/verify/8A95WSWZ2VU6' target="_blank"><GoLinkExternal/></a></li>
        <li> Developing Cloud Apps with Node.js and React | Coursera <a href='https://coursera.org/verify/YGE8843X8SJ7' target="_blank"><GoLinkExternal/></a></li>
        <li> Introduction to Containers w/ Docker, Kubernetes & OpenShift | Coursera <a href='https://coursera.org/verify/47ZC3BZF84MY' target="_blank"><GoLinkExternal/></a></li>
        <li> Building Modern UIs with React Router v6 | LinkedIn <a href='https://www.linkedin.com/learning/certificates/32a40231aca87f9d33452d43285357cfd51b9044e139189065e4567b71a0e709' target="_blank"><GoLinkExternal/></a></li>
        </ul>
      </div>
      <div className='Logos'>
        Logo Designs
        <Swiper className='Logo_content'
         // install Swiper modules
      modules={[Navigation,Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}>
          {
            data.map(({avatar, info, required},index) => {
              return (
                <SwiperSlide key={index} className='Logo'>
                  <div className='avatar'>
                    <img src={avatar}/>
                  </div>
                  <h5 className='Logo_info'>{info}</h5>
                  <small className='Logo_requirements'>Requirements: {required}</small>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
    </div>
    </section>
  )
}

export default portfolio