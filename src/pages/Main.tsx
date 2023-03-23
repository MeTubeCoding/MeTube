import React, { useEffect, useState } from 'react'
import SearchBar from '../components/SearchBar'
import Results, { IResults } from '../components/Results'



const Main = () => {
  const [videos, setVideos] = useState<IResults |[]>([]);
  useEffect(() => {
    fetch("http://localhost:5600/videos").then(response => response.json()).then((response:IResults) => { 
      setVideos(response)});
   }, []);
  return (
    <div>
      <SearchBar/>
      <Results videos={videos}/>
    </div>
  )
}

export default Main