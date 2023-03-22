import React from 'react';
import logo from './logo.svg';
import './App.css';

// import composant  :

import { example } from './test';


example();

console.log("me voit tu ?")

let test = document.getElementById("test");

test?.addEventListener("click",()=>{
  fetch('http://localhost:5600/demo')
    // .then(response => response.text())
    // .then(data => console.log(data))
    // .catch(error => console.error(error));
});




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

      <div className="menu">
        <a href='App.tsx'><button className="accueil">Accueil</button></a>
        <a href='App.tsx'><button className="tendances">Tendances</button></a>
        <a href='App.tsx'><button className="abonnements">Abonnements</button></a>
        <a href='App.tsx'><button className="bibliotheque">Bibliothèque</button></a>
        <a href='App.tsx'><button className="historique">Historique</button></a>
      </div>

      </body>
  )
}

export default App;
