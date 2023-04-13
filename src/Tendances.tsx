import React, { useState } from 'react'

import logo from './logo.svg'
import './Tendances.css'

// import composant  :

import { PassThrough } from 'stream'
//import { BrowserRouter as Router, Route, Routes as Switch, Link } from 'react-router-dom'

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    //<Router>
    <div className='menu-container'>
      <div className={`menu ${isMenuOpen ? 'open' : ''} texts`}>
        <ul>
          <li>
            <div className='menu-button' onClick={toggleMenu}>
              {isMenuOpen ? (
                <div className='ml-3 md-6 flex items-center'>
                  <button className='material-icons hover:bg-neutral-700 w-10 h-10 rounded-full active:bg-neutral-800'>
                    ☰
                  </button>
                  <p className='ml-2'>Close</p>
                </div>
              ) : (
                <div className='ml-3 md-6 flex items-center'>
                  <button className='material-icons hover:bg-neutral-700 w-10 h-10 rounded-full active:bg-neutral-800'>
                    ☰
                  </button>
                  <p className='ml-2'>Menu</p>
                </div>
              )}
            </div>
            {isMenuOpen && (
              <div>
                <li className='material-icons hover:bg-neutral-700 p-3 rounded-lg active:bg-neutral-800'>
                  <a href='App.tsx' className='text-align:center'>
                    Accueil
                  </a>
                </li>
                <li className='hover:bg-neutral-700 p-3 rounded-lg active:bg-neutral-800'>
                  <a href='pages/timeline.tsx'>Recommandations</a>
                </li>
                <li className='hover:bg-neutral-700 p-3 rounded-lg active:bg-neutral-800'>
                  <a href='/Tendances'>Tendances</a>
                </li>
                <li className='hover:bg-neutral-700 p-3 rounded-lg active:bg-neutral-800'>
                  <a href='#'>Abonnements</a>
                </li>
                <li className='hover:bg-neutral-700 p-3 rounded-lg active:bg-neutral-800'>
                  <a href='#'>Bibliothèque</a>
                </li>
                <li className='hover:bg-neutral-700 p-3 rounded-lg active:bg-neutral-800'>
                  <a href='#'>Historique</a>
                </li>
              </div>
            )}
          </li>
        </ul>
      </div>
    </div>
    //</Router>
  )
}

// ================================================================================================
// ================================================================================================
// ================================================================================================

function Tendances() {
  return (
    <div className='h-screen bg-neutral-900 text-white font-sans font-normal text-base leading-relaxed text-left m-0 p-0 h-screen'>
      <div className='text-center flex flex-row bg-neutral-800 text-white p-4 flex justify-around items-center'>
        <div className='flex flex-row justify-between items-center mr-auto'>
          <div className='titre'>
            <a href='App.tsx'>
              <img
                className='mr-10 w-1/2'
                src='https://cdn.discordapp.com/attachments/1019222515962368112/1088482444207988838/Metube_logo.png'
              />
            </a>
          </div>
        </div>
        <div className='flex items-center justify-between mr-10 bg-neutral-800'>
          <input
            type='text'
            placeholder='Rechercher sur MeTube...'
            className='w:90 px-1 py-2 rounded-2xl border border-neutral-600 bg-neutral-800 hover:bg-neutral-700 text-white placeholder:italic'
          />
          <button className='bg-neutral-600 border-none rounded-2xl px-4 py-2 mr-1 text-white hover:bg-blue-700'>
            Rechercher
          </button>
        </div>
      </div>
      <div className='flex flex-row justify-start h-screen bg-neutral-900'>
        <div className='bg-neutral-700 px-8 mr-20 '>{Menu()}</div>
        <div>
          <div className='flex flex-row justify-center items-center my-3 mx-1/100 lg:mx-5/100'>
            <img
              className='rounded-full mr-2%'
              src='https://www.youtube.com/img/trending/avatar/trending.png'
            ></img>
            <h3 className='m-0 p-0 text-center leading-normal text-3xl'>
              TENDANCES
            </h3>
          </div>
          <div className='flex  items-center justify-center bg-neutral-900'>
            <div className='ml-3.5% mr-5/100 p-0 text-center flex flex-col'>
              <h4>NOUVEAUTES</h4>
              <iframe
                className='mr-1% rounded-lg'
                width='300'
                height='170'
                src='https://www.youtube.com/embed/SRpYxmmy6EI'
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              ></iframe>
              <iframe
                className='mr-1% rounded-lg'
                width='300'
                height='170'
                src='https://www.youtube.com/embed/dMekskqXbL4'
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              ></iframe>
            </div>
            <div className='mr-5/100 p-0 text-center flex flex-col'>
              <h4>MUSIQUE</h4>
              <iframe
                className='mr-1% rounded-lg'
                width='300'
                height='170'
                src='https://www.youtube.com/embed/dQw4w9WgXcQ'
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              ></iframe>
              <iframe
                className='mr-1% rounded-lg'
                width='300'
                height='170'
                src='https://www.youtube.com/embed/3NoKAOTE_ZI'
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              ></iframe>
            </div>
            <div className='mr-5/100 p-0 text-center flex flex-col'>
              <h4>FILMS</h4>
              <iframe
                className='mr-1% rounded-lg'
                width='300'
                height='170'
                src='https://www.youtube.com/embed/RjNcTBXTk4I'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              ></iframe>
              <iframe
                className='mr-1% rounded-lg'
                width='300'
                height='170'
                src='https://www.youtube.com/embed/wK69QJ2ESO0'
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              ></iframe>
            </div>
            <div className='mr-5/100 p-0 text-center flex flex-col'>
              <h4>JEUX VIDEOS</h4>
              <iframe
                className='mr-1% rounded-lg'
                width='300'
                height='170'
                src='https://www.youtube.com/embed/loarI5X93wI'
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              ></iframe>
              <iframe
                className='mr-1% rounded-lg'
                width='300'
                height='170'
                src='https://www.youtube.com/embed/QBBLxrvOmqw'
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Tendances
