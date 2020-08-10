import React from 'react';


import { Link } from 'react-router-dom';
import logo from '../../assets/icons/logohm.svg';
import './styles.css';
import DropdownMenu from '../Dropdown';


function PageHeader() {
  return (
     <header className="page-header">
      <div className="header-content">
        <Link to="/">
          <img className="logo" src={logo} alt="Helena Meyer" />
        </Link>
        <DropdownMenu />
        </div>
    </header>
   
   
  );
}

export default PageHeader;

