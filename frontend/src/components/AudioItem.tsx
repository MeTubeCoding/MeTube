import React, { useRef } from 'react'

interface AudioItemProps {
  audio: {
    file: string
    title: string
  }
  handleAudioSelect: (audio: File) => void
}

const AudioItem: React.FC<AudioItemProps> = ({ audio, handleAudioSelect }) => {
  const audioRef = useRef<HTMLAudioElement>(null)

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play()
    }
  }

  const handleAddAudio = () => {
    fetch(audio.file)
      .then(response => response.blob())
      .then(blob => {
        const file = new File([blob], audio.title, { type: 'audio/mp3' })
        handleAudioSelect(file)
      })
  }

  return (
    <div className="flex items-center space-x-4">
      <button className="btn" onClick={playAudio}>
        Play
      </button>
      <button className="btn" onClick={handleAddAudio}>
        Add
      </button>
      <audio ref={audioRef} src={audio.file} controls hidden />
      <span className="text-me-black">{audio.title}</span>
    </div>
  )
}

export default AudioItem
