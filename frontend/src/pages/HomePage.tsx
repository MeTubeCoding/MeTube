<<<<<<< HEAD:src/pages/HomePage.tsx
import React from 'react'
import NavigationBar from '../components/NavigationBar'
import Video from '../components/Video'

const HomePage = (): JSX.Element => {
=======
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
>>>>>>> 3e6b1aa594d5d0812ed4a75da42e30cd001b15fd:frontend/src/pages/HomePage.tsx
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
<<<<<<< HEAD:src/pages/HomePage.tsx
      <div className="mt-[15%]">
        <Video />
=======
      <div className="mt-[15%] video">
        {video.map(vid => (
          <Video key={vid.id} id={vid.id} src={vid.url} />
        ))}
>>>>>>> 3e6b1aa594d5d0812ed4a75da42e30cd001b15fd:frontend/src/pages/HomePage.tsx
      </div>
    </div>
  )
}

export default HomePage
