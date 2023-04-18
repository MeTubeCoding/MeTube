import React, { useState, type ChangeEvent } from 'react'
import VideoItem from '../components/VideoItem'
import VideoEditor from '../components/VideoEditor'
import NavigationBar from '../components/NavigationBar'

const VideoPage: React.FC = () => {
  const [selectedVideos, setSelectedVideos] = useState<File[]>([])

  const handleVideoUpload = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files != null) {
      const files = Array.from(event.target.files)
      setSelectedVideos([...selectedVideos, ...files])
    }
  }

  return (
    <div className="flex flex-col h-screen">
      <NavigationBar />
      <div className="flex-1 flex flex-row">
        <div className="flex-1 flex items-center justify-center bg-me-darkpurple">
          {selectedVideos.length > 0
            ? (
                selectedVideos.map((video, index) => (
              <VideoItem key={index} video={video} />
                ))
              )
            : (
            <div className="flex flex-col items-center justify-center space-y-4">
              <h2 className="text-xl font-medium text-me-yellow">
                Select one or more videos to get started:
              </h2>
              <label
                htmlFor="video-upload"
                className="px-4 py-2 text-sm font-medium text-me-yellow bg-me-lightpurple rounded-md cursor-pointer hover:bg-me-orange focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-me-red"
              >
                Choose files
              </label>
              <input
                id="video-upload"
                type="file"
                accept="video/*"
                multiple
                onChange={handleVideoUpload}
                className="sr-only"
              />
            </div>
              )}
        </div>
        <div className="w-1/3 flex items-center justify-center">
          <div className="w-full max-w-xs px-4">
            <VideoEditor />
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoPage
