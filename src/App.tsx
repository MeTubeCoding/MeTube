import React from 'react';

const historyItems = [
  {
    videoUrl: 'https://www.youtube.com/embed/UUYv3kk37oQ',
    description: 'Une vidéo intéressante'
  }
];

function History() {
  return (
    <div className="History">
      <div className="Header">
        <img src="menu-btn.png"></img>
      </div>
      <h2>Historique de visionnage</h2>
      <h3>Aujourd'hui</h3>
        <div className="flex">
          <iframe
            width="357"
            height="201"
            src="https://www.youtube.com/embed/UUYv3kk37oQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p>Une video intéréssante</p>
        </div>
      <h3>Hier</h3>
      <h3>Dimanche</h3>
      <h3>13 Mars</h3>
    </div>
  );
}

export default History;