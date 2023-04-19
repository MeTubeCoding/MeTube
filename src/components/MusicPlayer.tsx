import React, { useState, useRef } from 'react'
import PlayMusicWithVideo from './PlayMusicWithVideo'

const MusicPlayer = () => {
  const [selectedAudios, setSelectedAudios] = useState<File[]>([])
  const audioRefs = useRef<Array<HTMLAudioElement | null>>([])

  const handleMusicChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files != null) {
      const fileList = Array.from(files)
      setSelectedAudios([...selectedAudios, ...fileList])
    }
  }

  const handleRemove = (index: number) => {
    const updatedFiles = [...selectedAudios]
    updatedFiles.splice(index, 1)
    setSelectedAudios(updatedFiles)
    audioRefs.current.splice(index, 1)
  }

  const handlePlayWithVideo = () => {
    if (audioRefs.current.length > 0 && selectedAudios.length > 0) {
      ;<PlayMusicWithVideo
        selectedAudios={selectedAudios}
        audioRefs={audioRefs}
      /> // Utiliser le composant PlayMusicWithVideo
    }
  }

  return (
    <div>
      <input type="file" onChange={handleMusicChange} multiple />
      {selectedAudios.map((file, index) => (
        <div key={index}>
          <audio ref={ref => (audioRefs.current[index] = ref)} controls>
            <source src={URL.createObjectURL(file)} />
          </audio>
          <button
            onClick={() => {
              handlePlayWithVideo()
            }}
          >
            Jouer la musique sur la vidéo
          </button>
          <br></br>
          <button
            onClick={() => {
              handleRemove(index)
            }}
          >
            Enlever la musique
          </button>
        </div>
      ))}
    </div>
  )
}

export default MusicPlayer
