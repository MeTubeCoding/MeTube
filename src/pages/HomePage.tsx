/* eslint-disable multiline-ternary */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState } from 'react'
import VideoItem from '../components/VideoItem'
import NavigationBar from '../components/NavigationBar'

const HomePage = () => {
  const [selectedVideo, setSelectedVideo] = useState<File | null>(null)

  const handleVideoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedVideo(event.target.files[0])
    }
  }

  return (
    <div className="home-page">
      <NavigationBar />
      {selectedVideo ? (
        <VideoItem video={selectedVideo} />
      ) : (
        <div>
          <h2>Select a video to get started:</h2>
          <input type="file" accept="video/*" onChange={handleVideoUpload} />
        </div>
      )}
    </div>
  )
}

export default HomePage
