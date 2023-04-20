import React, { useState, useRef } from 'react'

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

  return (
    <div>
      <input type="file" onChange={handleMusicChange} multiple />
      {selectedAudios.map((file, index) => (
        <div key={index}>
          <audio ref={ref => (audioRefs.current[index] = ref)} controls>
            <source src={URL.createObjectURL(file)} />
          </audio>
          <br></br>
          <button
            onClick={() => {
              handleRemove(index)
            }}
            className="px-4 py-2 text-sm font-medium text-me-orange bg-me-mediumpurple rounded-md cursor-pointer hover:bg-me-lightpurple focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-me-lightpurple"
          >
            Enlever la musique
          </button>
        </div>
      ))}
    </div>
  )
}

export default MusicPlayer
