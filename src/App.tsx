import React from 'react';
import './App.css';

function App() {

  const handleClick = () => {
    fetch('http://localhost:5600/demo')
      .then(response => response.text())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <div className="haut">
        <div className='menu'>
        </div>
        <a href='App.tsx'><h1>MeTUBE</h1></a>
        <div className="search">
          <input type="text" placeholder="Rechercher sur MeTube..." className='Searching' />
          <button className='rechercher'>Rechercher</button>
        </div>
      </div>
      <div className='vidéos'>
        <div className='ligne'>
          <iframe
            width="357"
            height="201"
            src="https://www.youtube.com/embed/_xiv6JxAiqU"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <br />
          <iframe
            width="357"
            height="201"
            src="https://www.youtube.com/embed/UUYv3kk37oQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <iframe
            width="357"
            height="201"
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