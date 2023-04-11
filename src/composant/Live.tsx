import React from 'react';

export function Live() {

  let localStream: MediaStream;
  let remoteStream;

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
      <video className="video-player transform scale-x-[-1]" id="user-1" autoPlay playsInline></video>
        <video className="video-player" id="user-2" autoPlay playsInline></video>
      </div>
    </>

  )
}
