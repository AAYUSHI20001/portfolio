import React from 'react';
import resumePDF from '../../assets/resume.pdf';  
import './ResumeButton.css'; 
const ResumeButton = () => {
  return (
    <a href={resumePDF} className="btn resume-btn" target="_blank" rel="noopener noreferrer">
      My Resume
    </a>
  );
};

export default ResumeButton;
