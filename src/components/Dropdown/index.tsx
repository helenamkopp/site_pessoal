import React from 'react';
import { Link } from 'react-router-dom';

import menu from '../../assets/icons/menu.svg';

import './styles.css';


function DropdownMenu() {
  return (
    <div className="dropdown">
      <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <img src={menu} alt="Menu de Opções" />
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        < Link to="/" className="dropdown-item">Sobre</Link>
        < Link to="/" className="dropdown-item">Transição de Carreira</Link>
       
      
      </div>
    </div>


  );
}

export default DropdownMenu;