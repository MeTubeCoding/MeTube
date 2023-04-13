import React from 'react';
import './App.css'

function History() {
  return (
    <div className="History">
      <div className="bg-neutral-900 object-cover absolute top-0 left-0 right-0">
        <img src="menu-btn.png" className="object-cover w-5 m-5"></img>
        <div className="rounded-full absolute top-0 left-0 right-0 bottom-0 hover:bg-white opacity-25 object-cover w-9 m-3"></div>
      </div>
      <div className="bg-neutral-900 object-cover absolute top-14 left-0 bottom-0 w-60">

      </div>
      <div className="bg-neutral-900 object-cover absolute top-14 left-80 right-0 bottom-0 overflow-y-auto max-h-[1000px]">
        <p className="font-bold text-base text-white relative top-5">Historique de visionage</p>
        <div>
          <p className="font-bold text-base text-white relative mt-12 mb-5">Aujourd'hui</p>
          <div className="relative mb-4 rounded-xl overflow-hidden">
            <iframe
              className="rounded-r-xl"
              width="270"
              height="150"
              src="https://www.youtube.com/embed/UUYv3kk37oQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="absolute left-300 top-0 text-white">[ Cover ] - Attack on Titan - FINAL SEASON (S4) OP - My War - David - Fils de Ange Momone - AM&D</div>
          </div>
          <div className="relative mb-4 rounded-xl overflow-hidden">
            <iframe
              className="rounded-r-xl"
              width="270"
              height="150"
              src="https://www.youtube.com/embed/CqSRxztxcDI"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div>
          <p className="font-bold text-base text-white relative mt-12 mb-6">Hier</p>
          <div className="relative mb-4 rounded-xl overflow-hidden">
            <iframe
              className="rounded-r-xl"
              width="270"
              height="150"
              src="https://www.youtube.com/embed/VGK9PuFa_Iw"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;