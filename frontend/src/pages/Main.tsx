import React, { useState, useEffect } from 'react'
import { useOnSearch } from '../components/useOnSearch'
import { getShorts } from '../components/getShorts'
import Navbar from '../components/Navbar'
import SideBar from '../components/SideBar'
import Tendances from './feed/trending'
import Results from '../components/Results'
import Filters from '../components/Filters'
import HomePage from './HomePage'

const Main = () => {
  const [HasSearched, setHasSearched] = useState(false)
  const [onShorts, setOnShorts] = useState(false)

  const { shorts, onLoad } = getShorts()

  const [isSideBarVisible, setIsSideBarVisible] = useState(false)
  const [filter, setFilter] = useState('none')
  const [sortBy, setSort] = useState('none')
  const { videos, channels, onSearch } = useOnSearch()

  const toggleSideBarVisibility = () => {
    setIsSideBarVisible(prevState => !prevState)
  }

  const sortRelevance = () => {
    if (sortBy != 'relev') {
      setSort('relev')
    } else {
      setSort('none')
    }
  }

  const sortDate = () => {
    if (sortBy != 'date') {
      setSort('date')
    } else {
      setSort('none')
    }
  }

  const sortViews = () => {
    if (sortBy != 'viewsUP' && sortBy != 'viewsDOWN') {
      setSort('viewsUP')
    } else if (sortBy != 'viewsDOWN') {
      setSort('viewsDOWN')
    } else {
      setSort('none')
    }
  }

  const sortRating = () => {
    if (sortBy != 'rating') {
      setSort('rating')
    } else {
      setSort('none')
    }
  }

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

  return (
    <div className="max-h-screen">
      <div style={{ height: '8.5vh' }}>
        <Navbar
          setSearched={setHasSearched}
          setShorts={setOnShorts}
          onSearch={onSearch}
          onToggleSideBar={toggleSideBarVisibility}
        />
      </div>
      <div className="flex flex-col" style={{ height: '92.5vh' }}>
        <SideBar
          visible={isSideBarVisible}
          setShorts={setOnShorts}
          onShorts={onShorts}
          shorts={shorts}
          onLoad={onLoad}
        />
        {HasSearched ? (
          <div>
            <Filters
              visible={isSideBarVisible}
              filterChannel={filterChannel}
              filterVideo={filterVideo}
              filterMovie={filterMovie}
              filterPlaylist={filterPlaylist}
              sortRelevance={sortRelevance}
              sortRating={sortRating}
              sortViews={sortViews}
              sortDate={sortDate}
              sortBy={sortBy}
              filter={filter}
            ></Filters>
            {channels.length === 0 && videos.length === 0 ? (
              <div className="flex justify-center">
                <p className="text-me-yellow text-xl">No Results</p>
              </div>
            ) : (
              <Results
                visible={isSideBarVisible}
                filter={filter}
                sortBy={sortBy}
                videos={videos}
                channels={channels}
              />
            )}
          </div>
        ) : onShorts === true ? (
          <HomePage shorts={shorts} visible={false}></HomePage>
        ) : (
          <Tendances></Tendances>
        )}
      </div>
    </div>
  )
}

export default Main
