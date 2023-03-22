import React from 'react';
import './App.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome, faHeart, faHeartBroken, faPaperclip, faVolumeUp, faBookmark, faPaperPlane, faPlay, faPause, faForward, faForwardFast} from '@fortawesome/free-solid-svg-icons';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';


// import composant  :
console.log("me voit tu ?")

let test = document.getElementById("test");

test?.addEventListener("click",()=>{
  fetch('http://localhost:5600/demo')
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error(error));
});


function App() {
  return (
    <div className='App bg-gray-700 display:flex align-items:space-between'>
      <h1 className="short text-white">SHORT</h1>
        <FontAwesomeIcon icon={faHome} />
        <FontAwesomeIcon icon={faHeart} style={{color: "#e70808",}} />
        <FontAwesomeIcon icon={faHeartBroken} style={{color: "#f9fafb",}} />
        <FontAwesomeIcon icon={faPaperclip} style={{color: "#ebecf0",}} />
        <FontAwesomeIcon icon={faVolumeUp} style={{color: "#ebecf0",}} />
        <FontAwesomeIcon icon={faBookmark} style={{color: "#ebecf0",}} />
        <FontAwesomeIcon icon={faPaperPlane} style={{color: "#ebecf0",}} />
        <FontAwesomeIcon icon={faPlay} style={{color: "#ebecf0",}} />
        <FontAwesomeIcon icon={faPause} style={{color: "#ebecf0",}} /> 
        <FontAwesomeIcon icon={faForward} style={{color: "#ebecf0",}} />
        <FontAwesomeIcon icon={faForwardFast} style={{color: "#ebecf0",}} />
        <FontAwesomeIcon icon={faChevronDown} style={{color: "#ebecf0",}} />
    </div> 
  )
}


export default App;
