import React, { useEffect, useState } from 'react'
import SearchBar from '../components/SearchBar'
import Results, { IResults } from '../components/Results'



const Main = () => {
  const [videos, setVideos] = useState<IResults |[]>([]);
  useEffect(() => {
    
   }, []);
   const [searchDatas, setSearchDatas] = useState("");

  const onSearch = (data: string) => {
    console.log(JSON.stringify(data));
    
    fetch("http://localhost:5600/videos", 
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({data: data}),
    }
    ).then(response => response.json()).then((response:IResults) => {setVideos(response)});
  }
  return (
    <div>
      <SearchBar onSearch={onSearch}/>
      <Results videos={videos}/>
    </div>
  )
}

export default Main