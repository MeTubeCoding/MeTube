import React, { useState } from 'react'
import Results from '../components/Results'
import Navbar from '../components/Navbar'
import { useOnSearch } from '../components/useOnSearch'
import SideBar from '../components/SideBar'
import Filters from '../components/Filters'
import { channel } from 'diagnostics_channel'
import { set } from 'mongoose'
import HomePage from './HomePage'

const Main = () => {
  const [isSideBarVisible, setIsSideBarVisible] = useState(false)
  const [filter, setFilter] = useState('none')
  const { videos, channels, onSearch } = useOnSearch()

  const filterChannel = () => {
    if (filter != 'channel') {
      setFilter('channel')
    } else {
      setFilter('none')
    }
  }

  const filterMovie = () => {
    if (filter != 'movie') {
      setFilter('movie')
    } else {
      setFilter('none')
    }
  }

  const filterVideo = () => {
    if (filter != 'video') {
      setFilter('video')
    } else {
      setFilter('none')
    }
  }

  const filterPlaylist = () => {
    if (filter != 'playlist') {
      setFilter('playlist')
    } else {
      setFilter('none')
    }
  }

  const toggleSideBarVisibility = () => {
    setIsSideBarVisible(prevState => !prevState)
  }

  return (
    <div className="max-h-screen">
      <div style={{ height: '8.5vh' }}>
        <Navbar onSearch={onSearch} onToggleSideBar={toggleSideBarVisibility} />
      </div>
      <div className="flex flex-col" style={{ height: '92.5vh' }}>
        <SideBar visible={isSideBarVisible} />
        <HomePage visible={isSideBarVisible} shorts={}></HomePage>
      </div>
    </div>
  )
}

export default Main
