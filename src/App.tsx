import React, {useState} from 'react';

let test = document.getElementById("test");

test?.addEventListener("click",()=>{
  fetch('http://localhost:5600/demo')
    // .then(response => response.text())
    // .then(data => console.log(data))
    // .catch(error => console.error(error));
});



function Bibliotheque() {
  return (
    <div>
      <h1>Bibliothèque</h1>
      <ul>
        <h1>J'aime</h1>
        <iframe
          width="357"
          height="201"
          src="https://www.youtube.com/embed/XuDnsjECf_A"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <iframe
          width="357"
          height="201"
          src="https://www.youtube.com/embed/XxYX9RXt9NA"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe> 
        <iframe
          width="357"
          height="201"
          src="https://www.youtube.com/embed/CP74ud3BQC4"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <br />

        <iframe
          width="357"
          height="201"
          src="https://www.youtube.com/embed/PpItdzLvS8w"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <iframe
          width="357"
          height="201"
          src="https://www.youtube.com/embed/c8AV-FmxN78"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe> 
        <iframe
          width="357"
          height="201"
          src="https://www.youtube.com/embed/UUYv3kk37oQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>


        <h1>Playlists</h1>
        <iframe
          width="357"
          height="201"
          src="https://www.youtube.com/embed/videoseries?list=PLOrMFaHlvMpu373GW-fTEWeADz0aqg0yj"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <iframe
          width="357"
          height="201"
          src="https://www.youtube.com/embed/videoseries?list=PLOrMFaHlvMpu373GW-fTEWeADz0aqg0yj"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe> 
        <iframe
          width="357"
          height="201"
          src="https://www.youtube.com/embed/videoseries?list=PLOrMFaHlvMpu373GW-fTEWeADz0aqg0yj"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <br />

        <iframe
          width="357"
          height="201"
          src="https://www.youtube.com/embed/videoseries?list=PLOrMFaHlvMpu373GW-fTEWeADz0aqg0yj"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <iframe
          width="357"
          height="201"
          src="https://www.youtube.com/embed/videoseries?list=PLOrMFaHlvMpu373GW-fTEWeADz0aqg0yj"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe> 
        <iframe
          width="357"
          height="201"
          src="https://www.youtube.com/embed/videoseries?list=PLOrMFaHlvMpu373GW-fTEWeADz0aqg0yj"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        

        <h1>Historique</h1>
        <iframe
          width="357"
          height="201"
          src="https://www.youtube.com/embed/XuDnsjECf_A"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <iframe
          width="357"
          height="201"
          src="https://www.youtube.com/embed/XxYX9RXt9NA"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe> 
        <iframe
          width="357"
          height="201"
          src="https://www.youtube.com/embed/CP74ud3BQC4"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <br />

        <iframe
          width="357"
          height="201"
          src="https://www.youtube.com/embed/PpItdzLvS8w"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <iframe
          width="357"
          height="201"
          src="https://www.youtube.com/embed/c8AV-FmxN78"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe> 
        <iframe
          width="357"
          height="201"
          src="https://www.youtube.com/embed/UUYv3kk37oQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </ul>
    </div>
  );
}

export default Bibliotheque;
