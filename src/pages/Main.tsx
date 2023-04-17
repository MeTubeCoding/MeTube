import React, { useState } from 'react'
import ResultsV from '../components/ResultsVideo'
import Navbar from '../components/Navbar'
import { useOnSearch } from '../components/useOnSearch'
import SideBar from '../components/SideBar'

const Main = () => {
  const [isSideBarVisible, setIsSideBarVisible] = useState(false)
  const { videos, onSearch } = useOnSearch()

  const toggleSideBarVisibility = () => {
    setIsSideBarVisible(prevState => !prevState)
  }

  return (
    <div className="max-h-screen overflow-hidden">
      <div style={{ height: '7.5vh' }}>
        <Navbar onSearch={onSearch} onToggleSideBar={toggleSideBarVisibility} />
      </div>
      <div className="flex mt-4" style={{ height: '92.5vh' }}>
        <SideBar visible={isSideBarVisible} />
        <ResultsV videos={videos} />
      </div>
    </div>
  )
}

export default Main
