import React, { useState, useRef, useEffect } from 'react'
import VideoItem from '../components/VideoItem'
import VideoEditor from '../components/VideoEditor'
import Navbar from '../components/Navbar'
import Cropper from '../components/fonction/CropVideo'
import AudioLibrary from '../components/AudioLibrary'
import { fetchTracks } from '../api/ccMixter'

const VideoPage = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | undefined>(
    undefined
  )
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

  const handleAudioSelect = (audio: File) => {
    setSelectedAudios(prevSelectedAudios => [...prevSelectedAudios, audio])
  }

  return (
    <div className="flex flex-col h-screen">
      <Navbar
        onSearch={function (
          data: string,
          setSearched: React.Dispatch<React.SetStateAction<boolean>>
        ): void {
          throw new Error('Function not implemented.')
        }}
        setSearched={function (value: React.SetStateAction<boolean>): void {
          throw new Error('Function not implemented.')
        }}
        onToggleSideBar={function (): void {
          throw new Error('Function not implemented.')
        }}
      />
      <div className="flex-1 flex flex-row">
        <div className="flex-1 flex items-center justify-center bg-me-darkpurple">
          {selectedVideo ? (
            <>
              <VideoItem video={selectedVideo} />
            </>
          ) : (
            <div className="flex flex-col items-center justify-center space-y-4">
              <h2 className="text-xl font-medium text-me-orange">
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
                onCancel={handleCropCancel}
              />
            )}
            <VideoEditor
              selectedVideo={selectedVideo}
              handleVideoUpload={handleVideoUpload}
            />
            <AudioLibrary
              audioLibrary={audioLibrary}
              handleAudioSelect={handleAudioSelect}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoPage
