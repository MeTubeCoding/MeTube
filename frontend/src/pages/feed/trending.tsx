import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import { useOnSearch } from '../../components/useOnSearch'
import SideBar from '../../components/SideBar'

// import composant  :
import { trend_tag } from '../../timeline_components/trending_categories'
//import { BrowserRouter as Router, Route, Routes as Switch, Link } from 'react-router-dom'

// ================================================================================================
// ================================================================================================
// ================================================================================================

function Tendances() {
  const [isSideBarVisible, setIsSideBarVisible] = useState(false)
  const [filter, setFilter] = useState('none')
  const { videos, channels, onSearch } = useOnSearch()

  const toggleSideBarVisibility = () => {
    setIsSideBarVisible(prevState => !prevState)
  }

  return (
    <div className="h-screen text-me-yellow font-sans-roboto font-normal text-base leading-relaxed text-left m-0 p-0 h-screen">
      <div style={{ height: '5vh' }}>
        <Navbar onSearch={onSearch} onToggleSideBar={toggleSideBarVisibility} setSearched={function (value: React.SetStateAction<boolean>): void {
          throw new Error('Function not implemented.')
        } } />
      </div>
      <div className="flex flex-col" style={{ height: '3.5vh' }}>
        <SideBar visible={isSideBarVisible} />
      </div>
      <div className="flex flex-row ml-[5%] h-screen bg-neutral-900">
        <div className="bg-neutral-700 px-8 mr-20 "></div>
        <div>
          <div className="ml-[90%] mb-10 flex flex-row justify-center items-center my-3">
            <img
              className="rounded-full mr-2%"
              src="https://www.youtube.com/img/trending/avatar/trending.png"
            ></img>
            <h3 className="ml-5 p-0 text-center leading-normal text-3xl">
              RECOMMANDATIONS
            </h3>
          </div>
          <div className="ml-5 flex flex_col justify-center">{trend_tag()}</div>
        </div>
      </div>
    </div>
  )
}
export default Tendances
