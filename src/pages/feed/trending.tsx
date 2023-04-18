import React, { useState } from 'react'

// import composant  :
import { useOnSearch } from '../../components/useOnSearch'
//import { BrowserRouter as Router, Route, Routes as Switch, Link } from 'react-router-dom'

// ================================================================================================
// ================================================================================================
// ================================================================================================

function Tendances() {
  return (
      <div className='flex flex-row justify-start'>
        <div>
          <div className='flex flex-row justify-center items-center my-3 mt-10 mb-10 mx-1/100 lg:mx-5/100'>
            <img
              className='rounded-full mr-2%'
              src='https://www.youtube.com/img/trending/avatar/trending.png'
            ></img>
            <h1 className='ml-5 p-0 text-center leading-normal text-3xl'>
              RECOMMANDATIONS
            </h1>
          </div>
          <div className='flex items-center justify-center'>
            <div className='ml-5 mr-5/100 p-0 text-center flex flex-col'>
              <h4 className='mb-5'>NOUVEAUTES</h4>
              <iframe
                className='mr-5 mb-5 rounded-lg'
                width='300'
                height='170'
                src='https://www.youtube.com/embed/SRpYxmmy6EI'
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              ></iframe>
              <iframe
                className='mr-5 mb-5 rounded-lg'
                width='300'
                height='170'
                src='https://www.youtube.com/embed/dMekskqXbL4'
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              ></iframe>
            </div>
            <div className='mr-5/100 p-0 text-center flex flex-col'>
              <h4 className='mb-5'>MUSIQUE</h4>
              <iframe
                className='mr-5 mb-5 rounded-lg'
                width='300'
                height='170'
                src='https://www.youtube.com/embed/dQw4w9WgXcQ'
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              ></iframe>
              <iframe
                className='mr-5 mb-5 rounded-lg'
                width='300'
                height='170'
                src='https://www.youtube.com/embed/3NoKAOTE_ZI'
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              ></iframe>
            </div>
            <div className='mr-5/100 p-0 text-center flex flex-col'>
              <h4 className='mb-5'>FILMS</h4>
              <iframe
                className='mr-5 mb-5 rounded-lg'
                width='300'
                height='170'
                src='https://www.youtube.com/embed/RjNcTBXTk4I'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              ></iframe>
              <iframe
                className='mr-5 mb-5 rounded-lg'
                width='300'
                height='170'
                src='https://www.youtube.com/embed/wK69QJ2ESO0'
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              ></iframe>
            </div>
            <div className='mr-5/100 p-0 text-center flex flex-col'>
              <h4 className='mb-5'>JEUX VIDEOS</h4>
              <iframe
                className='mr-5 mb-5 rounded-lg'
                width='300'
                height='170'
                src='https://www.youtube.com/embed/loarI5X93wI'
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              ></iframe>
              <iframe
                className='mr-5 mb-5 rounded-lg'
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
  )
}
export default Tendances
