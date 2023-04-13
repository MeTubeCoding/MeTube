import React, {useState} from 'react';
import './library.css';

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
      <h1 className='flex justify-center text-5xl'>Bibliothèque</h1>

      <ul>
        <br /><br /><br /><br />
        <h1 className='flex justify-center text-4xl'>J'aime</h1>
        <br />

        <div className='flex justify-around flex-row'>
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
        </div>

        <br />

        <div className='flex justify-around flex-row'>
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
        </div>

        <br /><br /><br /><br />
        <h1 className='flex justify-center text-4xl'>Playlists</h1>
        <br />

        <div className='flex justify-around flex-row'>
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
        </div>

        <br />

        <div className='flex justify-around flex-row'>
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
        </div>

        <br /><br /><br /><br />
        <h1 className='flex justify-center text-4xl'>Historique</h1>
        <br />

        <div className='flex justify-around flex-row'>
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
        </div>

        <br />

        <div className='flex justify-around flex-row'>
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
        </div>
      </ul>
    </div>
  );
}

export default Bibliotheque;