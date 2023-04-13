import React, { useEffect, useState } from 'react'
import SearchBar from '../components/SearchBar'
import Results, { type IResults } from '../components/Results'
import Navbar from '../components/Navbar'

const Main = () => {
  const [videos, setVideos] = useState<IResults | []>([])
  useEffect(() => {
    // do nothing.
  }, [])
  const [searchDatas, setSearchDatas] = useState('')

  const onSearch = (data: string) => {
    console.log(JSON.stringify(data))

    fetch('http://localhost:5600/videos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data })
    })
      .then(async response => await response.json())
      .then((response: IResults) => {
        setVideos(response)
      })
  }
  return (
    <div>
      <div style={{ height: '7.5vh' }}>
        <Navbar />
      </div>
      <Results videos={videos} />
    </div>
  )
}

export default Main
