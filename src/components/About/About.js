import React from 'react';

import './About.css';
import bg from '../../assets/image1.png';
const About = () => {
  return (
    <div className="about">
  <div className="about-title">
      <h1>About Me</h1>

     </div>
     <div className="about-content">
      <div className="about-left">
      <img src={bg} alt="Profile" className="bg" />
      </div>
     <div className="about-right">
      <div className="about-para">
        <p>I am an experienced Frontend Developer with over a decode of profesional  expertise in the field.Throughout my carrer.I have had the privilege of collaborating with prestigious organizations,contributing to their success and growth.</p>

        
    <p>My passion for Frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
      </div>
      <div className="about-skills">
        <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"90%"}}/></div>
        <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}}/></div>
        <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}}/></div>
        </div>
     </div>
  </div>
  <div className="about-achivements">
    <div className="about-achievement">
     <h1>0</h1> 
     <p>YEARS OF EXPERIENCE</p>
    </div>
    <hr />
    <div className="about-achievement">
     <h1>0</h1> 
     <p>PROJECTS COMPLETED</p>
    </div>
    <hr />
    <div className="about-achievement">
     <h1>READY</h1> 
     <p>TO LEARN AND GROW</p>
    </div>
    <hr />
  </div>
     </div>
   
     
  );
}

export default About;
