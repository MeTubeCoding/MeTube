import React from 'react'

interface Props {
  selectedAudios: File[]
  audioRefs: React.MutableRefObject<Array<HTMLAudioElement | null>>
  videoRef: React.RefObject<HTMLVideoElement>
}

const PlayMusicWithVideo = ({ selectedAudios, audioRefs, videoRef }: Props) => {
  React.useEffect(() => {
    const syncAudio = () => {
      const audioElements = audioRefs.current.slice(
        audioRefs.current.length - selectedAudios.length
      )

      audioElements.forEach((audioElement: HTMLAudioElement | null) => {
        if (audioElement) {
          audioElement.currentTime = videoRef.current!.currentTime
        }
      })
    }

    const playTogether = () => {
      const audioElements = audioRefs.current.slice(
        audioRefs.current.length - selectedAudios.length
      )

      audioElements.forEach((audioElement: HTMLAudioElement | null) => {
        if (audioElement) {
          audioElement.play()
        }
      })
    }

    const videoElement = videoRef.current

    if (videoElement && audioRefs.current.length >= selectedAudios.length) {
      audioRefs.current.slice(-selectedAudios.length).forEach(audio => {
        audio!.addEventListener('canplay', playTogether)
      })

      videoElement.addEventListener('play', syncAudio)
      videoElement.addEventListener('timeupdate', syncAudio)
      videoElement.addEventListener('ended', () => {
        audioRefs.current.slice(-selectedAudios.length).forEach(audio => {
          audio!.pause()
          audio!.currentTime = 0
        })
      })
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener('play', syncAudio)
        videoElement.removeEventListener('timeupdate', syncAudio)
        videoElement.removeEventListener('ended', () => {
          audioRefs.current.slice(-selectedAudios.length).forEach(audio => {
            audio!.pause()
            audio!.currentTime = 0
          })
        })
      }

      audioRefs.current.slice(-selectedAudios.length).forEach(audio => {
        audio!.removeEventListener('canplay', playTogether)
      })
    }
  }, [selectedAudios, audioRefs, videoRef])

  return null
}

export default PlayMusicWithVideo
