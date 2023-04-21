import React from 'react'

// import composant  :
import { trend_tag } from '../../timeline_components/trending_categories'
//import { BrowserRouter as Router, Route, Routes as Switch, Link } from 'react-router-dom'

// ================================================================================================
// ================================================================================================
// ================================================================================================

function Tendances() {
  return (
    <div className="flex flex-row ml-[15%] text-me-orange h-screen bg-neutral-900">
      <div>
        <div className="ml-[50%] mb-10 flex flex-row justify-center items-center my-3">
          <img
            className="rounded-full mr-2%"
            src="https://www.youtube.com/img/trending/avatar/trending.png"
            alt='trending'
          ></img>
          <h3 className="ml-5 p-0 text-center leading-normal text-3xl">
            RECOMMANDATIONS
          </h3>
        </div>
        <div className="ml-10 flex flex_col justify-center">{trend_tag()}</div>
      </div>
    </div>
  )
}
export default Tendances
