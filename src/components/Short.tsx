import React, { useState, useEffect } from 'react';
import '../index.css';
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
import { Modal, Dropdown} from 'react-bootstrap';
import {Menu_parametre} from './Menu_parametre';


function Short() {

  /*LIKES DISLIKES*/
  const [heartColor, setHeartColor] = useState("#ffffff"); // blanc par défaut
  const [heartColorBroken, setHeartColorBroken] = useState("#ffffff"); // blanc par défaut

  const handleHeartClick = () => {
    setHeartColor((prevColor) => (prevColor === "#ffffff" ? "#3b82f6" : "#ffffff"));
  };
  
  const handleBrokenHeartClick = () => {
    setHeartColorBroken((prevColor) => (prevColor === "#ffffff" ? "#ef4444" : "#ffffff"));
  };
  
  /*SETTINGS*/
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


  return (
    <div className="Icone">
      <div>{/* icônes pour le visuel principal */}</div>
      <FontAwesomeIcon icon={faHeart} className="icon" style={{ color: heartColor }} onClick={handleHeartClick} />
      <FontAwesomeIcon icon={faHeartBroken} className="icon" style={{ color: heartColorBroken }} onClick={handleBrokenHeartClick} />
      <FontAwesomeIcon icon={faPaperclip} className="icon" style={{ color: "#f9fafb" }} />
      <FontAwesomeIcon icon={faVolumeUp} className="icon" style={{ color: "#f9fafb" }} />
      <FontAwesomeIcon icon={faBookmark} className="icon" style={{ color: "#f9fafb" }} />
      <FontAwesomeIcon icon={faPaperPlane} className="icon" style={{ color: "#f9fafb" }} />
      <FontAwesomeIcon icon={faPlay} className="icon" style={{ color: "#f9fafb" }} />
      <FontAwesomeIcon icon={faPause} className="icon" style={{ color: "#f9fafb" }} />
      <FontAwesomeIcon icon={faForward} className="icon" style={{ color: "#f9fafb" }} />
      <FontAwesomeIcon icon={faForwardFast} className="icon" style={{ color: "#f9fafb" }} />
      <FontAwesomeIcon icon={faChevronDown} className="icon" style={{ color: "#f9fafb" }} />
      <div>{/* icônes pour l'intérieur des paramètres */}</div>
      <FontAwesomeIcon icon={faBan} className="icon" style={{ color: "#f9fafb" }} />
      <FontAwesomeIcon icon={faFlag} className="icon" style={{ color: "#f9fafb" }} />
      <FontAwesomeIcon icon={faBars} className="icon" style={{ color: "#f9fafb" }} />
      <div className="flex justify-end p-4">
        <FontAwesomeIcon icon={faGear} className="icon" style={{ color: "#f9fafb" }} onClick={Menu_parametre} />
      </div>
    </div>
  );
}


export default Short;  