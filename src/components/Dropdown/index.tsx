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
        < Link to="/" className="dropdown-item">Assunto 1</Link>
        < Link to="/" className="dropdown-item">Assunto 2</Link>
        < Link to="/" className="dropdown-item">Assunto 3</Link>
        < Link to="/" className="dropdown-item">Assunto 4</Link>
      </div>
    </div>


  );
}

export default DropdownMenu;