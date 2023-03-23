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
        <div className='haut_gauche'>
        <div className='display_menu'>
          {Menu()}
        </div>
        <div className='titre'>
        <a href='App.tsx'><h1>MeTUBE</h1></a>
        </div>
        </div>
        <div className="search">
          <input type="text" placeholder="Rechercher sur MeTube..." className='Searching' />
          <button className='rechercher'>Rechercher</button>
        </div>
      </div>
      <div className="tendances">
        <img src="https://www.youtube.com/img/trending/avatar/trending.png"></img>
        <h3>TENDANCES</h3>
        </div>
      <div className="filtres">
        <div className="nv">
        <h4>NOUVEAUTES</h4>
        <iframe
            width="300"
            height="170"
            src="https://www.youtube.com/embed/SRpYxmmy6EI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <iframe
            width="300"
            height="170"
            src="https://www.youtube.com/embed/dMekskqXbL4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="music">
        <h4>MUSIQUE</h4>
        <iframe
            width="300"
            height="170"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
           <iframe
            width="300"
            height="170"
            src="https://www.youtube.com/embed/3NoKAOTE_ZI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="films">
        <h4>FILMS</h4>
        <iframe
            width="300"
            height="170"
            src="https://www.youtube.com/embed/RjNcTBXTk4I"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
           <iframe
            width="300"
            height="170"
            src="https://www.youtube.com/embed/wK69QJ2ESO0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="jeux">
        <h4>JEUX VIDEOS</h4>
        <iframe
            width="300"
            height="170"
            src="https://www.youtube.com/embed/loarI5X93wI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <iframe
            width="300"
            height="170"
            src="https://www.youtube.com/embed/QBBLxrvOmqw"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      </div>
  );
}
export default Tendances;