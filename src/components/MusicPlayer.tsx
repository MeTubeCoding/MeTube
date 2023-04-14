import React, { useState, useRef } from 'react'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const MusicPlayer = () => {
  const [selectedAudios, setSelectedAudios] = useState<File[]>([])
  const audioRefs = useRef<Array<HTMLAudioElement | null>>([])

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files != null) {
      const fileList = Array.from(files)
      setSelectedAudios([...selectedAudios, ...fileList])
    }
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/no-unused-vars
  const handlePlay = (index: number) => {
    if (audioRefs.current[index] != null) {
      void audioRefs.current[index]?.play()
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/explicit-function-return-type
  const handlePause = (index: number) => {
    if (audioRefs.current[index] != null) {
      audioRefs.current[index]?.pause()
    }
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleRemove = (index: number) => {
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
        </div>
      ))}
    </div>
  )
}

export default MusicPlayer
