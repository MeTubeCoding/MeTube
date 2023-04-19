import React, { useState } from 'react'
import MusicPlayer from '../components/MusicPlayer'
import VideoCrop from './fonction/CropVideo'

interface VideoEditorProps {
  selectedVideo: string | undefined
  handleVideoUpload: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const VideoEditor = ({
  selectedVideo,
  handleVideoUpload
}: VideoEditorProps) => {
  const [cropMode, setCropMode] = useState<boolean>(false)
  const [croppedVideo, setCroppedVideo] = useState<string | undefined>(
    undefined
  )

  const handleCrop = () => {
    if (selectedVideo) {
      // Enter crop mode
      setCropMode(true)
    }
  }

  const handleCropDone = (croppedSrc: string) => {
    // Exit crop mode
    setCropMode(false)
    // Update the selected video with the cropped video
    setCroppedVideo(croppedSrc)
  }

  const handleCancelCrop = () => {
    // Exit crop mode
    setCropMode(false)
  }

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div
          style={{ display: 'flex', flexDirection: 'column', marginRight: 20 }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <MusicPlayer />
            </div>
          </div>
          <div>
            {cropMode ? (
              selectedVideo && (
                <VideoCrop
                  src={selectedVideo}
                  onDone={handleCropDone}
                  oncancel={handleCancelCrop}
                />
              )
            ) : croppedVideo ? (
              <video controls src={croppedVideo}></video>
            ) : (
              <div className="flex flex-col items-center justify-center space-y-4">
                {selectedVideo ? (
                  <div>
                    <video controls src={selectedVideo}></video>
                    <div>
                      <button onClick={handleCrop}>Crop</button>
                    </div>
                  </div>
                ) : (
                  <>
                    <label
                      htmlFor="video-upload"
                      className="px-4 py-2 text-sm font-medium text-me-white bg-me-red rounded-md cursor-pointer hover:bg-me-red focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-me-red"
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
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoEditor
