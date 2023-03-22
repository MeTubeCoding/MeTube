// import React from 'react';
import React from 'react';
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

console.log("me voit tu ? 2")

function App() {
  return (
;
    <div>test</div>
  )
}

export default App;
