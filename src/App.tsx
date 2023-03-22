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


function App() {
  return (
    <div className="haut">
      <div className='menu'>
      </div>
      <a href='App.ts'><h1>MeTUBE</h1></a>
      <div className="search">
        <input type="text" placeholder="Rechercher sur MeTube..." className='Searching' />
        <button className='rechercher'>Rechercher</button>
      </div>
    </div>
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
