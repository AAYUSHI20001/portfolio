import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import resumePDF from '../../assets/resume.pdf';  
import Portfolio from '../Portfolio/Portfolio';
import Services from '../Services/Services';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <div className="main-container">
      <section id="home" className="home-section">
        <div className="container text-container">
    <p className="purple-text">Hi, Myself</p>
            <h1>Aayushi, I'm a Frontend Developer<span className="purple">.</span></h1> 
            <div className="button-container">
            <Link to="/contact"className="btn connect-btn">Connect with Me</Link>
            <a href={resumePDF} className="btn resume-btn" target="_blank" rel="noopener noreferrer">My Resume</a>
          </div> 
           </div>
          
     </section>
     <div className="about">
  <div className="about-title">
      <h1>About Me</h1>

     </div>
     <div className="about-content">
      <div className="about-left">
      
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
    
      <Portfolio />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
