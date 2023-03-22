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
    <body>
      <div className="header">
        <h1>MeTUNE</h1>
      </div>
      </body>
  )
}

export default App;
