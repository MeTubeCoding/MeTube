import React, { useEffect, useState } from 'react'
import Video from './components/Video'
import mtVideos from './components/Videos'
import './App.css'

function App(): JSX.Element {
  const [video, setVideo] = useState([])
  useEffect(() => {
    setVideo(mtVideos)
  }, [])
  return (
    <>
      <div className="App">
        <div className="app_video">
          {video.map(vid => (
            <Video id={vid.id} src={vid.url} />
          ))}
        </div>
      </div>
    </>
  )
}

export default App
