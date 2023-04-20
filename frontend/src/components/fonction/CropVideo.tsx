<<<<<<< HEAD:src/components/fonction/CropVideo.tsx
import React, { useState, useRef } from 'react'
=======
import React, { useState, useRef, useEffect } from 'react'
>>>>>>> 3e6b1aa594d5d0812ed4a75da42e30cd001b15fd:frontend/src/components/fonction/CropVideo.tsx

interface CropperProps {
  src: string
  onDone: (croppedSrc: string) => void
  onCancel: () => void
}

const Cropper = ({ src, onDone, onCancel }: CropperProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [cropMode, setCropMode] = useState<boolean>(false)
  const [cropDimensions, setCropDimensions] = useState<{
    x: number
    y: number
    width: number
    height: number
  }>({ x: 0, y: 0, width: 0, height: 0 })
  const [dragging, setDragging] = useState<boolean>(false)
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0
  })
  const [cropPosition, setCropPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0
  })
  const [cropSize, setCropSize] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0
  })
<<<<<<< HEAD:src/components/fonction/CropVideo.tsx
=======
  useEffect(() => {
    setCropDimensions({
      x: cropPosition.x,
      y: cropPosition.y,
      width: cropSize.width,
      height: cropSize.height
    })
  }, [cropPosition, cropSize])
>>>>>>> 3e6b1aa594d5d0812ed4a75da42e30cd001b15fd:frontend/src/components/fonction/CropVideo.tsx

  const handleCrop = () => {
    if (videoRef.current && canvasRef.current) {
      if (!cropMode) {
        // Enter crop mode
        setCropMode(true)
<<<<<<< HEAD:src/components/fonction/CropVideo.tsx
=======
        drawCropArea()
>>>>>>> 3e6b1aa594d5d0812ed4a75da42e30cd001b15fd:frontend/src/components/fonction/CropVideo.tsx
      } else {
        // Cancel crop selection
        setCropMode(false)
        setCropPosition({ x: 0, y: 0 })
        setCropSize({ width: 0, height: 0 })
      }
    }
  }

  const handleMouseDown = ({
    clientX,
    clientY
  }: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    if (cropMode && canvasRef.current) {
      setDragging(true)
      const canvas = canvasRef.current
      const rect = canvas.getBoundingClientRect()
      const x = clientX - rect.left
      const y = clientY - rect.top
      setMousePosition({ x, y })
    }
  }

  const handleMouseUp = () => {
    if (dragging) {
      setDragging(false)
<<<<<<< HEAD:src/components/fonction/CropVideo.tsx
=======
      drawCropArea()
    }
  }
  const drawCropArea = () => {
    if (canvasRef.current && cropMode) {
      const canvas = canvasRef.current
      const context = canvas.getContext('2d')

      if (context) {
        // Clear the canvas
        context.clearRect(0, 0, canvas.width, canvas.height)

        // Draw a semi-transparent overlay
        context.fillStyle = 'rgba(0, 0, 0, 0.5)'
        context.fillRect(0, 0, canvas.width, canvas.height)

        // Draw the crop area
        const x = cropPosition.x
        const y = cropPosition.y
        const width = cropSize.width
        const height = cropSize.height
        context.clearRect(x, y, width, height)

        // Draw the border around the crop area
        context.strokeStyle = 'white'
        context.lineWidth = 2
        context.strokeRect(x, y, width, height)
      }
>>>>>>> 3e6b1aa594d5d0812ed4a75da42e30cd001b15fd:frontend/src/components/fonction/CropVideo.tsx
    }
  }

  const handleMouseMove = (
    event: React.MouseEvent<HTMLCanvasElement, MouseEvent>
  ) => {
    if (dragging && canvasRef.current) {
      const canvas = canvasRef.current
      const rect = canvas.getBoundingClientRect()
      const scaleX = videoRef.current
        ? videoRef.current.videoWidth / videoRef.current.offsetWidth
        : 1
      const scaleY = videoRef.current
        ? videoRef.current.videoHeight / videoRef.current.offsetHeight
        : 1
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top

      // Calculate new crop position and size
      const newPosition = {
        x: Math.max(
          Math.min(
            x,
            videoRef.current ? videoRef.current.videoWidth - cropSize.width : 0
          ),
          0
        ),
        y: Math.max(
          Math.min(
            y,
            videoRef.current
              ? videoRef.current.videoHeight - cropSize.height
              : 0
          ),
          0
        )
      }
      const newWidth =
        Math.min(x, videoRef.current ? videoRef.current.videoWidth : 0) -
        newPosition.x
      const newHeight =
        Math.min(y, videoRef.current ? videoRef.current.videoHeight : 0) -
        newPosition.y

      // Update crop position and size state
      setCropPosition(newPosition)
      setCropSize({ width: newWidth, height: newHeight })
<<<<<<< HEAD:src/components/fonction/CropVideo.tsx
=======
      drawCropArea()
>>>>>>> 3e6b1aa594d5d0812ed4a75da42e30cd001b15fd:frontend/src/components/fonction/CropVideo.tsx
    }
  }

  const handleSelect = () => {
    if (videoRef.current && canvasRef.current) {
      // Exit crop mode
      setCropMode(false)
      const video = videoRef.current
      const canvas = canvasRef.current
      const context = canvas.getContext('2d')
      if (context) {
        // Calculate crop dimensions
        const scaleX = video.videoWidth / video.offsetWidth
        const scaleY = video.videoHeight / video.offsetHeight
        const cropWidth = cropSize.width * scaleX
        const cropHeight = cropSize.height * scaleY

        // Draw the cropped image on the canvas
        context.drawImage(
          video,
          cropPosition.x * scaleX,
          cropPosition.y * scaleY,
          cropWidth,
          cropHeight,
          0,
          0,
          canvas.width,
          canvas.height
        )

        // Convert cropped image to base64
        const croppedSrc = canvas.toDataURL()

        // Call onDone function with the cropped image
        onDone(croppedSrc)
      }
    }
  }

  function handleLoad(): void {
    if (videoRef.current && canvasRef.current) {
      // Load the video
      const video = videoRef.current
      video.load()
      // Set canvas dimensions based on video size
      const canvas = canvasRef.current
      canvas.width = video.videoWidth
      canvas.height = video.videoHeight
    }
  }

  return (
    <div>
      <video ref={videoRef} src={src} onLoadedMetadata={handleLoad} />
      <canvas
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onClick={handleSelect}
      />
      {cropMode && (
        <div>
          <p>Select area to crop</p>
          <p>
            Dimensions: {cropDimensions.width.toFixed(0)} x{''}
            {cropDimensions.height.toFixed(0)}
          </p>
        </div>
      )}
      <button onClick={handleCrop}>Crop</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  )
}

export default Cropper
