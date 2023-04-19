import React, { useState, useRef } from 'react'

interface CropperProps {
  src: string
  onDone: (croppedSrc: string) => void
  oncancel: () => void
}

const Cropper = ({ src, onDone, oncancel }: CropperProps) => {
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

  const handleCrop = () => {
    if (videoRef.current && canvasRef.current) {
      if (!cropMode) {
        // Entrer en mode de sélection de la zone de recadrage
        setCropMode(true)
      } else {
        // Annuler la sélection de la zone de recadrage
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

      // calculer la nouvelle position et la nouvelle taille de la zone de recadrage
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

      // mettre à jour l'état de la position et de la taille de la zone de recadrage
      setCropPosition(newPosition)
      setCropSize({ width: newWidth, height: newHeight })
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
        const cropWidth = cropSize.width * scaleX
        const cropHeight = cropSize.height * scaleY

        // Dessiner l'image recadrée sur le canvas
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

        // Convertir l'image recadrée en base64
        const croppedSrc = canvas.toDataURL()

        // Appeler la fonction onDone avec l'image recadrée
        onDone(croppedSrc)
      }
    }
  }

  function handleLoad(): void {
    if (videoRef.current && canvasRef.current) {
      // Charger la vidéo
      const video = videoRef.current
      video.load()

      // Définir les dimensions du canvas en fonction de la taille de la vidéo
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
          <p>Sélectionnez la zone à recadrer</p>
          <p>
            Dimensions: {cropDimensions.width.toFixed(0)} x{''}
            {cropDimensions.height.toFixed(0)}
          </p>
        </div>
      )}
      <button onClick={handleCrop}>Recadrer</button>
      <button onClick={oncancel}>Annuler</button>
    </div>
  )
}

export default Cropper
