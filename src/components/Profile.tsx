import React, { useState } from 'react'
import { loginFields } from '../constants/formFields'
import { useSelector } from 'react-redux'

type ProfileState = Record<string, string>

const fields = loginFields
const fieldsState: ProfileState = {}
fields.forEach(field => {
  fieldsState[field.id] = ''
})
export default function Profile(): JSX.Element {
  const [loginState, setLoginState] = useState<ProfileState>(fieldsState)
  const email = useSelector(
    (state: { user: { email: any } }) => state.user.email
  )
  const username = useSelector(
    (state: { user: { username: any } }) => state.user.username
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    authenticateUser()
  }

  // Handle Login API Integration here
  const authenticateUser = (): void => {
    fetch('http://localhost:5600/data', {
      method: 'GET', // Utiliser la méthode GET pour récupérer des données
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(async response => await response.json()) // Convertir la réponse en JSON
      .then(data => {
        console.log(data)
      }) // Utiliser les données récupérées
      .catch(error => {
        console.error(error)
      }) // Gérer les erreurs éventuelles
  }

  return (
    <div>
      <div>
        <p>Email: {email}</p>
        <p>Username: {username}</p>
      </div>
    </div>
  )
}
