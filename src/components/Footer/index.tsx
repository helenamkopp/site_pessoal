import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import github from '../../assets/icons/github.svg';
import instagram from '../../assets/icons/instagram.svg';
import linkedin from '../../assets/icons/linkedin.svg';


function Footer() {
  return (
    <footer>
      <div className="author">
        <div className="social-media">
          <a href="https://www.linkedin.com/in/helena-meyer-kopp/" type="button">
            <img className="linkedin" src={linkedin} alt="LinkedIn" />
          </a>

          <a href="https://github.com/helenamkopp" type="button">
            <img className="github" src={github} alt="Github" />
          </a>

          <a href="https://www.instagram.com/_helenameyer/?hl=pt-br" type="button">
            <img className="instagram" src={instagram} alt="Instagram" />
          </a>
        </div>
        <p>Desenvolvido por Helena Meyer - 2020 </p>
      </div>
    </footer>
  );
}

export default Footer;