/* eslint-disable new-cap */
/* eslint-disable react/prop-types */
import React, { useState, useEffect, useCallback } from 'react'
import { IconButton } from '@mui/material'
import MicIcon from '@mui/icons-material/Mic'

// Définition d'un composant fonctionnel nommé VoiceRecognitionButton qui prend une prop setSearchValue
const VoiceRecognitionButton = ({ setSearchValue }) => {
  // Initialisation de l'état listening à false (pas en train d'écouter) et de l'état speech à null
  const [listening, setListening] = useState(false)
  const [speech, setSpeech] = useState(null)

  // Définition d'une fonction handleRecognitionResult qui sera utilisée pour traiter les résultats de la reconnaissance vocale
  const handleRecognitionResult = useCallback((event) => {
    // Récupération de la dernière transcription dans les résultats de reconnaissance
    const transcript = event.results[event.results.length - 1][0].transcript
    // Appel de la fonction setSearchValue pour mettre à jour la valeur de la recherche
    setSearchValue(transcript)
  }, [setSearchValue])

  // Définition d'une fonction handleButtonClick qui sera appelée lorsqu'on clique sur le bouton
  const handleButtonClick = useCallback(() => {
    // Si on n'est pas en train d'écouter, on commence à écouter
    if (!listening) {
      setListening(true)
      speech.start()
    // Si on est en train d'écouter, on arrête d'écouter
    } else {
      setListening(false)
      speech.stop()
    }
  }, [listening, speech])

  // Utilisation du hook useEffect pour initialiser la reconnaissance vocale
  useEffect(() => {
    // Vérification que la reconnaissance vocale est prise en charge par le navigateur
    if (!window.webkitSpeechRecognition) {
      console.error('Speech recognition not supported by this browser')
      return
    }
    // Initialisation d'un objet de reconnaissance vocale avec la langue française et la reconnaissance continue
    const recognition = new window.webkitSpeechRecognition()
    recognition.lang = 'fr-FR'
    recognition.continuous = true
    // Définition de la fonction à appeler lorsqu'un résultat de reconnaissance est disponible
    recognition.onresult = handleRecognitionResult
    // Mise à jour de l'état speech avec l'objet de reconnaissance vocale créé
    setSpeech(recognition)

    // Fonction de nettoyage qui sera appelée lorsque le composant est démonté
    return () => {
      recognition.stop()
    }
  }, [handleRecognitionResult])

  // Rendu du bouton avec l'icône MicIcon et la fonction handleButtonClick appelée lorsqu'on clique dessus
  return (
    <IconButton onClick={handleButtonClick} sx={{ p: '10px', color: 'red' }} aria-label='voice recognition'>
      <MicIcon />
    </IconButton>
  )
}

// Exportation du composant VoiceRecognitionButton par défaut
export default VoiceRecognitionButton
