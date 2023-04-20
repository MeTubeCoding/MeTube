import React from 'react'

// import composant  :
import {
  trend_gaming,
  trend_movies,
  trend_new,
  trend_music
} from '../../components/trending_components/trending_categories'

//import { BrowserRouter as Router, Route, Routes as Switch, Link } from 'react-router-dom'

// ================================================================================================
// ================================================================================================
// ================================================================================================

function Tendances() {
  return (
    <div className="flex flex-row justify-start text-me-yellow">
      <div className=""></div>
      <div>
        <div className="flex flex-row justify-center items-center my-3">
          <img
            className="rounded-full"
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
  )
}
export default Tendances
