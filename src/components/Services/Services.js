import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faLaptopCode, faMobileAlt, faPalette } from '@fortawesome/free-solid-svg-icons';
import './Services.css';

const Services = () => {
  return(
      <div className='services'>
        <div className="services-title">
          <h1>My Services</h1>
          </div>
       <div className='services-container'>
        {/* Service 1: Web Development */}
        <div className='service-card'>
          <FontAwesomeIcon icon={faCode} size='3x' className='service-icon' />
          <h3>Web Development</h3>
          <p>
            Creating responsive and dynamic websites using modern technologies like
            HTML, CSS, JavaScript, and React.
          </p>
        </div>

        {/* Service 2: Responsive Design */}
        <div className='service-card'>
          <FontAwesomeIcon icon={faMobileAlt} size='3x' className='service-icon' />
          <h3>Responsive Design</h3>
          <p>
            Ensuring your website works seamlessly across different devices, including
            mobile, tablets, and desktops.
          </p>
        </div>

        {/* Service 3: UI/UX Design */}
        <div className='service-card'>
          <FontAwesomeIcon icon={faPalette} size='3x' className='service-icon' />
          <h3>UI/UX Design</h3>
          <p>
            Designing visually appealing and user-friendly interfaces to provide the best
            user experience.
          </p>
        </div>

        {/* Service 4: JavaScript Frameworks */}
        <div className='service-card'>
          <FontAwesomeIcon icon={faLaptopCode} size='3x' className='service-icon' />
          <h3>JavaScript Frameworks</h3>
          <p>
            Proficiency in modern JavaScript frameworks like React.js to build efficient
            and scalable web applications.
          </p>
        </div>
      </div>
    </div>
 
     
          
 );
};

export default Services;
