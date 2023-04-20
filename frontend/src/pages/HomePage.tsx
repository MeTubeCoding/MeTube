import React, { useEffect, useState } from 'react'
import NavigationBar from '../components/NavigationBar'
import Video from '../components/Video'
import './HomePage.css'
import Videos from '../components/Videos'

interface VideoData {
  id: number
  url: string
}

const HomePage = (): JSX.Element => {
  const [video, setVideo] = useState<VideoData[]>([])
  useEffect(() => {
    setVideo(Videos)
  }, [])
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 'calc(100vh - 60px)'
      }}
    >
      <div>
        <NavigationBar />
      </div>
      <div className="mt-[15%] video">
        {video.map(vid => (
          <Video key={vid.id} id={vid.id} src={vid.url} />
        ))}
      </div>
    </div>
  )
}

export default HomePage
