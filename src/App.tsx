import React from 'react';
import logo from './logo.svg';
import './App.css';


console.log("me voit tu ?")

let test = document.getElementById("test");

console.log(test);

test?.addEventListener("click",()=>{

  console.log("test");

  // fetch('http://localhost:5600/demo')
  //   .then(response => response.text())
  //   .then(data => console.log(data))
  //   .catch(error => console.error(error));
});


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div id='test'>Test</div>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
