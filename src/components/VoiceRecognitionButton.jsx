/* eslint-disable new-cap */
/* eslint-disable react/prop-types */
import React, { useState, useEffect, useCallback } from 'react'
import { IconButton } from '@mui/material'
import MicIcon from '@mui/icons-material/Mic'

const VoiceRecognitionButton = ({ setSearchValue }) => {
  const [listening, setListening] = useState(false)
  const [speech, setSpeech] = useState(null)

  const handleRecognitionResult = useCallback((event) => {
    // Check if the event has any results
    if (event.results && event.results.length > 0) {
      // Get the last transcript from the recognition event
      const transcript = event.results[event.results.length - 1][0].transcript
      // Update the search value using the transcript
      setSearchValue(transcript)
    }
  }, [setSearchValue])

  const handleButtonClick = useCallback(() => {
    if (!listening) {
      setListening(true)
      speech.start()
    } else {
      setListening(false)
      speech.stop()
    }
  }, [listening, speech])

  useEffect(() => {
    // Check if the browser supports the SpeechRecognition API
    if (!window.SpeechRecognition) {
      console.error('Speech recognition not supported by this browser')
      return
    }

    const recognition = new window.SpeechRecognition()
    recognition.lang = 'fr-FR'
    recognition.continuous = true
    recognition.maxAlternatives = 1 // set to more than 1 for better results in some browsers

    recognition.onresult = handleRecognitionResult
    setSpeech(recognition)

    return () => {
      recognition.stop()
    }
  }, [handleRecognitionResult])

  return (
    <IconButton onClick={handleButtonClick} sx={{ p: '10px', color: 'white' }} aria-label='voice recognition'>
      <MicIcon />
    </IconButton>
  )
}

export default VoiceRecognitionButton
