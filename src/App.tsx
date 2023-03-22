import React from 'react';
import './App.css';
import { Chat } from './composant/chat';


function log(){
  console.log("log")
}


function App() {
  return (
    <>
      <p onClick={log}>Je suis un test</p>
      <p>Je suis du texte</p>
      <Chat/>
    </>
  );
}


export default App;
