import React, { useState } from 'react'
import ResultsV from '../components/Results'
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
    <div className="max-h-screen">
      <div style={{ height: '8.5vh' }}>
        <Navbar onSearch={onSearch} onToggleSideBar={toggleSideBarVisibility} />
      </div>
      <div className="flex" style={{ height: '92.5vh' }}>
        <SideBar visible={isSideBarVisible} />
        <ResultsV visible={isSideBarVisible} videos={videos} />
      </div>
    </div>
  )
}

export default Main
