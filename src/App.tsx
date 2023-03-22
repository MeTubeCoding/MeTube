import React, { useState, useEffect } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faHeartBroken,
  faPaperclip,
  faVolumeUp,
  faBookmark,
  faPaperPlane,
  faPlay,
  faPause,
  faForward,
  faForwardFast,
  faChevronDown,
  faGear,
  faBan,
  faFlag,
  faBars
} from '@fortawesome/free-solid-svg-icons';

const videoData = [
  {
    id: 'Qg0Kk5MO5_0',
    title: 'Video 1',
    thumbnail: 'https://i.ytimg.com/vi/Qg0Kk5MO5_0/hqdefault.jpg'
  },
  {
    id: '8XpGZd_7_dI',
    title: 'Video 2',
    thumbnail: 'https://i.ytimg.com/vi/8XpGZd_7_dI/hqdefault.jpg'
  },
  {
    id: 'Ib3RJ-_DCT0',
    title: 'Video 3',
    thumbnail: 'https://i.ytimg.com/vi/Ib3RJ-_DCT0/hqdefault.jpg'
  }
];

function App() {
  // const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [heartColor, setHeartColor] = useState("#ffffff"); // blanc par défaut
  const [heartColorBroken, setHeartColorBroken] = useState("#ffffff"); // blanc par défaut
  
  const handleHeartClick = () => {
    setHeartColor((prevColor) => (prevColor === "#ffffff" ? "#3b82f6" : "#ffffff"));
  };
  
  const handleBrokenHeartClick = () => {
    setHeartColorBroken((prevColor) => (prevColor === "#ffffff" ? "#ef4444" : "#ffffff"));
  };
  
  

  useEffect(() => {
    const test = document.getElementById('test');
    if (test) {
      test.addEventListener('click', () => {
        fetch('http://localhost:5600/demo')
          .then(response => response.text())
          .then(data => console.log(data))
          .catch(error => console.error(error));
      });
    }
  }, []);

  // const handleKeyDown = (event: { key: string; }) => {
  //   if (event.key === 'ArrowUp') {
  //     setCurrentVideoIndex(prevIndex => {
  //       const nextIndex = prevIndex + 1;
  //       return nextIndex < videoData.length ? nextIndex : 0;
  //     });
  //   } else if (event.key === 'ArrowDown') {
  //     setCurrentVideoIndex(prevIndex => {
  //       const nextIndex = prevIndex - 1;
  //       return nextIndex >= 0 ? nextIndex : videoData.length - 1;
  //     });
  //   }
  // };

  // const currentVideo = videoData[currentVideoIndex];
  // const nextVideo = videoData[(currentVideoIndex + 1) % videoData.length];

  return (
    <div className="App">
      <h1 className="short text-white">SHORT</h1>
      <div className="video-container">
        <div>{/* icônes pour le visuel principal */}</div>
        <FontAwesomeIcon icon={faHeart} className="icon" style={{ color: heartColor }} onClick={handleHeartClick}/>
        <FontAwesomeIcon icon={faHeartBroken} className="icon" style={{ color: heartColorBroken }} onClick={handleBrokenHeartClick}/>
        <FontAwesomeIcon icon={faPaperclip} className="icon" style={{ color: "#f9fafb" }} />
        <FontAwesomeIcon icon={faVolumeUp} className="icon" style={{ color: "#f9fafb" }} />
        <FontAwesomeIcon icon={faBookmark} className="icon" style={{ color: "#f9fafb" }} />
        <FontAwesomeIcon icon={faPaperPlane} className="icon" style={{ color: "#f9fafb" }} />
        <FontAwesomeIcon icon={faPlay} className="icon" style={{ color: "#f9fafb" }} />
        <FontAwesomeIcon icon={faPause} className="icon" style={{ color: "#f9fafb" }} />
        <FontAwesomeIcon icon={faForward} className="icon" style={{ color: "#f9fafb" }} />
        <FontAwesomeIcon icon={faForwardFast} className="icon" style={{ color: "#f9fafb" }} />
        <FontAwesomeIcon icon={faChevronDown} className="icon" style={{ color: "#f9fafb" }} />
        <FontAwesomeIcon icon={faGear} className="icon" style={{ color: "#f9fafb" }} />
        <div>{/* icônes pour l'intérieur des paramètres */}</div>
        <FontAwesomeIcon icon={faBan} className="icon" style={{ color: "#f9fafb" }} />
        <FontAwesomeIcon icon={faFlag} className="icon" style={{ color: "#f9fafb" }} />
        <FontAwesomeIcon icon={faBars} className="icon" style={{ color: "#f9fafb" }} />

        {/* <video src={`https://www.youtube.com/embed/${currentVideo.id}`} title={currentVideo.title} onKeyDown={handleKeyDown} controls></video>
        <img className="video-preview" src={nextVideo.thumbnail} alt={nextVideo.title} /> */}
      </div>
  
      {/* ajouter un bouton qui déclenche la requête */}
      <button id="test">Tester le serveur</button>
    </div>
  )
}


export default App;  