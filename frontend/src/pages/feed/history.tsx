import React, { useState } from 'react'
import Main from '../../pages/Main'
import Results from '../../components/Results'
import Navbar from '../../components/Navbar'
import { useOnSearch } from '../../components/useOnSearch'
import SideBar from '../../components/SideBar'
import Filters from '../../components/Filters'
import { channel } from 'diagnostics_channel'
import { set } from 'mongoose'

function History() {
  const [isSideBarVisible, setIsSideBarVisible] = useState(false)
  const [filter, setFilter] = useState('none')
  const { videos, channels, onSearch } = useOnSearch()

  const toggleSideBarVisibility = () => {
    setIsSideBarVisible(prevState => !prevState)
  }

  return (
    <div className="History text-me-orange">
      <div style={{ height: '8.5vh' }}>
        <Navbar onSearch={onSearch} onToggleSideBar={toggleSideBarVisibility} setSearched={function (value: React.SetStateAction<boolean>): void {
          throw new Error('Function not implemented.')
        } } />
      </div>
      <div className="flex flex-col" style={{ height: '92.5vh' }}>
        <SideBar visible={isSideBarVisible} />
      </div>
      <div className="max-h-screen">
        <div style={{ height: '7vh' }}>
          <Navbar
            onSearch={onSearch}
            onToggleSideBar={toggleSideBarVisibility} setSearched={function (value: React.SetStateAction<boolean>): void {
              throw new Error('Function not implemented.')
            } }          />
        </div>
        <div className="flex flex-col">
          <SideBar visible={isSideBarVisible} />
        </div>
      </div>
      <div className="bg-neutral-900 object-cover absolute top-14 left-0 bottom-0 w-60"></div>
      <div className="bg-neutral-900 object-cover absolute top-14 left-0 bottom-0 ml-60 w-20"></div>
      <div className="bg-neutral-900 object-cover absolute top-14 right-0 bottom-0 ml-60 w-96"></div>
      <div className="bg-neutral-900 object-cover absolute top-14 left-80 bottom-0 right-0 w-60"></div>
      <div className="bg-neutral-900 object-cover absolute top-14 right-96 w-20 bottom-0"></div>
      <div className="bg-neutral-900 object-cover absolute top-36 left-96 right-96 mr-20 bottom-0 overflow-y-auto max-h-[1000px]">
        <p className="font-bold text-base relative top-5">
          Historique de visionage
        </p>
        <div>
          <p className="font-bold text-base relative mt-12 mb-5">
            Aujourd&apos;hui
          </p>
          <div className="relative mb-4 overflow-hidden group">
            <iframe
              className="rounded-xl"
              width="270"
              height="150"
              src="https://www.youtube.com/embed/UUYv3kk37oQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="absolute text-base font-bold mr-32 left-72 top-0 mb-16 text-white">
              [ Cover ] - Attack on Titan - FINAL SEASON (S4) OP - My War -
              David - Fils de Ange Momone - AM&D
            </div>
            <div className="absolute text-xs mr-0 left-72 top-12 mb-16 text-gray-400">
              David fils de Momone • 2,9 M de vues
            </div>
            <div className="absolute text-xs mr-0 left-72 top-20 mt-1 text-gray-400">
              Mon dernier single est disponible absolument partout
              👉https://bfan.link/j-ai-mange-une-pomme-et-j-ai-plein-d-energie
              Retrouvez-moi sur : ▶ Spotify :
              https://tinyurl.com/spotify-david-momone ▶ Deezer :
              https://tinyurl.com/deezer-david-momone ▶ Apple Music :
              https://tinyurl.com/apple-music-david... Et aussi sur : ▶ TikTok :
              https://www.tiktok.com/@david_fils_de... ▶ Insta :
              https://www.instagram.com/david_fils_... David fils de Momone PS :
              si cette vidéo contient un fan art, sachez que celui-ci a été fait
              par Kaï. Vous pouvez le joindre sur son insta :
              https://www.instagram.com/am_iak/
            </div>
            <div className="bg-neutral-900 object-cover absolute top-28 ml-72 left-0 bottom-0 right-0"></div>
            <div className="bg-neutral-900 absolute h-12 w-20 right-0 -top-0">
              <div id="croix" className="hidden group-hover:block">
                <div className="bg-neutral-100 absolute right-0 top-2 w-1 h-1 bg-gray-500 rounded-full"></div>
                <div className="bg-neutral-100 absolute right-0 top-4 w-1 h-1 bg-gray-500 rounded-full"></div>
                <div className="bg-neutral-100 absolute right-0 top-6 w-1 h-1 bg-gray-500 rounded-full"></div>
                <div>
                  <div className="rounded-full absolute top-0 left-0 right-0 bottom-0 hover:bg-white opacity-25 object-cover w-9 h-9"></div>
                  <div className="absolute h-6 w-0.5 left-4 bg-neutral-100 transform top-1.5 rotate-45"></div>
                  <div className="absolute h-6 w-0.5 left-4 bg-neutral-100 transform top-1.5 -rotate-45"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mb-4 overflow-hidden group">
            <iframe
              className="rounded-xl"
              width="270"
              height="150"
              src="https://www.youtube.com/embed/CqSRxztxcDI"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="absolute text-base font-bold mr-32 left-72 top-0 bottom-0 text-white">
              J&apos;ai Survécu 100 Jours Sur Terraria en Mode Master...
            </div>
            <div className="absolute text-xs mr-0 left-72 top-12 mb-16 text-gray-400">
              Ekyoten • 72 k vues
            </div>
            <div className="absolute text-xs mr-0 left-72 top-20 mt-1 text-gray-400">
              Il y a 10 mois je sortais ma toute première vidéo, survivre 100
              jours en expert sur terraria, 10 mois plus tard je me sens enfin
              prêt à relever le plus gros défi de terraria, survivre 100 jours
              en MASTER ! -- Réseaux-- Discord : https://discord.gg/czjWuPbjTK
              Tiktok : https://www.tiktok.com/@ekyoten Twitch :
              https://www.twitch.tv/ekyoten Youtube : / @ekyoten9088
              -------------------- En espérant que ça vous plaira ! #100days
              #100jours #200days #200jours #300days #300jours #400days #400jours
              #expert #harcore #terraria
            </div>
            <div className="bg-neutral-900 object-cover absolute top-28 ml-72 left-0 bottom-0 right-0"></div>
            <div className="bg-neutral-900 absolute h-12 w-20 right-0 -top-0">
              <div id="croix" className="hidden group-hover:block">
                <div className="bg-neutral-100 absolute right-0 top-2 w-1 h-1 bg-gray-500 rounded-full"></div>
                <div className="bg-neutral-100 absolute right-0 top-4 w-1 h-1 bg-gray-500 rounded-full"></div>
                <div className="bg-neutral-100 absolute right-0 top-6 w-1 h-1 bg-gray-500 rounded-full"></div>
                <div>
                  <div className="rounded-full absolute top-0 left-0 right-0 bottom-0 hover:bg-white opacity-25 object-cover w-9 h-9"></div>
                  <div className="absolute h-6 w-0.5 left-4 bg-neutral-100 transform top-1.5 rotate-45"></div>
                  <div className="absolute h-6 w-0.5 left-4 bg-neutral-100 transform top-1.5 -rotate-45"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mb-4 overflow-hidden group">
            <iframe
              className="rounded-xl"
              width="270"
              height="150"
              src="https://www.youtube.com/embed/VGK9PuFa_Iw"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="absolute text-base font-bold mr-32 left-72 top-0 bottom-0 text-white">
              la magie du jeu vidéo
            </div>
            <div className="absolute text-xs mr-0 left-72 top-12 mb-16 text-gray-400">
              Timy&aposs adventures • 127 vues
            </div>
            <div className="absolute text-xs mr-0 left-72 top-20 mt-1 text-gray-400">
              salut! Aujourd&aposhui je vous palre du jeu vidéo Bon visonnage!
              abonne toi ici: / @timy1411 ejoind l&apos;aventure: 100 abonner:
              novembre 2022 200 abonner: dimanche 26 mars 2023
            </div>
            <div className="bg-neutral-900 object-cover absolute top-28 ml-72 left-0 bottom-0 right-0"></div>
            <div className="bg-neutral-900 absolute h-12 w-20 right-0 -top-0">
              <div id="croix" className="hidden group-hover:block">
                <div className="bg-neutral-100 absolute right-0 top-2 w-1 h-1 bg-gray-500 rounded-full"></div>
                <div className="bg-neutral-100 absolute right-0 top-4 w-1 h-1 bg-gray-500 rounded-full"></div>
                <div className="bg-neutral-100 absolute right-0 top-6 w-1 h-1 bg-gray-500 rounded-full"></div>
                <div>
                  <div className="rounded-full absolute top-0 left-0 right-0 bottom-0 hover:bg-white opacity-25 object-cover w-9 h-9"></div>
                  <div className="absolute h-6 w-0.5 left-4 bg-neutral-100 transform top-1.5 rotate-45"></div>
                  <div className="absolute h-6 w-0.5 left-4 bg-neutral-100 transform top-1.5 -rotate-45"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="font-bold text-base text-white relative mt-12 mb-6">
            Hier
          </p>
          <div>
            <p className="absolute font-bold text-base text-white relative mt-10 mb-5">
              Shorts
              <div className="bg-neutral-100 absolute right-0 top-2 w-1 h-1 bg-gray-500 rounded-full"></div>
              <div className="bg-neutral-100 absolute right-0 top-4 w-1 h-1 bg-gray-500 rounded-full"></div>
              <div className="bg-neutral-100 absolute right-0 top-6 w-1 h-1 bg-gray-500 rounded-full"></div>
            </p>
            <div className="flex flex-row overflow-x-auto max-h-[1000px]">
              <div className="bg-neutral-900 h-88 w-56 group">
                <div className="relative mb-4 mr-1 rounded-xl">
                  <iframe
                    className="rounded-r-xl rounded-t-xl rounded-b-xl"
                    width="220"
                    height="300"
                    src="https://www.youtube.com/embed/6Zm-W5k5Zac"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <div className="relative text-xs top-2 font-bold mt-0 mr-8 text-white">
                    L&apos;EXPOSÉ CATASTROPHIQUE de CHOSS
                  </div>
                  <div className="relative -top-6 left-4 mt-0 mr-8 hidden group-hover:block">
                    <div className="bg-neutral-100 absolute right-0 top-2 w-1 h-1 bg-gray-500 rounded-full"></div>
                    <div className="bg-neutral-100 absolute right-0 top-4 w-1 h-1 bg-gray-500 rounded-full"></div>
                    <div className="bg-neutral-100 absolute right-0 top-6 w-1 h-1 bg-gray-500 rounded-full"></div>
                  </div>
                  <div className="relative text-xs top-2 text-gray-400">
                    3,1 M de vues
                  </div>
                </div>
              </div>
              <div className="bg-neutral-900 h-88 w-56 group">
                <div className="relative mb-4 mr-1 rounded-xl">
                  <iframe
                    className="rounded-r-xl rounded-t-xl rounded-b-xl"
                    width="220"
                    height="300"
                    src="https://www.youtube.com/embed/fq2Frbz14vw"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <div className="relative text-xs top-2 font-bold mt-0 mr-8 text-white">
                    600 NOUVEAUX items AJOUTÉS à Minecraft.. ?
                  </div>
                  <div className="relative -top-6 left-4 mt-0 mr-8 hidden group-hover:block">
                    <div className="bg-neutral-100 absolute right-0 top-2 w-1 h-1 bg-gray-500 rounded-full"></div>
                    <div className="bg-neutral-100 absolute right-0 top-4 w-1 h-1 bg-gray-500 rounded-full"></div>
                    <div className="bg-neutral-100 absolute right-0 top-6 w-1 h-1 bg-gray-500 rounded-full"></div>
                  </div>
                  <div className="relative text-xs top-2 text-gray-400">
                    362 k vues
                  </div>
                </div>
              </div>
              <div className="bg-neutral-900 h-88 w-56 group">
                <div className="relative mb-4 mr-1 rounded-xl">
                  <iframe
                    className="rounded-r-xl rounded-t-xl rounded-b-xl"
                    width="220"
                    height="300"
                    src="https://www.youtube.com/embed/7cp693oSwn4"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <div className="relative text-xs top-2 font-bold mt-0 mr-8 text-white">
                    🤔 L&aposheure est grave…
                  </div>
                  <div className="relative -top-6 left-4 mt-0 mr-8 hidden group-hover:block">
                    <div className="bg-neutral-100 absolute right-0 top-2 w-1 h-1 bg-gray-500 rounded-full"></div>
                    <div className="bg-neutral-100 absolute right-0 top-4 w-1 h-1 bg-gray-500 rounded-full"></div>
                    <div className="bg-neutral-100 absolute right-0 top-6 w-1 h-1 bg-gray-500 rounded-full"></div>
                  </div>
                  <div className="relative text-xs top-2 text-gray-400">
                    1,6 M de vues
                  </div>
                </div>
              </div>
              <div className="bg-neutral-900 h-88 w-56 group">
                <div className="relative mb-4 mr-1 rounded-xl">
                  <iframe
                    className="rounded-r-xl rounded-t-xl rounded-b-xl"
                    width="220"
                    height="300"
                    src="https://www.youtube.com/embed/CIwqBgzcjuc"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <div className="relative text-xs top-2 font-bold mt-0 mr-8 text-white">
                    Je goûte un gâteau interdit en Europe... ⚠️🍰
                  </div>
                  <div className="relative -top-6 left-4 mt-0 mr-8 hidden group-hover:block">
                    <div className="bg-neutral-100 absolute right-0 top-2 w-1 h-1 bg-gray-500 rounded-full"></div>
                    <div className="bg-neutral-100 absolute right-0 top-4 w-1 h-1 bg-gray-500 rounded-full"></div>
                    <div className="bg-neutral-100 absolute right-0 top-6 w-1 h-1 bg-gray-500 rounded-full"></div>
                  </div>
                  <div className="relative text-xs top-2 text-gray-400">
                    3,4 M de vues
                  </div>
                </div>
              </div>
              <div className="bg-neutral-900 h-88 w-56 group">
                <div className="relative mb-4 mr-1 rounded-xl">
                  <iframe
                    className="rounded-r-xl rounded-t-xl rounded-b-xl"
                    width="220"
                    height="300"
                    src="https://www.youtube.com/embed/hGzMeEeZEJo"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <div className="relative text-xs top-2 font-bold mt-0 mr-8 text-white">
                    Tu peux APPELER MARIO AU TÉLÉPHONE ☎️
                  </div>
                  <div className="relative -top-6 left-4 mt-0 mr-8 hidden group-hover:block">
                    <div className="bg-neutral-100 absolute right-0 top-2 w-1 h-1 bg-gray-500 rounded-full"></div>
                    <div className="bg-neutral-100 absolute right-0 top-4 w-1 h-1 bg-gray-500 rounded-full"></div>
                    <div className="bg-neutral-100 absolute right-0 top-6 w-1 h-1 bg-gray-500 rounded-full"></div>
                  </div>
                  <div className="relative text-xs top-2 text-gray-400">
                    1 M de vues
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-4 text-xs text-gray-400">
              _________________________________________________________________________________________________________________________________________
            </div>
          </div>
          <div className="relative mb-4 overflow-hidden group">
            <iframe
              className="rounded-xl"
              width="270"
              height="150"
              src="https://www.youtube.com/embed/4kMlLdX5lbw"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="absolute text-base font-bold mr-32 left-72 top-0 bottom-0 text-white">
              Finir Mario Bros DS sans MOURIR ?
            </div>
            <div className="absolute text-xs mr-0 left-72 top-12 mb-16 text-gray-400">
              Lamatrak • 58 k vues
            </div>
            <div className="absolute text-xs mr-0 left-72 top-20 mt-1 text-gray-400">
              Si je meurs, je recommence tout le jeu ! C&apos;est le défi que je
              me suis lancé aujourd&apos;hui et que j&apos;ai réalisé en live
              sur twitch: https://www.twitch.tv/lamatrak Il s&apos;agit de ma
              première vidéo Youtube, j&apos;ai tout fait tout seul, de la minia
              au montage, n&apos;hésitez pas à me dire ce que vous en pensez !
              biz.
            </div>
            <div className="bg-neutral-900 object-cover absolute top-28 ml-72 left-0 bottom-0 right-0"></div>
            <div className="bg-neutral-900 absolute h-12 w-20 right-0 -top-0">
              <div id="croix" className="hidden group-hover:block">
                <div className="bg-neutral-100 absolute right-0 top-2 w-1 h-1 bg-gray-500 rounded-full"></div>
                <div className="bg-neutral-100 absolute right-0 top-4 w-1 h-1 bg-gray-500 rounded-full"></div>
                <div className="bg-neutral-100 absolute right-0 top-6 w-1 h-1 bg-gray-500 rounded-full"></div>
                <div>
                  <div className="rounded-full absolute top-0 left-0 right-0 bottom-0 hover:bg-white opacity-25 object-cover w-9 h-9"></div>
                  <div className="absolute h-6 w-0.5 left-4 bg-neutral-100 transform top-1.5 rotate-45"></div>
                  <div className="absolute h-6 w-0.5 left-4 bg-neutral-100 transform top-1.5 -rotate-45"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mb-4 overflow-hidden group">
            <iframe
              className="rounded-xl"
              width="270"
              height="150"
              src="https://www.youtube.com/embed/Cp-n7RgynL4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="absolute text-base font-bold mr-32 left-72 top-0 bottom-0 text-white">
              Ce Speedrunneur n&apos;est Littéralement pas Humain...
            </div>
            <div className="absolute text-xs mr-0 left-72 top-12 mb-16 text-gray-400">
              Julgane • 682 k vues
            </div>
            <div className="absolute text-xs mr-0 left-72 top-20 mt-1 text-gray-400">
              On regarde PLEINS de Records du Monde de Speedrun sur pleins de
              Jeux ! Y a d&apos;ailleurs des ordinateurs qui jouent
              parfaitement, bref likez commentez si vous aimez svp....... Liste
              des vidéos regardées: https://pastebin.com/CFiM8LFH ▶Twitch :
              https://www.twitch.tv/julgane ▶Discord :
              https://discord.com/invite/b2HzbF2 ▶Twitter :
              https://twitter.com/Julgane ▶Speedrun :
              https://www.speedrun.com/user/Julgane Montage par:
              https://twitter.com/Fast_z34 & Moi #Julgane #Speedrun #React
            </div>
            <div className="bg-neutral-900 object-cover absolute top-28 ml-72 left-0 bottom-0 right-0"></div>
            <div className="bg-neutral-900 absolute h-12 w-20 right-0 -top-0">
              <div id="croix" className="hidden group-hover:block">
                <div className="bg-neutral-100 absolute right-0 top-2 w-1 h-1 bg-gray-500 rounded-full"></div>
                <div className="bg-neutral-100 absolute right-0 top-4 w-1 h-1 bg-gray-500 rounded-full"></div>
                <div className="bg-neutral-100 absolute right-0 top-6 w-1 h-1 bg-gray-500 rounded-full"></div>
                <div>
                  <div className="rounded-full absolute top-0 left-0 right-0 bottom-0 hover:bg-white opacity-25 object-cover w-9 h-9"></div>
                  <div className="absolute h-6 w-0.5 left-4 bg-neutral-100 transform top-1.5 rotate-45"></div>
                  <div className="absolute h-6 w-0.5 left-4 bg-neutral-100 transform top-1.5 -rotate-45"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mb-4 overflow-hidden group">
            <iframe
              className="rounded-xl"
              width="270"
              height="150"
              src="https://www.youtube.com/embed/gMuPUsX3rU4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="absolute text-base font-bold mr-32 left-72 top-0 bottom-0 text-white">
              5 épisodes LÉGENDAIRES des SIMPSON (à voir absolument) #2
            </div>
            <div className="absolute text-xs mr-0 left-72 top-12 mb-16 text-gray-400">
              Cinéma Trash • 363 k vues
            </div>
            <div className="absolute text-xs mr-0 left-72 top-20 mt-1 text-gray-400">
              Est ce que vous connaissez vraiment tout des Simpson ? La série va
              fêter son 750ème épisode, regarder les 34 saisons entier vous
              demanderait plus de 273 heures ! La naissance de Bart, le père
              secret de Lisa… il y a forcément des choses que vous avez manqué.
              Des épisodes légendaires, que vous devez absolument aller voir !
              Teromik : https://twitter.com/leTeromik Mai-Lie :
              https://twitter.com/MaiLieBaelish Nox :
              https://twitter.com/MrElNox ▼▼ DÉROULE LA DESCRIPTION ▼▼ 💃 TikTok
              ► https://www.tiktok.com/@trasheurs 😂 Facebook ►
              https://www.facebook.com/trasheurs.vi... 👀 Instagram ►
              https://www.instagram.com/trash_neo_/ 🎮 Discord ►
              https://discord.gg/YGAaDD6Cy2
            </div>
            <div className="bg-neutral-900 object-cover absolute top-28 ml-72 left-0 bottom-0 right-0"></div>
            <div className="bg-neutral-900 absolute h-12 w-20 right-0 -top-0">
              <div id="croix" className="hidden group-hover:block">
                <div className="bg-neutral-100 absolute right-0 top-2 w-1 h-1 bg-gray-500 rounded-full"></div>
                <div className="bg-neutral-100 absolute right-0 top-4 w-1 h-1 bg-gray-500 rounded-full"></div>
                <div className="bg-neutral-100 absolute right-0 top-6 w-1 h-1 bg-gray-500 rounded-full"></div>
                <div>
                  <div className="rounded-full absolute top-0 left-0 right-0 bottom-0 hover:bg-white opacity-25 object-cover w-9 h-9"></div>
                  <div className="absolute h-6 w-0.5 left-4 bg-neutral-100 transform top-1.5 rotate-45"></div>
                  <div className="absolute h-6 w-0.5 left-4 bg-neutral-100 transform top-1.5 -rotate-45"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mb-4 overflow-hidden group">
            <iframe
              className="rounded-xl"
              width="270"
              height="150"
              src="https://www.youtube.com/embed/AHNzKWuUzxY"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="absolute text-base font-bold mr-32 left-72 top-0 bottom-0 text-white">
              TEST EN CARTON #110 - Hogwarts Legacy
            </div>
            <div className="absolute text-xs mr-0 left-72 top-12 mb-16 text-gray-400">
              Savun • 302 k vues
            </div>
            <div className="absolute text-xs mr-0 left-72 top-20 mt-1 text-gray-400">
              - Chaîne Twitch : https://www.twitch.tv/savun - Chaîne rediff VOD
              : / @vayke - S&apos;abonner l Twitter :
              https://twitter.com/Savunew - Facebook :
              https://www.facebook.com/Savun-211958... Présentation de,
              apparemment, &quot;l&apos;exceptionnel Hogwarts Legacy :
              l&apos;héritage de Poudlard&quot; (spoiler : non) le jeu Harry
              Potter Conditions de test : version PS5 sur la PS5 État de la run
              à la sortie du TEC : - Aventure principale terminée - Jeu terminé
              - 29h de jeu - Jeu fait en mode Normal avec la maison Serpentard -
              61% de Progression globale - 83% de Progression pour
              &quot;Combat&quot; - 94% de Progression pour &quot;Quêtes&quot; -
              19% de Progression pour &quot;Exploration&quot; - 86% de
              Progression pour &quot;Guide du Sorcier&quot; - 25% de Progression
              pour &quot;Salle sur Demande&quot;
              --------------------------------------------------------------------------
              Musiques utilisées par ordre d&apos;apparition : - Rugrats Intro /
              Razmoket thème - Joakim Karud - Take It Easy - Banjo-Kazooie -
              Mumbo&apos;s Moutain - Joakim Karud - Waves (Thème de la chaîne) -
              Rayman 3 - Globox - Sonic Unleashed - Apotos Hub Day - Pokémon XD
              : Dr. Kaminko&apos;s Manor - Joakim Karud - Enjoy - Pokémon
              Colosseum - Normal Battle - Dark Souls 3 - Iudex Gundyr - Lakey
              Inspired - Me 2 - Okami - Agata Forest - Pokémon XD - ONBS - Harry
              Potter - Flute - Joakim Karud - Classic (outro de la chaîne)
              --------------------------------------------------------------------------
              Crédits : Le SoundCloud de Joakim Karud :
              https://soundcloud.com/joakimkarud Le Youtube de Joakim Karud : /
              joakimkarud Le profil Artist Union de Joakim Karud :
              https://theartistunion.com/joakimkarud
              --------------------------------------------------------------------------
              Gameplay : Gameplay de Hogwarts Legacy : l&apos;Héritage de
              Poudlard par moi-même S.
            </div>
            <div className="bg-neutral-900 object-cover absolute top-28 ml-72 left-0 bottom-0 right-0"></div>
            <div className="bg-neutral-900 absolute h-12 w-20 right-0 -top-0">
              <div id="croix" className="hidden group-hover:block">
                <div className="bg-neutral-100 absolute right-0 top-2 w-1 h-1 bg-gray-500 rounded-full"></div>
                <div className="bg-neutral-100 absolute right-0 top-4 w-1 h-1 bg-gray-500 rounded-full"></div>
                <div className="bg-neutral-100 absolute right-0 top-6 w-1 h-1 bg-gray-500 rounded-full"></div>
                <div>
                  <div className="rounded-full absolute top-0 left-0 right-0 bottom-0 hover:bg-white opacity-25 object-cover w-9 h-9"></div>
                  <div className="absolute h-6 w-0.5 left-4 bg-neutral-100 transform top-1.5 rotate-45"></div>
                  <div className="absolute h-6 w-0.5 left-4 bg-neutral-100 transform top-1.5 -rotate-45"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mb-4 overflow-hidden group">
            <iframe
              className="rounded-xl"
              width="270"
              height="150"
              src="https://www.youtube.com/embed/UobmLsDbiTg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="absolute text-base font-bold mr-32 left-72 top-0 bottom-0 text-white">
              Rocket League est le jeu le plus dur du monde.
            </div>
            <div className="absolute text-xs mr-0 left-72 top-12 mb-16 text-gray-400">
              EGO • 534 k vues
            </div>
            <div className="absolute text-xs mr-0 left-72 top-20 mt-1 text-gray-400">
              On parle de LoL, on parle de Cs, on parle de Valo, mais tout le
              monde semble oublier Rocket League. Alors, moi, je vous explique.
              _______________________________________________________ Mes
              réseaux : Twitch : https://www.twitch.tv/ego_ Twitter :
              https://twitter.com/rl_ego TikTok :
              https://www.tiktok.com/@ego_rl1 Discord : https://discord.gg/
              uufH7HXYh2 Mail : ego.pro003@gmail.com _ Musiques d&apos;Epidemic
              Sound : 1. Daytona - BLUE STEEL 2. Blue Dragon - Toby Tranter 3.
              Sticky Finger - Ballpoint _ Miniature par Nekatt :
              https://www.behance.net/jc161 _ #rocketleague #rlcs #esports
            </div>
            <div className="bg-neutral-900 object-cover absolute top-28 ml-72 left-0 bottom-0 right-0"></div>
            <div className="bg-neutral-900 absolute h-12 w-20 right-0 -top-0">
              <div id="croix" className="hidden group-hover:block">
                <div className="bg-neutral-100 absolute right-0 top-2 w-1 h-1 bg-gray-500 rounded-full"></div>
                <div className="bg-neutral-100 absolute right-0 top-4 w-1 h-1 bg-gray-500 rounded-full"></div>
                <div className="bg-neutral-100 absolute right-0 top-6 w-1 h-1 bg-gray-500 rounded-full"></div>
                <div>
                  <div className="rounded-full absolute top-0 left-0 right-0 bottom-0 hover:bg-white opacity-25 object-cover w-9 h-9"></div>
                  <div className="absolute h-6 w-0.5 left-4 bg-neutral-100 transform top-1.5 rotate-45"></div>
                  <div className="absolute h-6 w-0.5 left-4 bg-neutral-100 transform top-1.5 -rotate-45"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default History
