<<<<<<< HEAD:src/pages/VideoPage.tsx
import React, { useState } from 'react'
=======
import React, { useState, useRef, useEffect } from 'react'
>>>>>>> 3e6b1aa594d5d0812ed4a75da42e30cd001b15fd:frontend/src/pages/VideoPage.tsx
import VideoItem from '../components/VideoItem'
import VideoEditor from '../components/VideoEditor'
import NavigationBar from '../components/NavigationBar'
import Cropper from '../components/fonction/CropVideo'
<<<<<<< HEAD:src/pages/VideoPage.tsx
=======
import AudioLibrary from '../components/AudioLibrary'
import { fetchTracks } from '../api/ccMixter'
>>>>>>> 3e6b1aa594d5d0812ed4a75da42e30cd001b15fd:frontend/src/pages/VideoPage.tsx

const VideoPage = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | undefined>(
    undefined
  )
<<<<<<< HEAD:src/pages/VideoPage.tsx
=======
  const [selectedAudios, setSelectedAudios] = useState<File[]>([])
  const [audioLibrary, setAudioLibrary] = useState<
    { file: string; title: string }[]
  >([])

  useEffect(() => {
    const fetchAudioLibrary = async () => {
      const tracks = await fetchTracks()
      setAudioLibrary(
        tracks.map((track: any) => ({
          file: track.files.download.url,
          title: `${track.upload_name} - ${track.user.real_name}`
        }))
      )
    }
    fetchAudioLibrary()
  }, [])
>>>>>>> 3e6b1aa594d5d0812ed4a75da42e30cd001b15fd:frontend/src/pages/VideoPage.tsx

  const handleVideoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0]
      const videoUrl = URL.createObjectURL(file)
      setSelectedVideo(videoUrl)
    }
  }

  const saveCroppedVideo = (croppedSrc: string) => {
    setSelectedVideo(croppedSrc)
    console.log('Cropped video saved successfully!')
  }

  const handleCropCancel = () => {
    setSelectedVideo(undefined)
    console.log('Crop cancelled successfully!')
  }

<<<<<<< HEAD:src/pages/VideoPage.tsx
=======
  const handleAudioSelect = (audio: File) => {
    setSelectedAudios(prevSelectedAudios => [...prevSelectedAudios, audio])
  }

>>>>>>> 3e6b1aa594d5d0812ed4a75da42e30cd001b15fd:frontend/src/pages/VideoPage.tsx
  return (
    <div className="flex flex-col h-screen">
      <NavigationBar />
      <div className="flex-1 flex flex-row">
<<<<<<< HEAD:src/pages/VideoPage.tsx
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
            </div>
              )}
=======
        <div className="flex-1 flex items-center justify-center bg-me-black">
          {selectedVideo ? (
            <>
              <VideoItem video={selectedVideo} />
            </>
          ) : (
            <div className="flex flex-col items-center justify-center space-y-4">
              <h2 className="text-xl font-medium text-me-black">
                Select a video to get started:
              </h2>
            </div>
          )}
>>>>>>> 3e6b1aa594d5d0812ed4a75da42e30cd001b15fd:frontend/src/pages/VideoPage.tsx
        </div>
        <div className="w-1/3 flex items-center justify-center">
          <div className="w-full max-w-xs px-4">
            {selectedVideo && (
              <Cropper
                src={selectedVideo}
                onDone={saveCroppedVideo}
                onCancel={handleCropCancel}
              />
            )}
            <VideoEditor
              selectedVideo={selectedVideo}
              handleVideoUpload={handleVideoUpload}
            />
<<<<<<< HEAD:src/pages/VideoPage.tsx
=======
            <AudioLibrary
              audioLibrary={audioLibrary}
              handleAudioSelect={handleAudioSelect}
            />
>>>>>>> 3e6b1aa594d5d0812ed4a75da42e30cd001b15fd:frontend/src/pages/VideoPage.tsx
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoPage
