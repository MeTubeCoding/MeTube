import React from "react";
import "tailwindcss/tailwind.css";

import logo from '../assets/user.jpg';
import cover from '../assets/cover.jpg';

const ChaineAccueil = () => {

  const videos = [
    {
      id: 1,
      title: 'Titre de la vidéo 1',
      imgUrl: 'https://picsum.photos/id/241/200/300'
    },
    {
      id: 2,
      title: 'Titre de la vidéo 2',
      imgUrl: 'https://picsum.photos/id/242/200/300'
    },
    {
      id: 3,
      title: 'Titre de la vidéo 3',
      imgUrl: 'https://picsum.photos/id/243/200/300'
    },
    {
      id: 4,
      title: 'Titre de la vidéo 4',
      imgUrl: 'https://picsum.photos/id/244/200/300'
    },
    {
      id: 5,
      title: 'Titre de la vidéo 5',
      imgUrl: 'https://picsum.photos/id/247/200/300'
    },
    {
      id: 6,
      title: 'Titre de la vidéo 6',
      imgUrl: 'https://picsum.photos/id/247/200/300'
    }
    // Ajoutez plus de vidéos ici
  ]

  return (
    <>
      <div className="relative bg-me-darkpurple" style={{ marginLeft: '13%' }}>
        <div className="w-full h-64" style={{ backgroundImage: `url(${cover})`, backgroundPosition: 'center center', backgroundSize: 'cover' }}></div>
        <div className="absolute top-64 left-0 right-0 bottom-0 bg-black opacity-50"></div>
        <div className="absolute top-64 left-0 right-0 flex flex-col items-center justify-center">
          <div className="absolute top-0 left-0 right-0 bg-me-darkpurple justify-start pl-10 flex flex-col">
            <div className="flex items-center">
              <img src={logo} alt="Logo de la chaîne" className="w-25 h-25 object-cover rounded-full border-4 border-me-orange mt-8 mr-4" />
              <div className="flex flex-col">
                <h1 className="text-me-orange font-bold text-4xl mt-4 mb-2">André From The Valley</h1>
                <div className="flex space-x-4">
                  <p className="text-me-yellow font-medium text-lg">@AndreFromTheValley</p>
                  <p className="text-me-yellow font-medium text-lg">•</p>
                  <p className="text-me-yellow font-medium text-lg">100 000 subscribers 1 video</p>
                </div>
                <p className="text-me-yellow font-medium text-lg">Founder Agile@School® // Agile Coach // Product Ops // Product & Coding Bootcamp Shamane</p>
                <div className="mt-4 flex space-x-4">
                  <button className="text-me-yellow py-2 px-4 font-bold rounded-lg border-b-2">HOME</button>
                  <button className="text-me-yellow py-2 px-4 font-bold rounded-lg">VIDEOS</button>
                  <button className="text-me-yellow py-2 px-4 font-bold rounded-lg">LIVE</button>
                  <button className="text-me-yellow py-2 px-4 font-bold rounded-lg">ABOUT</button>
                  <button className="bg-me-orange text-me-yellow font-bold py-2 px-4 rounded-lg ml-auto">Subscribe</button>
                </div>
              </div>
            </div>
            <div className="flex mt-8">
              <div className="relative ml-25 mb-20 w-1/3">
                <video
                  className="w-full h-full"
                  src={require("../assets/test.mp4")}
                  controls
                ></video>
              </div>
              <div className="ml-8 flex flex-col justify-start">
                <h2 className="text-2xl text-me-orange font-semibold">CODING FACTORY CERGY : THE CALIFORNIA !</h2>
                <p className="text-me-yellow mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, repellat?</p>
              </div>
            </div>
            <div className="flex flex-wrap -mx-4">
              {videos.map((video, index) => (
                <div
                  key={video.id}
                  className="w-full md:w-1/3 h-72 mt-8 px-4 mb-8"
                  style={index % 3 === 0 ? { clear: "left" } : {}}
                >
                  <div className="bg-me-lightpurple font-bold h-full rounded-xl overflow-hidden flex flex-col justify-between">
                    <img
                      src={video.imgUrl}
                      alt={video.title}
                      className="h-48 w-full object-cover"
                    />
                    <div className="p-4 flex-1">
                      <h3 className="text-me-orange mb-2">{video.title}</h3>
                      <button className="bg-me-orange text-me-yellow px-4 py-2 rounded-md mt-4 place-content-center">
                        Lire
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChaineAccueil;
