import React, { useState } from 'react'
import MusicPlayer from '../components/MusicPlayer'
import Cropper from './fonction/CropVideo'
import OutilTexte from './fonction/OutilTexte'

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
  const [text, setText] = useState<string | undefined>(undefined)

  const handleCrop = () => {
    if (selectedVideo) {
      // Entrer en mode de sélection de la zone de recadrage
      setCropMode(true)
    }
  }

  const handleCropDone = (croppedSrc: string) => {
    // Sortir du mode de sélection de la zone de recadrage
    setCropMode(false)
    // Mettre à jour le vidéo sélectionné avec le vidéo recadré
    setCroppedVideo(croppedSrc)
  }

  const handleCancelCrop = () => {
    // Sortir du mode de sélection de la zone de recadrage
    setCropMode(false)
  }
  const handleAddText = (text: string) => {
    setText(text)
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
            <OutilTexte src={selectedVideo} onAddText={handleAddText} />
          </div>
          <div>
            {cropMode ? (
              selectedVideo && (
                <Cropper
                  src={selectedVideo}
                  onDone={handleCropDone}
                  oncancel={handleCancelCrop}
                />
              )
            ) : croppedVideo ? (
              <video controls src={croppedVideo}></video>
            ) : selectedVideo ? (
              <div>
                <video controls src={selectedVideo}></video>
                <div>
                  <button onClick={handleCrop}>Crop</button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center space-y-4">
                <h2 className="text-xl font-medium text-me-black">
                  No video selected
                </h2>
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
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoEditor
