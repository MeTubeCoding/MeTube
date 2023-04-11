import React from 'react';
import './App.css';
import { Chat } from './composant/chat';
import { Description } from './composant/description';


function log(){
  console.log("log")
  let local = {
    "mdp":"test" ,
    "gmail": "mail",

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
  return (
    <>
      <p onClick={log}>Je suis un test</p>
      <p className="text-3xl font-bold text-red-500">Je suis du texte</p>
      <Chat/>
      <Description/>
    </>
  );
}


export default App;
