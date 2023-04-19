import React, { useState } from 'react'
<<<<<<< HEAD
import ResultsV from '../components/Results'
=======
import Results from '../components/Results'
>>>>>>> 1366d026dfdbeba05e275a49417f8fd5c87b611b
import Navbar from '../components/Navbar'
import { useOnSearch } from '../components/useOnSearch'
import SideBar from '../components/SideBar'
import Filters from '../components/Filters'
<<<<<<< HEAD

const Main = () => {
  const [isSideBarVisible, setIsSideBarVisible] = useState(false)
  const { videos, onSearch } = useOnSearch()
=======
import { channel } from 'diagnostics_channel'
import { set } from 'mongoose'

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
>>>>>>> 1366d026dfdbeba05e275a49417f8fd5c87b611b

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
<<<<<<< HEAD
        <Filters visible={isSideBarVisible}></Filters>
        <ResultsV visible={isSideBarVisible} videos={videos} />
=======
        <Filters
          visible={isSideBarVisible}
          filterChannel={filterChannel}
          filterVideo={filterVideo}
          filterMovie={filterMovie}
          filterPlaylist={filterPlaylist}
          filter={filter}
        ></Filters>
        <Results
          visible={isSideBarVisible}
          filter={filter}
          videos={videos}
          channels={channels}
        />
>>>>>>> 1366d026dfdbeba05e275a49417f8fd5c87b611b
      </div>
    </div>
  )
}

export default Main
