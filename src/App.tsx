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
      <div className="bg-neutral-900 object-cover absolute top-14 left-80 bottom-0 right-0 w-60"></div>
      <div className="bg-neutral-900 object-cover absolute top-14 left-80 right-96 bottom-0 overflow-y-auto max-h-[1000px]">
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
            <div className="absolute text-base font-bold mr-56 left-72 top-0 mb-16 text-white">
              [ Cover ] - Attack on Titan - FINAL SEASON (S4) OP - My War - David - Fils de Ange Momone - AM&D
            </div>
            <div className="absolute text-xs mr-56 left-72 top-12 mb-16 text-gray-400">
            David fils de Momone  2,9 M de vues
            </div>
            <div className="absolute text-xs mr-24 left-72 top-20 text-gray-400">
              Mon dernier single est disponible absolument partout 
👉            https://bfan.link/j-ai-mange-une-pomme-et-j-ai-plein-d-energie

              Retrouvez-moi sur : 
              ▶ Spotify : https://tinyurl.com/spotify-david-momone
              ▶ Deezer : https://tinyurl.com/deezer-david-momone
              ▶ Apple Music : https://tinyurl.com/apple-music-david...

              Et aussi sur : 
              ▶ TikTok : https://www.tiktok.com/@david_fils_de...
              ▶ Insta : https://www.instagram.com/david_fils_...

              David fils de Momone

              PS : si cette vidéo contient un fan art, sachez que celui-ci a été fait par Kaï. Vous pouvez le joindre sur son insta : https://www.instagram.com/am_iak/
            </div>
            <div className="bg-neutral-900 object-cover absolute top-28 ml-72 left-0 bottom-0 right-0"></div>
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
            <div className="absolute text-base font-bold mr-56 left-72 top-0 bottom-0 text-white">
              J'ai Survécu 100 Jours Sur Terraria en Mode Master...
            </div>
            <div className="absolute text-xs mr-56 left-72 top-12 mb-16 text-gray-400">
              Ekyoten • 72 k vues
            </div>
            <div className="absolute text-xs mr-24 left-72 top-20 text-gray-400">
              Il y a 10 mois je sortais ma toute première vidéo, survivre 100 jours en expert sur terraria, 10 mois plus tard je me sens enfin prêt à relever le plus gros défi de terraria, survivre 100 jours en MASTER !

              -- Réseaux--
              Discord : https://discord.gg/czjWuPbjTK
              Tiktok : https://www.tiktok.com/@ekyoten
              Twitch : https://www.twitch.tv/ekyoten
              Youtube :   

               / @ekyoten9088  
              --------------------
              En espérant que ça vous plaira !



              #100days #100jours #200days #200jours #300days #300jours #400days #400jours #expert #harcore #terraria
            </div>
            <div className="bg-neutral-900 object-cover absolute top-28 ml-72 left-0 bottom-0 right-0"></div>
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
            <div className="absolute text-base font-bold mr-56 left-72 top-0 bottom-0 text-white">
              la magie du jeu vidéo
            </div>
            <div className="absolute text-xs mr-56 left-72 top-12 mb-16 text-gray-400">
              Timy’s adventures • 127 vues
            </div>
            <div className="absolute text-xs mr-24 left-72 top-20 text-gray-400">
              salut! Aujourd’hui je vous palre du jeu vidéo
              Bon visonnage!

              abonne toi ici:   

               / @timy1411  

              ejoind l'aventure:

              100 abonner: novembre 2022
              200 abonner: dimanche 26 mars 2023
            </div>
            <div className="bg-neutral-900 object-cover absolute top-28 ml-72 left-0 bottom-0 right-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;