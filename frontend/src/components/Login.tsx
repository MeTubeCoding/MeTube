import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginFields } from '../constants/formFields'
import FormAction from './FormAction'
import FormExtra from './FormExtra'
import Input from './Input'
import bcrypt from 'bcryptjs'

interface LoginState {
  email: string
  password: string
  error: string | null
  [key: string]: any
}

const fields = loginFields
const fieldsState: LoginState = { email: '', password: '', error: null }

const Login: React.FC = () => {
  const [loginState, setLoginState] = useState<LoginState>(fieldsState)
  const navigate = useNavigate()
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setLoginState({
      ...loginState,
      [e.target.name]: e.target.value,
      error: null
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    authenticateUser()
  }

  const authenticateUser = (): void => {
    const endpoint = 'http://localhost:5600/login' // Remplacez par l'URL de votre serveur
    fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginState)
    })
      .then(async response => {
        const data = await response.json()
        console.log('Réponse du serveur :', response)
        console.log('Données renvoyées :', data)

        if (response.ok && Boolean(data.success)) {
          // Récupérez le mot de passe hashé stocké dans votre base de données pour l'utilisateur correspondant
          const hashedPassword = data.hashedPassword
          console.log(hashedPassword)
          console.log(loginState.password)
          localStorage.setItem('username', data.username)
          localStorage.setItem('email', data.email)
          localStorage.setItem('password', hashedPassword)
          // Comparez le mot de passe hashé stocké dans votre base de données avec le mot de passe entré par l'utilisateur lors de la tentative de connexion
          const passwordMatch = bcrypt.compareSync(
            loginState.password,
            hashedPassword
          )
          if (passwordMatch) {
            // Connexion réussie
            localStorage.setItem('isLoggedIn', 'true')
            localStorage.setItem('email', loginState.email)
            navigate('/profile', { state: { email: loginState.email } })
          } else {
            // Échec de la connexion
            setLoginState({
              ...loginState,
              error: 'Adresse e-mail ou mot de passe incorrect.'
            })
            console.log(
              'Erreur lors de la connexion :',
              'Adresse e-mail ou mot de passe incorrect.'
            )
          }
        } else {
          // Échec de la connexion
          setLoginState({
            ...loginState,
            error: data.message
          })
          console.log('Erreur lors de la connexion :', data.message)
        }
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <form className="mt-8 space-y-6 text-me-white px-80" onSubmit={handleSubmit}>
      <div className="-space-y-px">
        {fields.map(field => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={loginState[field.name]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            type={field.type}
            name={field.name}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
            customClass={undefined}
          />
        ))}
      </div>

      {Boolean(loginState.error) && (
        <div className="text-red-500">{loginState.error}</div>
      )}

      <FormExtra />
      <div className="px-60">
      <FormAction handleSubmit={handleSubmit} text="Login" />
      </div>
    </form>
  )
}

export default Login
