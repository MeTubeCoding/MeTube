import React, { useState } from 'react'
import VideoItem from '../components/VideoItem'
import VideoEditor from '../components/VideoEditor'
import NavigationBar from '../components/NavigationBar'
import Cropper from '../components/fonction/CropVideo'

const VideoPage = () => {
  const [selectedVideo, setVideoUrl] = useState<string | undefined>(undefined)

  const handleVideoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0]
      const videoUrl = URL.createObjectURL(file)
      setVideoUrl(videoUrl)
    }
  }
  const saveCroppedVideo = () => {
    // Code to save the cropped video goes here
    console.log('Cropped video saved successfully!')
  }

  const handleCropCancel = () => {
    // Remove the cropped video and reset the component state
    setVideoUrl(undefined)
    console.log('Crop cancelled successfully!')
  }

  return (
    <div className="flex flex-col h-screen">
      <NavigationBar />
      <div className="flex-1 flex flex-row">
        <div className="flex-1 flex items-center justify-center bg-me-black">
          {selectedVideo ? (
            <VideoItem video={selectedVideo} />
          ) : (
            <div className="flex flex-col items-center justify-center space-y-4">
              <h2 className="text-xl font-medium text-me-black">
                Select a video to get started:
              </h2>
            </div>
          )}
        </div>
        <div className="w-1/3 flex items-center justify-center">
          <div className="w-full max-w-xs px-4">
            {selectedVideo && (
              <Cropper
                src={selectedVideo}
                onDone={saveCroppedVideo}
                oncancel={handleCropCancel}
              />
            )}
            <VideoEditor
              selectedVideo={selectedVideo}
              handleVideoUpload={handleVideoUpload}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoPage
