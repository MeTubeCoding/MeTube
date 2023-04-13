/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useEffect, useState } from 'react'
import SearchBar from '../components/SearchBar'
import Filters from '../components/Filters'
import Results, { type IResults } from '../components/Results'

const Main = () => {
  const [videos, setVideos] = useState<IResults | []>([])
  useEffect(() => {

  }, [])
  const [searchDatas, setSearchDatas] = useState('')

  const onSearch = (data: string) => {
    console.log(JSON.stringify(data))

    fetch('http://localhost:5600/videos',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data })
      }
    ).then(async response => await response.json()).then((response: IResults) => { setVideos(response) })
  }
  return (
    <div>
      <SearchBar onSearch={onSearch}/>
      <Filters></Filters>
      <Results videos={videos}/>
    </div>
  )
}

export default Main
