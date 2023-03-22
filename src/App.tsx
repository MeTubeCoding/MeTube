import React, {useState} from 'react';

import logo from './logo.svg';
import './App.css';

// import composant  :

import { example } from './test';
import { PassThrough } from 'stream';


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
      <div className="menu-button" onClick={toggleMenu}>
        {isMenuOpen ? (
          <button className="material-icons">Close</button>
        ) : (
          <button className="material-icons">Menu</button>
        )}
      </div>
      <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <a href="index.tsx">Accueil</a>
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




function App() {
  return (
    <body>
      <div className = "haut">
        <a href='App.tsx'><h1>MeTUBE</h1></a>
        <div className="search">
          <input type="text" placeholder="Rechercher sur MeTube..." className='Searching' />
          <button className='rechercher'>Rechercher</button>
        </div>
      </div>
      <div>
        {Menu()}
      </div>
    </body>
  )
}

export default App;
