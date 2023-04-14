import React from 'react'
import Results from '../components/Results'
import Navbar from '../components/Navbar'
import { useOnSearch } from '../components/useOnSearch'
import Filters from '../components/Filters'
import SideBar from '../components/SideBar'

const Main = () => {
  const { videos, onSearch } = useOnSearch()

  return (
    <div className="max-h-screen overflow-hidden">
      <div style={{ height: '7.5vh' }}>
        <Navbar onSearch={onSearch} />
      </div>
      <div className="flex" style={{ height: '92.5vh' }}>
        <SideBar />
        <Filters></Filters>
        <Results videos={videos} />
      </div>
    </div>
  )
}

export default Main
