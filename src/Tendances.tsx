import React, {useState} from 'react';

import logo from './logo.svg';
import './App.css';

// import composant  :

import { PassThrough } from 'stream';

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="menu-container">
      <div className="menu-button" id='Menu' onClick={toggleMenu}>
        {isMenuOpen ? (
          <i className="material-icons">close</i>
        ) : (

          <i className="material-icons">menu</i>
        )}
      </div>
      <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <a href="App.tsx">Accueil</a>
          </li>
          <li>
            <a href="Tendances.tsx">Tendances</a>
          </li>
          <li>
            <a href="#">Abonnements</a>
          </li>
          <li>
            <a href="#">Bibliothèque</a>
          </li>
          <li>
            <a href="#">Historique</a>
          </li>
        </ul>
      </div>
    </div>
  );
};




// ================================================================================================
// ================================================================================================
// ================================================================================================



function Tendances() {
return (
    <div>
      <div className="haut">
        <div className='menu'>
        </div>
        <a href='App.tsx'><h1>MeTUBE</h1></a>
        <h2>Tendances</h2>
        <div className="search">
          <input type="text" placeholder="Rechercher sur MeTube..." className='Searching' />
          <button className='rechercher'>Rechercher</button>
        </div>
      </div>
      <div className='vidéos'>
        <div className='ligne'>
        </div>
      </div>
      </div>
  );
}
export default Tendances;