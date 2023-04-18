import React, { useRef } from 'react'
import VideoPage from '../pages/VideoPage'
import { audioRefs } from './MusicPlayer'
import selectedAudios from './MusicPlayer'

const PlayMusicWithVideo = (audioFile: File) => {
  const videoElement = document.getElementById(
    'video-element'
  ) as HTMLVideoElement
  if (
    audioRefs.current.length > 0 &&
    selectedAudios.length > 0 &&
    videoElement
  ) {
    const audioElement = audioRefs.current[audioRefs.current.length - 1]
    audioElement.src = URL.createObjectURL(audioFile)
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
