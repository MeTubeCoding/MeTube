/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'

interface Props {
  video: File
}

const VideoItem = ({ video }: Props) => {
  const videoUrl = URL.createObjectURL(video)

  return (
    <div className="video-item">
      <video controls width="560" height="315">
        <source src={videoUrl} type={video.type} />
        Your browser does not support the video tag.
      </video>
      <h3>{video.name}</h3>
    </div>
  )
}

export default VideoItem
