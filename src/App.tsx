import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SignupPage from './pages/Signup';
import LoginPage from './pages/Login';
import { Chat } from './composant/chat';
import { Description } from './composant/description';
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

function App() {

  // init();

  console.log("test");

  return (
    <>
      <p className="text-3xl font-bold text-red-500">Je suis du texte</p>
      <Chat/>
      <Description/>
      <Live/>
    
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8">
     <BrowserRouter>
        <Routes>
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/signup" element={<SignupPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  </div>
  </>
  );
}


export default App;
