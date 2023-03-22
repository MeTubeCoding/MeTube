import React, {useState} from 'react';

import logo from './logo.svg';
import './App.css';

// import composant  :

import { example } from './test';
import { PassThrough } from 'stream';
import './Tendances.tsx'


example();

console.log("me voit tu ?")

let test = document.getElementById("test");

test?.addEventListener("click",()=>{
  fetch('http://localhost:5600/demo')
    // .then(response => response.text())
    // .then(data => console.log(data))
    // .catch(error => console.error(error));
});


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




function App() {

  const handleClick = () => {
    fetch('http://localhost:5600/demo')
      .then(response => response.text())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  };

  return (
    <div className="App">
      <div className = "haut">
      <div className='haut_gauche'>
      <div className='display_menu'>
        {Menu()}
      </div>
        <a href='App.tsx'><h1>MeTUBE</h1></a>
      </div>
        <div className="search">
          <input type="text" placeholder="Rechercher sur MeTube..." className='Searching' />
          <button className='rechercher'>Rechercher</button>
        </div>
      </div>
      <div className='vidéos'>
        <div className='ligne'>
          <iframe
            width="356"
            height="200"
            src="https://www.youtube.com/embed/_xiv6JxAiqU"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <br />
          <iframe
            width="356"
            height="200"
            src="https://www.youtube.com/embed/UUYv3kk37oQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <iframe
            width="356"
            height="200"
            src="https://www.youtube.com//embed/AQSNS-bN-8Y"
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

export default App;