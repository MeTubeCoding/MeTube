import React, { useState, useRef } from "react"
import ReactPlayer from "react-player"
import Cropper from "react-easy-crop"

const VideoEditor = ({ video }: { video: File }): JSX.Element => {
  const playerRef = useRef<ReactPlayer>(null)
  const [croppedVideo, setCroppedVideo] = useState<Blob | null>(null)
  const [cropping, setCropping] = useState(false)
  const [image, setImage] = useState<string | null>(null)
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const [rotation, setRotation] = useState(0)

  const handleCrop = async () => {
    if (playerRef.current) {
      const player = playerRef.current.getInternalPlayer()
      const videoWidth = player.videoWidth
      const videoHeight = player.videoHeight
      const canvas = document.createElement("canvas")
      canvas.width = videoWidth
      canvas.height = videoHeight
      const ctx = canvas.getContext("2d")!
      ctx.drawImage(player, 0, 0, videoWidth, videoHeight)
      canvas.toBlob((blob) => {
        setCroppedVideo(blob)
        setCropping(false)
      }, "video/mp4")
    }
  }

  const handleCancelCrop = () => {
    setCroppedVideo(null)
    setCropping(false)
  }

  const handleSelectNewVideo = () => {
    setCroppedVideo(null)
    setCropping(false)
  }

  const handleImageLoaded = (image: HTMLImageElement) => {
    setImage(URL.createObjectURL(video))
  }
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        {croppedVideo ? (
          <div>
            <ReactPlayer url={URL.createObjectURL(croppedVideo)} controls width={400} height={300} />
            <button onClick={handleSelectNewVideo}>Select a new video</button>
          </div>
        ) : (
          <div>
            <ReactPlayer ref={playerRef} url={URL.createObjectURL(video)} controls width={400} height={300} />
            {cropping ? (
              <div style={{ position: "relative", width: 400, height: 300 }}>
                <video
                  src={URL.createObjectURL(video)}
                  ref={playerRef}
                  controls
                  style={{ position: "absolute", top: 0, left: 0, zIndex: 1, width: "100%", height: "100%" }}
                />
                <canvas
                  ref={(canvas) => {
                    if (canvas) {
                      const player = playerRef.current?.getInternalPlayer()
                      if (player) {
                        const videoWidth = player.videoWidth
                        const videoHeight = player.videoHeight
                        canvas.width = videoWidth
                        canvas.height = videoHeight
                        const ctx = canvas.getContext("2d")!
                        ctx.drawImage(player, 0, 0, videoWidth, videoHeight)
                        canvas.toBlob((blob) => {
                          setCroppedVideo(blob)
                          setCropping(false)
                        }, "video/mp4")
                      }
                    }
                  }}
                  style={{ position: "absolute", top: 0, left: 0, zIndex: 0, width: "100%", height: "100%" }}
                />
                <button onClick={handleCancelCrop} style={{ position: "absolute", bottom: 0, left: 0, zIndex: 2 }}>
                  Cancel
                </button>
              </div>
            ) : (
              <button onClick={() => setCropping(true)}>Crop video</button>
            )}
          </div>
        )}
      </div>
    </div>
  )  
}

export default VideoEditor