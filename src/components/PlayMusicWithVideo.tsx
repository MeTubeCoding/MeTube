import React from 'react'

interface Props {
  selectedAudios: File[]
  audioRefs: React.MutableRefObject<Array<HTMLAudioElement | null>>
}

const PlayMusicWithVideo = ({ selectedAudios, audioRefs }: Props) => {
  const videoElement = document.getElementById(
    'video-element'
  ) as HTMLVideoElement

  const syncAudio = (ev: Event) => {
    const audioElements = audioRefs.current.slice(
      audioRefs.current.length - selectedAudios.length
    )

    audioElements.forEach((audioElement: HTMLAudioElement | null) => {
      if (audioElement) {
        audioElement.currentTime = videoElement.currentTime
      }
    })
  }

  const playTogether = (ev: Event) => {
    ;(ev.target as HTMLAudioElement).play()
  }

  // Vérifier que audioRefs.current est défini avant de continuer
  if (audioRefs.current && selectedAudios.length > 0 && videoElement) {
    const lastAudioIndex = audioRefs.current.length - 1

    // Utiliser la méthode slice() pour extraire les derniers éléments du tableau
    const audioElements = audioRefs.current.slice(
      lastAudioIndex - selectedAudios.length + 1
    )

    // Ajouter un événement "canplay" pour s'assurer que la lecture ne commence pas avant que l'audio soit prêt
    audioElements.forEach(audioElement => {
      if (audioElement) {
        audioElement.addEventListener('canplay', playTogether)
      }
    })

    // Ajouter un événement "timeupdate" pour synchroniser la lecture de l'audio et de la vidéo
    videoElement.addEventListener('timeupdate', syncAudio)

    // Supprimer les événements lorsqu'ils ne sont plus nécessaires
    const removeListeners = () => {
      videoElement.removeEventListener('timeupdate', syncAudio)
      audioElements.forEach(audioElement => {
        if (audioElement) {
          audioElement.removeEventListener('canplay', playTogether)
        }
      })
    }

    videoElement.addEventListener('ended', removeListeners)
    videoElement.addEventListener('pause', removeListeners)
  }

  // Retourner null car cette fonction ne rend rien
  return null
}

export default PlayMusicWithVideo
