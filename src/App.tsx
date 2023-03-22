import React from 'react';
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
    <>
      <p>Je suis un test</p>
      <p>Je suis du texte</p>
    </>
  );
}


export default App;
