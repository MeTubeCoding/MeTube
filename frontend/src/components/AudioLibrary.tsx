import React from 'react'
import AudioItem from './AudioItem'

interface AudioLibraryProps {
  audioLibrary: { file: string; title: string }[]
  handleAudioSelect: (audio: File) => void
}

const AudioLibrary: React.FC<AudioLibraryProps> = ({
  audioLibrary,
  handleAudioSelect
}) => {
  return (
    <div>
      <h2 className="text-xl font-medium text-me-black">Audio Library:</h2>
      {audioLibrary.map((audio, index) => (
        <AudioItem
          key={index}
          audio={audio}
          handleAudioSelect={handleAudioSelect}
        />
      ))}
    </div>
  )
}

export default AudioLibrary
