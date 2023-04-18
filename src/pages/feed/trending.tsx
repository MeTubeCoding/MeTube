import React from 'react'

// import composant  :
import {
  trend_gaming,
  trend_movies,
  trend_new,
  trend_music
} from '../../timeline_components/trending_categories'
//import { BrowserRouter as Router, Route, Routes as Switch, Link } from 'react-router-dom'

// ================================================================================================
// ================================================================================================
// ================================================================================================

function Tendances() {
  return (
    <div className="h-screen text-me-yellow font-sans-roboto font-normal text-base leading-relaxed text-left m-0 p-0 h-screen">
      <div className="flex flex-row justify-start h-screen bg-neutral-900">
        <div className="bg-neutral-700 px-8 mr-20 "></div>
        <div>
          <div className="flex flex-row justify-center items-center my-3 mx-1/100 lg:mx-5/100">
            <img
              className="rounded-full mr-2%"
              src="https://www.youtube.com/img/trending/avatar/trending.png"
            ></img>
            <h3 className="m-0 p-0 text-center leading-normal text-3xl">
              TENDANCES
            </h3>
          </div>
          <div className="flex flex_col justify-center">
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
