import React, { useState, useRef } from 'react'

const MusicPlayer = () => {
  const [selectedAudios, setSelectedAudios] = useState<File[]>([])
  const audioRefs = useRef<Array<HTMLAudioElement | null>>([])

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>): any => {
    const files = event.target.files
    if (files != null) {
      const fileList = Array.from(files)
      setSelectedAudios([...selectedAudios, ...fileList])
    }
  }

  const handlePlay = (index: number): any => {
    if (audioRefs.current[index] != null) {
      void audioRefs.current[index]?.play()
    }
  }

  const handlePause = (index: number): any => {
    if (audioRefs.current[index] != null) {
      audioRefs.current[index]?.pause()
    }
  }

  const handleRemove = (index: number): any => {
    const updatedFiles = [...selectedAudios]
    updatedFiles.splice(index, 1)
    setSelectedAudios(updatedFiles)
    audioRefs.current.splice(index, 1)
  }

  return (
    <div>
      <input type="file" onChange={handleFileChange} multiple />
      {selectedAudios.map((file, index) => (
        <div key={index}>
          <audio ref={(ref) => (audioRefs.current[index] = ref)} controls>
            <source src={URL.createObjectURL(file)} />
          </audio>
          <button onClick={() => { handleRemove(index) }}>Remove</button>
          <button onClick={() => { props.setSelectedMusic([...props.selectedMusic, file]) }}>Superposer</button> {/* Ajouter ce bouton pour superposer la musique */}
        </div>
      ))}
    </div>
  )
  
}

export default MusicPlayer
