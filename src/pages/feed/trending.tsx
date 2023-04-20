import React from 'react'

// import composant  :
import {
  trend_gaming,
  trend_movies,
  trend_music,
  trend_new,
  trend_tag
} from '../../timeline_components/trending_categories'
//import { BrowserRouter as Router, Route, Routes as Switch, Link } from 'react-router-dom'

// ================================================================================================
// ================================================================================================
// ================================================================================================

function Tendances() {
  return (
    <div className="h-full text-me-yellow bg-me-darkpurple font-sans-roboto font-normal text-base leading-relaxed text-left m-0 p-0 h-screen">
      <div className="flex flex-row justify-center h-screen bg-neutral-900 bg-me-darkpurple">
        <div className="bg-neutral-700 px-8 mr-20 "></div>
        <div>
          <div className="mb-5 flex flex-row justify-center items-center my-3 mx-1/100 lg:mx-5/100 bg-me-darkpurple">
            <img
              className="rounded-full mr-2%"
              src="https://www.youtube.com/img/trending/avatar/trending.png"
            ></img>
            <h3 className="ml-5 p-0 text-center leading-normal text-3xl bg-me-darkpurple">
              TRENDINGS
            </h3>
          </div>
          <div className="w-full ml-5 flex flex_col justify-center bg-me-darkpurple">
            {trend_new()}
            {trend_music()}
            {trend_gaming()}
            {trend_movies()}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Tendances
