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

import { Modal, Dropdown} from 'react-bootstrap';

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
  const [showModal, setShowModal] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [showNotRecommended, setShowNotRecommended] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false);
  }

  const handleShowDescription = () => {
    setShowDescription(!showDescription);
    setShowNotRecommended(false);
    setShowReport(false);
    setShowFeedback(false);
  }

  const handleShowNotRecommended = () => {
    setShowNotRecommended(!showNotRecommended);
    setShowDescription(false);
    setShowReport(false);
    setShowFeedback(false);
  }

  const handleShowReport = () => {
    setShowReport(!showReport);
    setShowDescription(false);
    setShowNotRecommended(false);
    setShowFeedback(false);
  }

  const handleShowFeedback = () => {
    setShowFeedback(!showFeedback);
    setShowDescription(false);
    setShowNotRecommended(false);
    setShowReport(false);
  }
  

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
  
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleKeyDown = (event: { key: string; }) => {
    if (event.key === 'ArrowUp') {
      setCurrentVideoIndex(prevIndex => {
        const nextIndex = prevIndex + 1;
        return nextIndex < videoData.length ? nextIndex : 0;
      });
    } else if (event.key === 'ArrowDown') {
      setCurrentVideoIndex(prevIndex => {
        const nextIndex = prevIndex - 1;
        return nextIndex >= 0 ? nextIndex : videoData.length - 1;
      });
    }
  };

  const currentVideo = videoData[currentVideoIndex];
  const nextVideo = videoData[(currentVideoIndex + 1) % videoData.length];

  return (
    <div className="App">
      <div className="video-container">
      <video
          src={`https://www.youtube.com/embed/${currentVideo.id}`}
          title={currentVideo.title}
          onKeyDown={handleKeyDown}
          controls
        ></video>
        <img
          className="video-preview"
          src={nextVideo.thumbnail}
          alt={nextVideo.title}
        />
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
        <div>{/* icônes pour l'intérieur des paramètres */}</div>
        <FontAwesomeIcon icon={faBan} className="icon" style={{ color: "#f9fafb" }} />
        <FontAwesomeIcon icon={faFlag} className="icon" style={{ color: "#f9fafb" }} />
        <FontAwesomeIcon icon={faBars} className="icon" style={{ color: "#f9fafb" }} />

        {/* <video src={`https://www.youtube.com/embed/${currentVideo.id}`} title={currentVideo.title} onKeyDown={handleKeyDown} controls></video>
        <img className="video-preview" src={nextVideo.thumbnail} alt={nextVideo.title} /> */}
      </div>
      <div className="flex justify-end p-4">
      <FontAwesomeIcon icon={faGear} className="icon" style={{ color: "#f9fafb" }} onClick={handleShowModal} />
      </div>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Settings</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Dropdown show={showDescription}>
            <Dropdown.Toggle variant="light" id="dropdown-basic" onClick={handleShowDescription}>
              <FontAwesomeIcon icon={faBars} className="mr-2" />
              Description
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                <FontAwesomeIcon icon={faBars} className="mr-2" onClick={handleShowFeedback}/>
                Option 1
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                <FontAwesomeIcon icon={faBars} className="mr-2" onClick={handleShowFeedback}/>
                Option 2
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                <FontAwesomeIcon icon={faBars} className="mr-2" onClick={handleShowFeedback}/>
                Option 3
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown show={showNotRecommended}>
            <Dropdown.Toggle variant="light" id="dropdown-basic" onClick={handleShowNotRecommended}>
              <FontAwesomeIcon icon={faBan} className="mr-2" />
              Ne pas recommander cette chaine
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                <FontAwesomeIcon icon={faBars} className="mr-2" onClick={handleShowFeedback}/>
                Option 1
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                <FontAwesomeIcon icon={faBars} className="mr-2" onClick={handleShowFeedback}/>
                Option 2
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                <FontAwesomeIcon icon={faBars} className="mr-2" onClick={handleShowFeedback}/>
                Option 3
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown show={showReport}>
            <Dropdown.Toggle variant="light" id="dropdown-basic" onClick={handleShowReport}>
              <FontAwesomeIcon icon={faBars} className="mr-2" onClick={handleShowFeedback}/>
              Signaler
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                <FontAwesomeIcon icon={faBars} className="mr-2" onClick={handleShowFeedback}/>
                Option 1
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                <FontAwesomeIcon icon={faBars} className="mr-2" onClick={handleShowFeedback}/>
                Option 2
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                <FontAwesomeIcon icon={faBars} className="mr-2" onClick={handleShowFeedback}/>
                Option 3
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Modal.Body>
      </Modal>
    </div>
  );
}


export default App;  