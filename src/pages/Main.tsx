import React, { useEffect, useState } from 'react'
import SearchBar from '../components/SearchBar'
import Results, { type IResults } from '../components/Results'
import Navbar from '../components/Navbar'
import { useOnSearch } from '../components/useOnSearch'
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
        <Results videos={videos} />
      </div>
    </div>
  )
}

export default Main
