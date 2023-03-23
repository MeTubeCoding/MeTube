import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


function Bibliotheque() {
    return (
      <div>
        <h1>Bibliothèque</h1>
        <ul>
          <h1>J'aime</h1><iframe
            width="357"
            height="201"
            src="https://www.youtube.com/embed/UUYv3kk37oQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <li>Playlists</li>
          <li>Historique</li>
        </ul>
      </div>
    );
  }
  
  export default Bibliotheque;