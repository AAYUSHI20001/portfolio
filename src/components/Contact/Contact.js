import React ,{useRef}from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Contact.css';
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_6q4jvhi', 'template_zibmuw9', form.current, 
         'nAzakj6cM4lQx2B8wLa2p')
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

      
  };
  return (
  <div className='contact'>
    <div className='contact-title'>
      <h1>Get in touch</h1>
    
    </div>
    <div className="contact-section">
      <div classname="contact-left">
        <h1>Let's talk</h1>
    <p>I'm currently available to take on new projects, so feel free to send me anything that you want to work on me. You can contact anytime.</p>
    <div className="contact-details">
      <li className="contact-detail">
      <i className="fas fa-envelope"></i>
      <p>aayushinanagwal@gmail.com</p>
      </li>
      <li className="contact-detail">
      <i className="fas fa-map-marker-alt"></i>
      <p>Jaipur,Rajasthan</p>
      </li>
     <li className="contact-detail">
     <i className="fas fa-phone"></i>
       <p>9352249469</p>
      </li>
  </div>
  </div>
        <form className="contact-right">
          <form className='contactForm' ref={form} onSubmit={sendEmail}>
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder='Enter your name' name=' your name' />
          <label htmlFor="">Your email</label>
          <input type="email" placeholder='Enter your email' name=' your email' />
          <label htmlFor="">Write your message here</label>
        <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
         <button  type='submit' className="contact-submit">Submit now</button>
         </form>
         </form>
      </div>
  </div>
  );
};

export default Contact;
