import React, { useState } from 'react'
import { resolveProjectReferencePath } from 'typescript'
import './abonnements.css'

const test = document.getElementById('test')

test?.addEventListener('click', () => {
  fetch('http://localhost:5600/demo')
  // .then(response => response.text())
  // .then(data => console.log(data))
  // .catch(error => console.error(error));
})

export default function Abonnements() {
  return (
    <div className="Abonnements">
      <div className="bg-neutral-900 object-cover absolute top-0 left-0 right-0">
        <img src="menu-btn.png" className="object-cover w-5 m-5"></img>
        <div className="rounded-full absolute top-0 left-0 right-0 bottom-0 hover:bg-white opacity-25 object-cover w-9 m-3"></div>
      </div>
      <div className="bg-neutral-900 object-cover absolute top-14 left-0 bottom-0 w-60"></div>
      <div className="bg-neutral-900 object-cover absolute top-14 left-0 bottom-0 ml-60 w-20"></div>
      <div className="bg-neutral-900 object-cover absolute top-14 right-0 bottom-0 ml-60 w-96"></div>
      <div className="bg-neutral-900 object-cover absolute top-14 left-80 bottom-0 right-0 w-60"></div>
      <div className="bg-neutral-900 object-cover absolute top-14 right-96 w-20 bottom-0"></div>

      <div className="bg-neutral-900 object-cover absolute top-14 left-80 right-96 mr-20 bottom-0 overflow-y-auto max-h-[1000px]">
        <div>
          <p className="font-bold text-base text-white relative mt-12 mb-5">
            Aujourd&apos;hui
          </p>
          <div className="relative mb-4 overflow-hidden group">
            <iframe
              className="rounded-xl"
              width="270"
              height="150"
              src="https://www.youtube.com/embed/Zy0JKRMtEI8"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="absolute text-base font-bold mr-32 left-72 top-0 mb-16 text-white">
              On découvre le Japon avec la School ! (GTA RP SCHOOL # 6)
            </div>
            <div className="absolute text-xs mr-0 left-72 top-12 mb-16 text-gray-400">
              Inoxtag • 762 k vues Diffusé en direct il y a 14 heures
            </div>
            <div className="absolute text-xs mr-0 left-72 top-20 text-gray-400">
              🎥 Chaîne secondaire : https://inoxtag.tv/inoxtag2.0 💙 T'abonner
              : https://inoxtag.tv/subscribe 🔔✅ Activez la cloche de
              notification, afin d'être au courant de mes prochains lives ou
              vidéos ! 📸 Instagram: @Inoxtag / https://inoxtag.tv/instagram 🐤
              Twitter: @Inoxtag / https://inoxtag.tv/twitter 🚀 Actualités:
              @InoxtagCrew / https://inoxtag.tv/news 📞 Discord:
              https://inoxtag.tv/discord 💜 Twitch: https://inoxtag.tv/twitch 📡
              Reddit: https://inoxtag.tv/reddit 💎 Deviens Sponsor:
              https://inoxtag.tv/sponsor 💌 SponsorShip : inoxtag@talentweb.fr
              (-10% dans toute la boutique Roccat avec le code Inoxtag):
              https://roc.gg/RocInoxtag
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
              src="https://www.youtube.com/embed/iU34s9rbPoE"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="absolute text-base font-bold mr-32 left-72 top-0 bottom-0 text-white">
              J'ai acheté tous les objets des pubs insta (on a explosé le budget
              😭) #4
            </div>
            <div className="absolute text-xs mr-0 left-72 top-12 mb-16 text-gray-400">
              Amixem • 1,6 M vues il y a 21 heures
            </div>
            <div className="absolute text-xs mr-0 left-72 top-20 text-gray-400">
              On a vraiment été trop loin avec nos objets instagram ! Tentez de
              remporter une Tesla modèle Y en souscrivant à tout abonnement
              NordVPN de 2 ans en passant par mon lien →
              https://nordvpn.com/amixem Inscription au jeu concours disponible
              jusqu'au 1er Mai, seulement pour les résidents Français Ma
              boutique SPACEFOX.shop ! : http://bit.ly/3KskVsU SUIS MOI ICI
              C'EST BIEN AUSSI : → INSTAGRAM : http://bit.ly/amixeminsta →
              TIKTOK : https://bit.ly/AmixemTikTok → TWITTER :
              http://bit.ly/AmixemTwitter → TWITCH AMIXEM :
              http://bit.ly/AmixemTwitch → SNAPCHAT : amixemsnap Responsable de
              production : Solène Chupin Chargé de production : Thibaut Trotin
              Réalisateur plateau : Yann Goy Chef Opérateur : Théo Sauvion
              Cadrage : Florent Bodenez, Baptiste Constant Montage : Quentin
              Branquart
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
              src="https://www.youtube.com/embed/8pl_7L64rCg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="absolute text-base font-bold mr-32 left-72 top-0 bottom-0 text-white">
              LES TOURS DE MAGIE LES PLUS RATÉS
            </div>
            <div className="absolute text-xs mr-0 left-72 top-12 mb-16 text-gray-400">
              Donovan • 4,5k vues il y a 22heures
            </div>
            <div className="absolute text-xs mr-0 left-72 top-20 text-gray-400">
              J'espère que cette vidéo vous plaira ! On se croise en spectacle?
              BILLETERIE : https://donovan.bleucitron.net Merci à Kilam pour le
              montage et la miniature ! (Son compte insta :
              https://www.instagram.com/kilam.simav... )
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
            <div className="absolute text-xs mr-0 left-72 top-20 text-gray-400">
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
              Ce Speedrunneur nest Littéralement pas Humain...
            </div>
            <div className="absolute text-xs mr-0 left-72 top-12 mb-16 text-gray-400">
              Julgane • 682 k vues
            </div>
            <div className="absolute text-xs mr-0 left-72 top-20 text-gray-400">
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
            <div className="absolute text-xs mr-0 left-72 top-20 text-gray-400">
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
            <div className="absolute text-xs mr-0 left-72 top-20 text-gray-400">
              - Chaîne Twitch : https://www.twitch.tv/savun - Chaîne rediff VOD
              : / @vayke - S&apos;abonner l Twitter :
              https://twitter.com/Savunew - Facebook :
              https://www.facebook.com/Savun-211958... Présentation de,
              apparemment, "l&apos;exceptionnel Hogwarts Legacy :
              l&apos;héritage de Poudlard" (spoiler : non) le jeu Harry Potter
              Conditions de test : version PS5 sur la PS5 État de la run à la
              sortie du TEC : - Aventure principale terminée - Jeu terminé - 29h
              de jeu - Jeu fait en mode Normal avec la maison Serpentard - 61%
              de Progression globale - 83% de Progression pour "Combat" - 94% de
              Progression pour "Quêtes" - 19% de Progression pour "Exploration"
              - 86% de Progression pour "Guide du Sorcier" - 25% de Progression
              pour "Salle sur Demande"
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
            <div className="absolute text-xs mr-0 left-72 top-20 text-gray-400">
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
        <div className="mb-4 text-xs text-gray-400">
          _________________________________________________________________________________________________________________________________________
        </div>
        <div>
          <p className="font-bold text-base text-white relative mt-12 mb-6">
            Recent
          </p>
          <div className="relative mb-4 overflow-hidden group">
            <iframe
              className="rounded-xl"
              width="270"
              height="150"
              src="https://www.youtube.com/embed/Vv98-xIax3M"
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
            <div className="absolute text-xs mr-0 left-72 top-20 text-gray-400">
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
              src="https://www.youtube.com/embed/GNbV9tcCVSA"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="absolute text-base font-bold mr-32 left-72 top-0 bottom-0 text-white">
              Ce Speedrunneur nest Littéralement pas Humain...
            </div>
            <div className="absolute text-xs mr-0 left-72 top-12 mb-16 text-gray-400">
              Julgane • 682 k vues
            </div>
            <div className="absolute text-xs mr-0 left-72 top-20 text-gray-400">
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
              src="https://www.youtube.com/embed/ZwLRjyO_Tks"
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
            <div className="absolute text-xs mr-0 left-72 top-20 text-gray-400">
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
              src="https://www.youtube.com/embed/6V_vOJY04AE"
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
            <div className="absolute text-xs mr-0 left-72 top-20 text-gray-400">
              - Chaîne Twitch : https://www.twitch.tv/savun - Chaîne rediff VOD
              : / @vayke - S&apos;abonner l Twitter :
              https://twitter.com/Savunew - Facebook :
              https://www.facebook.com/Savun-211958... Présentation de,
              apparemment, "l&apos;exceptionnel Hogwarts Legacy :
              l&apos;héritage de Poudlard" (spoiler : non) le jeu Harry Potter
              Conditions de test : version PS5 sur la PS5 État de la run à la
              sortie du TEC : - Aventure principale terminée - Jeu terminé - 29h
              de jeu - Jeu fait en mode Normal avec la maison Serpentard - 61%
              de Progression globale - 83% de Progression pour "Combat" - 94% de
              Progression pour "Quêtes" - 19% de Progression pour "Exploration"
              - 86% de Progression pour "Guide du Sorcier" - 25% de Progression
              pour "Salle sur Demande"
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
              src="https://www.youtube.com/embed/ggAgLZ9CMU4"
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
            <div className="absolute text-xs mr-0 left-72 top-20 text-gray-400">
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
        <div className="mb-4 text-xs text-gray-400">
          _________________________________________________________________________________________________________________________________________
        </div>
        <div>
          <p className="font-bold text-base text-white relative mt-12 mb-6">
            Cette semaine
          </p>
          <div className="relative mb-4 overflow-hidden group">
            <iframe
              className="rounded-xl"
              width="270"
              height="150"
              src="https://www.youtube.com/embed/Vv98-xIax3M"
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
            <div className="absolute text-xs mr-0 left-72 top-20 text-gray-400">
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
              src="https://www.youtube.com/embed/GNbV9tcCVSA"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="absolute text-base font-bold mr-32 left-72 top-0 bottom-0 text-white">
              Ce Speedrunneur nest Littéralement pas Humain...
            </div>
            <div className="absolute text-xs mr-0 left-72 top-12 mb-16 text-gray-400">
              Julgane • 682 k vues
            </div>
            <div className="absolute text-xs mr-0 left-72 top-20 text-gray-400">
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
              src="https://www.youtube.com/embed/ZwLRjyO_Tks"
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
            <div className="absolute text-xs mr-0 left-72 top-20 text-gray-400">
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
              src="https://www.youtube.com/embed/6V_vOJY04AE"
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
            <div className="absolute text-xs mr-0 left-72 top-20 text-gray-400">
              - Chaîne Twitch : https://www.twitch.tv/savun - Chaîne rediff VOD
              : / @vayke - S&apos;abonner l Twitter :
              https://twitter.com/Savunew - Facebook :
              https://www.facebook.com/Savun-211958... Présentation de,
              apparemment, "l&apos;exceptionnel Hogwarts Legacy :
              l&apos;héritage de Poudlard" (spoiler : non) le jeu Harry Potter
              Conditions de test : version PS5 sur la PS5 État de la run à la
              sortie du TEC : - Aventure principale terminée - Jeu terminé - 29h
              de jeu - Jeu fait en mode Normal avec la maison Serpentard - 61%
              de Progression globale - 83% de Progression pour "Combat" - 94% de
              Progression pour "Quêtes" - 19% de Progression pour "Exploration"
              - 86% de Progression pour "Guide du Sorcier" - 25% de Progression
              pour "Salle sur Demande"
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
              src="https://www.youtube.com/embed/ggAgLZ9CMU4"
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
            <div className="absolute text-xs mr-0 left-72 top-20 text-gray-400">
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
        <div className="mb-4 text-xs text-gray-400">
          _________________________________________________________________________________________________________________________________________
        </div>
        <div>
          <p className="font-bold text-base text-white relative mt-12 mb-6">
            Ce mois ci
          </p>
          <div className="relative mb-4 overflow-hidden group">
            <iframe
              className="rounded-xl"
              width="270"
              height="150"
              src="https://www.youtube.com/embed/Vv98-xIax3M"
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
            <div className="absolute text-xs mr-0 left-72 top-20 text-gray-400">
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
              src="https://www.youtube.com/embed/GNbV9tcCVSA"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="absolute text-base font-bold mr-32 left-72 top-0 bottom-0 text-white">
              Ce Speedrunneur nest Littéralement pas Humain...
            </div>
            <div className="absolute text-xs mr-0 left-72 top-12 mb-16 text-gray-400">
              Julgane • 682 k vues
            </div>
            <div className="absolute text-xs mr-0 left-72 top-20 text-gray-400">
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
              src="https://www.youtube.com/embed/ZwLRjyO_Tks"
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
            <div className="absolute text-xs mr-0 left-72 top-20 text-gray-400">
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
              src="https://www.youtube.com/embed/6V_vOJY04AE"
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
            <div className="absolute text-xs mr-0 left-72 top-20 text-gray-400">
              - Chaîne Twitch : https://www.twitch.tv/savun - Chaîne rediff VOD
              : / @vayke - S&apos;abonner l Twitter :
              https://twitter.com/Savunew - Facebook :
              https://www.facebook.com/Savun-211958... Présentation de,
              apparemment, "l&apos;exceptionnel Hogwarts Legacy :
              l&apos;héritage de Poudlard" (spoiler : non) le jeu Harry Potter
              Conditions de test : version PS5 sur la PS5 État de la run à la
              sortie du TEC : - Aventure principale terminée - Jeu terminé - 29h
              de jeu - Jeu fait en mode Normal avec la maison Serpentard - 61%
              de Progression globale - 83% de Progression pour "Combat" - 94% de
              Progression pour "Quêtes" - 19% de Progression pour "Exploration"
              - 86% de Progression pour "Guide du Sorcier" - 25% de Progression
              pour "Salle sur Demande"
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
              src="https://www.youtube.com/embed/ggAgLZ9CMU4"
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
            <div className="absolute text-xs mr-0 left-72 top-20 text-gray-400">
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
        <div className="mb-4 text-xs text-gray-400">
          _________________________________________________________________________________________________________________________________________
        </div>
        <div>
          <p className="font-bold text-base text-white relative mt-12 mb-6">
            Publications plus anciennes
          </p>
          <div className="relative mb-4 overflow-hidden group">
            <iframe
              className="rounded-xl"
              width="270"
              height="150"
              src="https://www.youtube.com/embed/Vv98-xIax3M"
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
            <div className="absolute text-xs mr-0 left-72 top-20 text-gray-400">
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
              src="https://www.youtube.com/embed/GNbV9tcCVSA"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="absolute text-base font-bold mr-32 left-72 top-0 bottom-0 text-white">
              Ce Speedrunneur nest Littéralement pas Humain...
            </div>
            <div className="absolute text-xs mr-0 left-72 top-12 mb-16 text-gray-400">
              Julgane • 682 k vues
            </div>
            <div className="absolute text-xs mr-0 left-72 top-20 text-gray-400">
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
              src="https://www.youtube.com/embed/ZwLRjyO_Tks"
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
            <div className="absolute text-xs mr-0 left-72 top-20 text-gray-400">
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
              src="https://www.youtube.com/embed/6V_vOJY04AE"
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
            <div className="absolute text-xs mr-0 left-72 top-20 text-gray-400">
              - Chaîne Twitch : https://www.twitch.tv/savun - Chaîne rediff VOD
              : / @vayke - S&apos;abonner l Twitter :
              https://twitter.com/Savunew - Facebook :
              https://www.facebook.com/Savun-211958... Présentation de,
              apparemment, "l&apos;exceptionnel Hogwarts Legacy :
              l&apos;héritage de Poudlard" (spoiler : non) le jeu Harry Potter
              Conditions de test : version PS5 sur la PS5 État de la run à la
              sortie du TEC : - Aventure principale terminée - Jeu terminé - 29h
              de jeu - Jeu fait en mode Normal avec la maison Serpentard - 61%
              de Progression globale - 83% de Progression pour "Combat" - 94% de
              Progression pour "Quêtes" - 19% de Progression pour "Exploration"
              - 86% de Progression pour "Guide du Sorcier" - 25% de Progression
              pour "Salle sur Demande"
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
              src="https://www.youtube.com/embed/ggAgLZ9CMU4"
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
            <div className="absolute text-xs mr-0 left-72 top-20 text-gray-400">
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
