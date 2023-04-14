import React, { useEffect, useState } from 'react'
import SearchBar from '../components/SearchBar'
import Results, { type IResults } from '../components/Results'
import Navbar from '../components/Navbar'
import { useOnSearch } from '../components/useOnSearch'

const Main = () => {
  const { videos, onSearch } = useOnSearch()

  return (
    <div>
      <div style={{ height: '7.5vh' }}>
        <Navbar onSearch={onSearch} />
      </div>
      <Results videos={videos} />
    </div>
  )
}

export default Main
