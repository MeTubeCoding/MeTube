/* eslint-disable prettier/prettier */
import React from "react";
import Tabs from "./Tabs";

function ChaineAccueilVideos() {

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
      <Tabs />

      <div className="flex">
        <div className="relative ml-80 mb-20">
          <video
            className="w-96 h-72"
            src="../assets/test.mp4"
            controls
          ></video>
        </div>
        <div className="mt-4 ">
          <h2 className="text-2xl font-semibold">Titre de la vidéo</h2>
          <p className="text-gray-600 mt-2">Description de la vidéo</p>
        </div>
      </div>
      <div className="flex flex-wrap -mx-4 md:ml-80">
        {videos.map((video, index) => (
          <div
            key={video.id}
            className="w-full md:w-60 h-48 mt-8 px-4 mb-8"
            style={index % 3 === 0 ? { clear: "left" } : {}}
          >
            <div className="bg-me-lightpurple h-72 rounded-xl overflow-hidden flex flex-col justify-between">
              <img
                src={video.imgUrl}
                alt={video.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-white mb-2">{video.title}</h3>
                <button className="bg-red-600 text-white px-4 py-2 rounded-md mt-4 place-content-center">
                  Lire
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ChaineAccueilVideos;
