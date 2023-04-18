import React, { useState, useRef } from 'react'

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
    <button onClick={handleClick}>
      <svg
        aria-hidden="true"
        className="w-5 h-5 bg-me-yellow"
        fill="none"
        stroke="white"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        ></path>
      </svg>
      <span className="sr-only">
        {isListening ? 'Stop' : 'Start'} listening
      </span>
    </button>
  ) : null
}

export default VoiceRecognitionButton
