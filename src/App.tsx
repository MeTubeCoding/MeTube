import React from 'react';
import './App.css';
import { Live } from './composant/Live';


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

let localStream: MediaStream;
let remoteStream;

const init = async () => {

  try {
    localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
  } catch(error) {
    // Gérer l'erreur ici
  }
  
  (document.getElementById('user-1') as HTMLVideoElement).srcObject = localStream;
}

function App() {

  init();

  return (
    <>
      <p onClick={log}>Je suis un test</p>
      <p className="text-3xl font-bold text-red-500">Je suis du texte</p>
      <Live/>
    </>
  );
}


export default App;
