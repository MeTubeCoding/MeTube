import React from 'react';
import { Chat } from './composant/chat';
import { Description } from './composant/description';
import { Live } from './composant/Live';


function App() {

  // init();

  console.log("test");

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
