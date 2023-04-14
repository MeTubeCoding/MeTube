import React from 'react'
import Results from '../components/Results'
import Navbar from '../components/Navbar'
import { useOnSearch } from '../components/useOnSearch'
import Filters from '../components/Filters'

const Main = () => {
  const { videos, onSearch } = useOnSearch()

  return (
    <div>
      <div style={{ height: '7.5vh' }}>
        <Navbar onSearch={onSearch} />
      </div>
      <Filters></Filters>
      <Results videos={videos} />
    </div>
  )
}

export default Main
