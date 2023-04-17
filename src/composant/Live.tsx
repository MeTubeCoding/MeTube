import React from 'react';
import './Live.css'; // Importez le fichier CSS
import NombreViewer from './nombreViewer';
import ListeViewer from './listeViewer';

export function Live() {

  let localStream: MediaStream;

  const init = async () => {

    try {
      localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
    } catch (error) {
      // Gérer l'erreur ici
    }

    (document.getElementById('user-1') as HTMLVideoElement).srcObject = localStream;
  }

  init();

  return (
    <>
      <div id="videos" className='border flex justify-around'>
        <video className="video-player flipped" id="user-1" autoPlay playsInline></video>
        <video className="video-player" id="user-2" autoPlay playsInline></video>
      </div>
      <div className="live-info">
        <NombreViewer /> {/* Ajoutez le composant ListeViewer */}
      </div>
      <div className="live-info">
        <ListeViewer /> {/* Ajoutez le composant ListeViewer */}
      </div>
    </>

  )
}
