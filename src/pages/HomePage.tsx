/* eslint-disable eol-last */
/* eslint-disable multiline-ternary */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState } from 'react'
import VideoItem from '../components/VideoItem'
import NavigationBar from '../components/NavigationBar'

const HomePage = () => {
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