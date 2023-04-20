import React, { useState } from 'react'
import './OutilTexte.css'
import NavigationBar from '../NavigationBar'
import VideoItem from '../VideoItem'

interface OutilTexte {
  src: string | undefined
  onAddText: (textSrc: string) => void
}
const OutilTexte = ({ src, onAddText }: OutilTexte) => {
  const [text, setText] = useState('')
  const [title, setTitle] = useState('')
  const [subtitle, setSubtitle] = useState('')
  const [caption, setCaption] = useState('')
  const [texte, setTexte] = useState('')
  const [position, setPosition] = useState({ x: '0', y: '0' })
  const [duration, setDuration] = useState('5')

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.target.value)
  }

  const handleSubtitleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSubtitle(e.target.value)
  }

  const handleCaptionChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setCaption(e.target.value)
  }

  const handleTexteChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setTexte(e.target.value)
  }
  const handleAddText = () => {
    onAddText(text)
    setText('')
  }

  return (
    <div className="flex flex-col h-screen">
      <NavigationBar />
      <div className="flex-1 flex flex-row">
        <div className="flex-1 flex items-center justify-center bg-me-black"></div>
        <div className="w-1/3 flex items-center justify-center">
          <div className="w-full max-w-xs px-4">
            <h3 className="textEdit">Outil de texte</h3>
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Titre"
                className="border border-me-black rounded-md p-2 mb-2"
                value={title}
                onChange={handleTitleChange}
              />
              <input
                type="text"
                placeholder="Sous-titre"
                className="border border-me-black rounded-md p-2 mb-2"
                value={subtitle}
                onChange={handleSubtitleChange}
              />
              <input
                type="text"
                placeholder="Légende"
                className="border border-me-black rounded-md p-2 mb-2"
                value={caption}
                onChange={handleCaptionChange}
              />
              <textarea
                placeholder="Texte"
                className="border border-me-black rounded-md p-2 mb-2"
                value={texte}
                onChange={handleTexteChange}
              />
              <label>
                Position:
                <input
                  type="text"
                  value={position.x}
                  onChange={event =>
                    setPosition({ ...position, x: event.target.value })
                  }
                />
                <input
                  type="text"
                  value={position.y}
                  onChange={event =>
                    setPosition({ ...position, y: event.target.value })
                  }
                />
              </label>
              <label>
                Duration:
                <input
                  type="text"
                  value={duration}
                  onChange={event => setDuration(event.target.value)}
                />
              </label>
              x<button onClick={handleAddText}>Add Text</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OutilTexte
