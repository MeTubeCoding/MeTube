import React from 'react';
import './App.css';
// import composant  :
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import ReactDOM from 'react-dom'

library.add(fas, faTwitter)

// Kicks off the process of finding <i> tags and replacing with <svg>
dom.watch()
console.log("me voit tu ?")

let test = document.getElementById("test");
let local = {
  "mdp": localStorage.getItem("mpdLoginSap"),
  "gmail": localStorage.getItem("gmailLoginSap")
};

test?.addEventListener("click",()=>{
  fetch("http://127.0.0.1:5600/node/login",{
    method : "POST",
    headers : {
      "Content-Type" : "application/json"
    },
    body : JSON.stringify(local)
 })
});

console.log("me voit tu ? 2")

function App() {
  // state (état, données)
  //const element = <FontAwesomeIcon icon={faEnvelope} />
  // comportements

  // affichage (render)
  return (
    <div className="App">
      <div className="texte">Hello World!</div>
      <div className="shorts-container">
        <div className="shorts-video">
          <div className="texte"><video src="#"></video></div>
          <div>{/* icône pour partager une vidéo */}</div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
          </svg>
          <div>{/* icône pour le coeur vide pour liker une vidéo */}</div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
          <div>{/* icône pour le coeur vide pour montrer que le like est pris en compte  */}</div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
          </svg>
          <div>{/* icône pour le coeur vide pour montrer que le like est pris en compte  */}</div>
        </div>
      </div>
    </div>
  );
}


export default App;
