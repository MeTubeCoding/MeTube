/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/space-before-function-paren */
import React from 'react'
import VideoEditor from '../components/VideoEditor'
import NavigationBar from '../components/NavigationBar'

function VideoPage() {
  return (
    <div className="Video">
      <NavigationBar />
      <div className="flex justify-center items-center h-screen">
        <div className="max-w-3xl">
          <VideoEditor />
        </div>
      </div>
    </div>
  )
}

export default VideoPage
