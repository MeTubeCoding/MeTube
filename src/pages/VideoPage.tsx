import React, { useState } from 'react'
import VideoItem from '../components/VideoItem'
import VideoEditor from '../components/VideoEditor'
import NavigationBar from '../components/NavigationBar'
import MusicPlayer from '../components/MusicPlayer'

const [selectedMusic, setSelectedMusic] = useState<File[]>([])

const VideoPage = (): JSX.Element => {
  const [selectedVideo, setSelectedVideo] = useState<File | null>(null)

  const handleVideoUpload = (event: React.ChangeEvent<HTMLInputElement>): any => {
    if (event.target.files != null) {
      setSelectedVideo(event.target.files[0])
    }
  }

  return (
    <div className="flex flex-col h-screen">
      <NavigationBar />
      <div className="flex-1 flex flex-row">
        <div className="flex-1 flex items-center justify-center bg-gray-100">
          {(selectedVideo != null)
            ? (
            <VideoItem video={selectedVideo} />
              )
            : (
            <div className="flex flex-col items-center justify-center space-y-4">
              <h2 className="text-xl font-medium text-gray-500">
                Select a video to get started:
              </h2>
              <label
                htmlFor="video-upload"
                className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Choose a file
              </label>
              <input
                id="video-upload"
                type="file"
                accept="video/*"
                onChange={handleVideoUpload}
                className="sr-only"
              />
            </div>
              )}
        </div>
        <div className="w-1/3 flex items-center justify-center">
          <div className="w-full max-w-xs px-4">
            <VideoEditor />
            <MusicPlayer selectedMusic={selectedMusic} setSelectedMusic={setSelectedMusic} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoPage
