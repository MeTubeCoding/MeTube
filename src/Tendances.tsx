import React, { useState } from 'react'
import mockData from './mocking.json'
import './Tendances.css'

// import composant  :

import { PassThrough } from 'stream'
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
  Link
} from 'react-router-dom'

function trend_new() {
  const trend_new = mockData.new
  return (
    <div className='ml-3.5% mr-5/100 p-0 text-center flex flex-col'>
      <h4>NOUVEAUTES</h4>
      {trend_new.map((trend_new) => (
        <div className='flex flex-row justify-between items-center'>
          <div className='flex flex-row justify-between items-center'>
            <img className='w-1/6' src={trend_new.minia} />
            <div className='flex flex-col justify-between items-center'>
              <h5 className='text-left'>{trend_new.titre}</h5>
              <p className='text-left'>{trend_new.chaine}</p>
              </div>
              </div>
              </div>)
              )}
    </div>
  )
}
function trend_music() {
  const trend_music = mockData.music
  return (
    <div className='mr-5/100 p-0 text-center flex flex-col'>
      <h4>MUSIQUE</h4>
      
    </div>
  )
}
function trend_movies() {
  const trend_movies = mockData.movies
  return (
    <div className='mr-5/100 p-0 text-center flex flex-col'>
      <h4>FILMS</h4>
      
    </div>
  )
}
function trend_gaming() {
  const trend_gaming = mockData.gaming
  return (
    <div className='mr-5/100 p-0 text-center flex flex-col'>
      <h4>JEUX VIDEOS</h4>
      
    </div>
  )
}
const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <Router>
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
                    <Link to='pages/timeline.tsx'>Recommandations</Link>
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
    </Router>
  )
}

// ================================================================================================
// ================================================================================================
// ================================================================================================

function Tendances() {
  return (
    <div className='h-screen bg-me-darkpurple text-white font-sans font-normal text-base leading-relaxed text-left m-0 p-0 h-screen'>
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
            {trend_new()}
            {trend_music()}
            {trend_movies()}
            {trend_gaming()}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Tendances
