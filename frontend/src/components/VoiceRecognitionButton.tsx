import React, { useState, useRef } from 'react'
import { MdOutlineKeyboardVoice } from 'react-icons/md'

interface IProps {
  setSearchValue: (value: string) => void
}

const VoiceRecognitionButton = (props: IProps) => {
  const [isListening, setIsListening] = useState(false)
  const recognition = useRef<SpeechRecognition | null>(null)

  const startRecognition = () => {
    const SpeechRecognition =
      window.SpeechRecognition || (window as any).webkitSpeechRecognition
    if (SpeechRecognition) {
      recognition.current = new SpeechRecognition()
      recognition.current.continuous = true
      recognition.current.interimResults = true
      recognition.current.lang = 'fr-FR'

      recognition.current.onstart = () => {
        setIsListening(true)
      }

      recognition.current.onresult = event => {
        const transcript = Array.from(event.results)
          .map(result => result[0].transcript)
          .join('')

        props.setSearchValue(transcript)
      }

      recognition.current.onend = () => {
        setIsListening(false)
      }

      recognition.current.start()
    }
  }

  const stopRecognition = () => {
    recognition.current?.stop()
    setIsListening(false)
  }

  const handleClick = () => {
    if (!isListening) {
      startRecognition()
    } else {
      stopRecognition()
    }
  }

  return window.SpeechRecognition || (window as any).webkitSpeechRecognition ? (
    <button
      onClick={handleClick}
      className="flex items-center justify-center bg-me-purple rounded-full w-12 h-12 outline-none focus:outline-none"
    >
      <MdOutlineKeyboardVoice
        size={20}
        color="bg-me-yellow"
        className={isListening ? 'animate-pulse' : ''}
      />
      <span className="sr-only">
        {isListening ? 'Stop' : 'Start'} listening
      </span>
    </button>
  ) : null
}

export default VoiceRecognitionButton
