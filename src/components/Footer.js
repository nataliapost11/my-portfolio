import React from 'react';
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-icons">        
        <a target="_blank" rel="noreferrer" href="https://github.com/nataliapost11"> 
          <FontAwesomeIcon icon={faGithub} size='2x' /> 
        </a>    
        <a target="_blank" rel="noreferrer" href="http://linkedin.com" > 
          <FontAwesomeIcon icon={faLinkedin} size='2x' /> 
        </a>    
        <a target="_blank" rel="noreferrer" href="http://stackexchange.com" > 
          <FontAwesomeIcon icon={faStackOverflow} size='2x' /> 
        </a>  
      </div> 
      {/* Copyright © Natalia Post 2021 */}
     </footer>
  );
}

export default Footer;
