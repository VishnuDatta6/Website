import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jj0v5yi', 'template_rax1l97', form.current, 'uEdZXafpF_PCP4VcK')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='contact_content'>
        <div className='contact_options'>
           <article className='contact_option'>
            <MdOutlineEmail className='contact_option_icon'/>
            <h4>Email</h4>
            <h5>vishnudatta06@gmail.com</h5>
            <a href='mailto:vishnudatta06@gmail.com'>Send a message</a>
           </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>    
    </section>
  )
}

export default Contact