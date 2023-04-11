import React, {useState} from 'react';

import logo from './logo.svg';
import './Tendances.css';

// import composant  :

import { PassThrough } from 'stream';

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="menu-container">
      <div className="menu-button" onClick={toggleMenu}>
        {isMenuOpen ? (
          <button className="material-icons">Close</button>
        ) : (
          <button className="material-icons">Menu</button>
        )}
      </div>
      <div className={`menu ${isMenuOpen ? 'open' : ''} texts`}>
        <ul>
          <li>
            <a href="index.tsx">Accueil</a>
          </li>
          <li>
            <a href="pages/timeline.tsx">Recommandés</a>
          </li>
          <li>
            <a href="#">Tendances</a>
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
        <div className='titre'>
        <a href='App.tsx'><img className="logo" src="https://cdn.discordapp.com/attachments/1019222515962368112/1088482444207988838/Metube_logo.png"/></a>
        </div>
        </div>
        <div className="search">
          <input type="text" placeholder="Rechercher sur MeTube..." className='Searching' />
          <button className='rechercher'>Rechercher</button>
        </div>
      </div>
      <div>
          {Menu()}
        </div>
      <div className="tendances">
        <img className='img_tendances' src="https://www.youtube.com/img/trending/avatar/trending.png"></img>
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