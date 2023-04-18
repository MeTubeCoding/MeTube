import React from 'react'

type VideoItemProps = {
  video: string | File
}

const VideoItem = ({ video }: VideoItemProps) => {
  const videoUrl =
    typeof video === 'string' ? video : URL.createObjectURL(video)

  return <video src={videoUrl} controls width="100%" />
}

export default VideoItem;
