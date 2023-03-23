import React from 'react';
import './App.css';


function log(){
  console.log("log")
  const local = {
    "mdp":"envTesst" ,
    "gmail": "en",

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
    </>
  );
}


export default App;
