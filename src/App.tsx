import React from 'react';
import './App.css';
<<<<<<< HEAD
import { Chat } from './composant/chat';
import { Description } from './composant/description';
=======
import { Live } from './composant/Live';
>>>>>>> 24e93f694e765c1b01bca396646a7a67f0e475eb


function log(){
  console.log("log")
  const local = {
    "mdp":"envTesst" ,
    "gmail": "e",

  };
 
  fetch("http://127.0.0.1:5600/chat",{
 
  method : "POST",
  headers : {
      "Content-Type" : "application/json"
  },
  body : JSON.stringify(local)
  })
  .then((res)=>{
  return res.text()}
  )
  .then((res)=>{
    console.log(res)
  })
  
}

function App() {

  // init();

  return (
    <>
      <p className="text-3xl font-bold text-red-500">Je suis du texte</p>
      <Chat/>
      <Description/>
      <Live/>
    </>
  );
}


export default App;
