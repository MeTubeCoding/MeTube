/* eslint-disable react/jsx-key */
import React from 'react'
import mockData from './mocking.json'


export function trend_new() {
  const trend_new = mockData.new
  return (
    <div className="mr-5 p-0 text-center top-0 flex flex-col h-full">
      <h4 className="mb-5">NOUVEAUTES</h4>
      {trend_new.map(trend_new => (
        <div className="flex flex-col">
          <div className="flex flex-col">
            <img
              className="rounded-lg object-cover"
              src={trend_new.minia}
            />
            <h5 className="text-left font-sans py-2">{trend_new.titre}</h5>
            <p className="text-left pb-5">{trend_new.chaine}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
export function trend_music() {
  const trend_music = mockData.music
  return (
    <div className="mr-5 p-0 text-center top-0 flex flex-col justify-start h-full">
      <h4 className="mb-5">MUSIQUE</h4>
      {trend_music.map(trend_music => (
        <div className="flex flex-col">
          <div className="flex flex-col">
            <img
              className="rounded-lg object-cover"
              src={trend_music.minia}
            />
            <h5 className="text-left py-2">
              {trend_music.titre}
            </h5>
            <p className="text-left pb-5">{trend_music.chaine}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
export function trend_movies() {
  const trend_movies = mockData.movies
  return (
    <div className="mr-5 p-0 text-center flex flex-col justify-start h-full">
      <h4 className="mb-5">FILMS</h4>
      {trend_movies.map(trend_movies => (
        <div className="flex flex-col">
          <div className="flex flex-col">
            <img
              className="rounded-lg object-cover"
              src={trend_movies.minia}
            />
            <h5 className="text-left py-2">{trend_movies.titre}</h5>
            <p className="text-left pb-5">{trend_movies.chaine}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
export function trend_gaming() {
  const trend_gaming = mockData.gaming
  return (
    <div className="mr-5 p-0 text-center flex flex-col h-full">
      <h4 className="mb-5">JEUX VIDEOS</h4>
      {trend_gaming.map(trend_gaming => (
        <div className="flex flex-col">
          <div className="flex flex-col">
            <img
              className="rounded-lg object-cover"
              src={trend_gaming.minia}
            />
            <h5 className="text-left py-2">{trend_gaming.titre}</h5>
            <p className="text-left pb-5">{trend_gaming.chaine}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
