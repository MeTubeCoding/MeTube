import React, { useState, useRef } from 'react'

interface CropperProps {
  src: string
  onDone: (croppedSrc: string) => void
  onCancel: () => void
}

const Cropper = ({ src }: CropperProps) => {
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

  const handleCrop = () => {
    if (videoRef.current && canvasRef.current) {
      // Entrer en mode de sélection de la zone de recadrage
      setCropMode(true)
    }
  }

  const handleMouseDown = (
    event: React.MouseEvent<HTMLCanvasElement, MouseEvent>
  ) => {
    if (cropMode && canvasRef.current) {
      setDragging(true)
      const canvas = canvasRef.current
      const rect = canvas.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top
      setMousePosition({ x, y })
    }
  }

  const handleMouseUp = () => {
    if (dragging) {
      setDragging(false)
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
      const deltaX = x - mousePosition.x
      const deltaY = y - mousePosition.y
      setCropDimensions(prev => ({
        ...prev,
        x: Math.max(
          Math.min(
            prev.x + deltaX * scaleX,
            videoRef.current ? videoRef.current.videoWidth - prev.width : 0
          ),
          0
        ),
        y: Math.max(
          Math.min(
            prev.y + deltaY * scaleY,
            videoRef.current ? videoRef.current.videoHeight - prev.height : 0
          ),
          0
        )
      }))
      setMousePosition({ x, y })
    }
  }

  const handleSelect = () => {
    if (videoRef.current && canvasRef.current) {
      // Sortir du mode de sélection de la zone de recadrage
      setCropMode(false)
      const video = videoRef.current
      const canvas = canvasRef.current
      const context = canvas.getContext('2d')

      if (context) {
        // Calculer la taille de la zone de recadrage
        const scaleX = video.videoWidth / video.offsetWidth
        const scaleY = video.videoHeight / video.offsetHeight
        const cropWidth = cropDimensions.width * scaleX
        const cropHeight = cropDimensions.height * scaleY

        // Dessiner la zone de recadrage sur le canvas
        context.drawImage(
          video,
          cropDimensions.x,
          cropDimensions.y,
          cropWidth,
          cropHeight,
          0,
          0,
          cropWidth,
          cropHeight
        )
        // Obtenir l'image recadrée sous forme de base64
        const croppedImage = canvas.toDataURL('image/png')

        // Envoyer l'image recadrée à une API ou la télécharger
        console.log(croppedImage)
      }
    }
  }

  return (
    <div>
      <video
        src={src}
        ref={videoRef}
        onPlay={() => {
          if (videoRef.current && canvasRef.current) {
            const canvas = canvasRef.current
            const video = videoRef.current
            const context = canvas.getContext('2d')
            if (context) {
              // Mettre la largeur et la hauteur du canvas à celles de la vidéo
              canvas.width = video.videoWidth
              canvas.height = video.videoHeight
              // Dessiner la vidéo sur le canvas toutes les 16ms (environ 60 fps)
              setInterval(() => {
                context.drawImage(video, 0, 0, canvas.width, canvas.height)
              }, 16)
            }
          }
        }}
      />
      {cropMode && (
        <canvas
          ref={canvasRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onClick={handleSelect}
          style={{ position: 'absolute', top: 0, left: 0 }}
        />
      )}
      <button onClick={handleCrop}>Recadrer</button>
    </div>
  )
}

export default Cropper
