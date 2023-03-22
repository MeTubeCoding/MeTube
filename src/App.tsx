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
      <header>
        <h1>MeTUBE</h1>
        <div className="search">
          <input type="text" placeholder="Search..." />
          <button>Search</button>
          </div>
      </header>
      </body>
  )
}

export default App;
