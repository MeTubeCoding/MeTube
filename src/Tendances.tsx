import React, {useState} from 'react';

import logo from './logo.svg';
import './Tendances.css';

// import composant  :

import { PassThrough } from 'stream';

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  };

  const closeMenu = () => {
    setIsMenuOpen(false)
  };

  return (
    <div className="menu-container">
      <div className={`menu ${isMenuOpen ? 'open' : ''} texts`}>
        <ul>
          <li>
            <div className="menu-button" onClick={toggleMenu}>
              {isMenuOpen ? (
                <button className="material-icons">Close</button>
              ) : (
                <button className="material-icons">Menu</button>
              )}
            </div>
            {isMenuOpen && (
              <div>
               <li>
                  <a href="index.tsx">Accueil</a>
                </li>
                <li>
                  <a href="pages/timeline.tsx">Recommandés</a>
                </li>
                <li>
                  <a href="#">Tendances</a>
                </li>
                <li>
                  <a href="#">Abonnements</a>
                </li>
                <li>
                  <a href="#">Bibliothèque</a>
                </li>
                <li>
                  <a href="#">Historique</a>
                </li>
              </div>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};




// ================================================================================================
// ================================================================================================
// ================================================================================================



function Tendances() {
return (
    <div className = "h-screen bg-gray-900 text-white font-sans font-normal text-base leading-relaxed text-left m-0 p-0 h-screen">
      <div className="text-center flex flex-row bg-gray-800 text-white p-4 flex justify-around items-center">
        <div className='flex flex-row justify-between items-center mr-auto'>
        <div className='titre'>
        <a href='App.tsx'><img className="mr-10 w-1/2" src="https://cdn.discordapp.com/attachments/1019222515962368112/1088482444207988838/Metube_logo.png"/></a>
        </div>
        </div>
        <div className="flex items-center justify-between mr-10 bg-gray-800">
          <input type="text" placeholder="Rechercher sur MeTube..." className='w:90 pl-1 rounded-2xl border border-gray-600 bg-gray-800 hover:bg-gray-700 text-white placeholder:italic' />
          <button className='bg-gray-600 border-none rounded-2xl px-4 py-2 mr-1 text-white hover:bg-gray-700'>Rechercher</button>
        </div>
      </div>
      <div>
          {Menu()}
        </div>
      <div className="flex flex-row justify-center items-center my-3 mx-1/100 lg:mx-5/100">
        <img className='rounded-full mr-2%' src="https://www.youtube.com/img/trending/avatar/trending.png"></img>
        <h3 className='m-0 p-0 text-center leading-normal text-3xl'>TENDANCES</h3>
        </div>
      <div className="flex items-center justify-center bg-gray-900">
        <div className="ml-3.5% mr-5/100 p-0 text-center flex flex-col">
        <h4>NOUVEAUTES</h4>
        <iframe className='mr-1% rounded-lg'
            width="300"
            height="170"
            src="https://www.youtube.com/embed/SRpYxmmy6EI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <iframe className='mr-1% rounded-lg'
            width="300"
            height="170"
            src="https://www.youtube.com/embed/dMekskqXbL4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="mr-5/100 p-0 text-center flex flex-col">
        <h4>MUSIQUE</h4>
        <iframe className='mr-1% rounded-lg'
            width="300"
            height="170"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
           <iframe  className='mr-1% rounded-lg'
            width="300"
            height="170"
            src="https://www.youtube.com/embed/3NoKAOTE_ZI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="mr-5/100 p-0 text-center flex flex-col">
        <h4>FILMS</h4>
        <iframe   className='mr-1% rounded-lg'
            width="300"
            height="170"
            src="https://www.youtube.com/embed/RjNcTBXTk4I"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
           <iframe  className='mr-1% rounded-lg'
            width="300"
            height="170"
            src="https://www.youtube.com/embed/wK69QJ2ESO0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="mr-5/100 p-0 text-center flex flex-col">
        <h4>JEUX VIDEOS</h4>
        <iframe  className='mr-1% rounded-lg'
            width="300"
            height="170"
            src="https://www.youtube.com/embed/loarI5X93wI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <iframe className='mr-1% rounded-lg'
            width="300"
            height="170"
            src="https://www.youtube.com/embed/QBBLxrvOmqw"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      </div>
  );
}
export default Tendances;