import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

import logo from '../../assets/icons/logohm.svg';
import menu from '../../assets/icons/menu.svg';



function PageHeader() {
  return (
    <header className="page-header">
      <div className="header-content">
        <Link to="/">
          <img className="logo" src={logo} alt="Helena Meyer" />
        </Link>

        <button type="button">
          <img className="menu" src={menu} alt="Menu de Opções" />
        </button>
      </div>
    </header>
  );
}

export default PageHeader;