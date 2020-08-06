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
          <button type="button">
            <img className="linkedin" src={linkedin} alt="LinkedIn" />
          </button>

          <button type="button">
            <img className="github" src={github} alt="Github" />
          </button>

          <button type="button">
            <img className="instagram" src={instagram} alt="Instagram" />
          </button>
        </div>
        <p>Desenvolvido por Helena Meyer - 2020 </p>
      </div>
    </footer>
  );
}

export default Footer;