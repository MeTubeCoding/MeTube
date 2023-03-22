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
      <div className={`menu ${isMenuOpen ? 'open' : ''} texts`}>
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

function video() {
  const videos = [
    {
      titre: "Titre de la vidéo 1",
      chaine: "Nom de la chaîne 1",
      tags: ["tag1", "tag2", "tag3"]
    },
    {
      titre: "Titre de la vidéo 2",
      chaine: "Nom de la chaîne 2",
      tags: ["tag4", "tag5", "tag6"]
    },
    {
      titre: "Titre de la vidéo 3",
      chaine: "Nom de la chaîne 3",
      tags: ["tag7", "tag8", "tag9"]
    }
  ];

  return (
    <div>
      {videos.map((video, index) => (
        <div key={index}>
          <h2>{video.titre}</h2>
          <p>Chaîne : {video.chaine}</p>
          <p>Tags : {video.tags.join(", ")}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
