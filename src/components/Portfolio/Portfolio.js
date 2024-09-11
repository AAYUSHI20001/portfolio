import React from 'react';
import './Portfolio.css'; 
import project1Image from '../../assets/project1.png';
import project2Image from '../../assets/project2.png';
import project3Image from '../../assets/project3.png';

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      title: 'Project One',
      description: 'Designing visually appealing with help of UX/UI using Figma.',
      image:  project1Image,
      link: 'https://example.com/project-one'
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'A responsive website built using HTML, CSS, and PHP with the Laravel framework.',
      image: project2Image,
      link: 'https://example.com/project-two'
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'A responsive portfolio developed with React.',
      image: project3Image,
      link: 'https://example.com/project-three'
    }
  ];
 
  return (
    <section className="portfolio-section">
      <h1 className="portfolio-title">My Portfolio</h1>
      <div className="portfolio-container">
        {portfolioItems.map(item => (
          <div className="portfolio-item" key={item.id}>
            <img src={item.image} alt={item.title} className="portfolio-image" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="portfolio-link">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

