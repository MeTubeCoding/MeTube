// import React from 'react';
import './App.css';

// import composant  :
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
    <div className="App">
      <div>test</div>
    </div>
  )
}

export default App;
