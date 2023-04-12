/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/space-before-function-paren */
import React from 'react'
import VideoEditor from '../components/VideoEditor'

function VideoPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-3xl">
        <VideoEditor />
      </div>
    </div>
  )
}

export default VideoPage
