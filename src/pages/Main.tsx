import React from 'react'
import SearchBar from '../components/SearchBar'
import Results from '../components/Results'



const Main = () => {
  return (
    <div>
      <SearchBar/>
      <Results videos={[{id:1,
    title:"Nabil a cassé mon bong",
    miniature:"https://imgs.search.brave.com/5KvnUyLxAcJHuuU_Ry7pJksq9llJ1Cf0XXfyuKJ7IM0/rs:fit:1200:900:1/g:ce/aHR0cDovL2kuaW1n/dXIuY29tL3ExMmgy/LmpwZw",}]}/>
    </div>
  )
}

export default Main