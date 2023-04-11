/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react'
import { loginFields } from '../constants/formFields'
import FormAction from './FormAction'
import FormExtra from './FormExtra'
import Input from './Input'
type LoginState = Record<string, string>

const fields = loginFields
const fieldsState: LoginState = { email: '', password: '' }

export default function Login (): JSX.Element {
  const [loginState, setLoginState] = useState<LoginState>(fieldsState)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setLoginState({ ...loginState, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    authenticateUser()
  }

  // Handle Login API Integration here
  const authenticateUser = (): void => {
    const endpoint =
      'https://api.loginradius.com/identity/v2/auth/login?apikey=641ad513e382b893fc591d88'
    fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginState)
    })
      .then(async (response) => await response.json())
      .then((_data) => {
        // API Success from LoginRadius Login API
      })
      .catch((error) => { console.log(error) })
  }

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="-space-y-px">
        {fields.map((field) => (
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

      <FormExtra />

      <FormAction handleSubmit={handleSubmit} text="Login" />
    </form>
  )
}