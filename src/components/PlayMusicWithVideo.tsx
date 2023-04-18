import React, { useRef } from 'react'
import VideoPage from '../pages/VideoPage'

const PlayMusicWithVideo = (audioFile: File) => {
  const videoElement = document.getElementById(
    'video-element'
  ) as HTMLVideoElement
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const selectedAudios = [audioFile]

  if (audioRef.current && selectedAudios.length > 0 && videoElement) {
    const audioElement = audioRef.current
    audioElement.src = URL.createObjectURL(selectedAudios[0])
    audioElement.play()

    videoElement.addEventListener('play', () => {
      if (audioElement) {
        audioElement.play()
      }
    })
    videoElement.addEventListener('pause', () => {
      if (audioElement) {
        audioElement.pause()
      }
    })
    videoElement.addEventListener('ended', () => {
      if (audioElement) {
        audioElement.pause()
      }
    })
  }

  return <div>PlayMusicWithVideo</div>
}

export default PlayMusicWithVideo
