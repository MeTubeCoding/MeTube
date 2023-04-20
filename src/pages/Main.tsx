import React, { useState } from 'react'
import { useOnSearch } from '../components/useOnSearch'
import Navbar from '../components/Navbar'
import SideBar from '../components/SideBar'
import Recherche from './Recherche'
import Tendances from './feed/trending'
import Results from '../components/Results'


const Main = () => {
  const [HasSearched, setHasSearched] = useState(false)

  const [isSideBarVisible, setIsSideBarVisible] = useState(false)
  const [filter, setFilter] = useState('none')
  const [sortBy, setSort] = useState('none')
  const { videos, channels, onSearch } = useOnSearch()

  const toggleSideBarVisibility = () => {
    setIsSideBarVisible(prevState => !prevState)
  }


  return (
    <div className="max-h-screen">
      <div style={{ height: '8.5vh' }}>
        <Navbar setSearched={setHasSearched} onSearch={onSearch} onToggleSideBar={toggleSideBarVisibility} />
      </div>
      <div className="flex flex-col" style={{ height: '92.5vh' }}>
        <SideBar visible={isSideBarVisible} />
        {HasSearched ? <div><Recherche filter={filter} sortBy={sortBy} visible={isSideBarVisible} setFilter={setFilter} setSort={setSort}/><Results sortBy={sortBy} videos={videos} channels={channels} filter={filter} visible={isSideBarVisible}></Results></div> : <Tendances></Tendances> }
      </div>
    </div>
  )
}

export default Main
