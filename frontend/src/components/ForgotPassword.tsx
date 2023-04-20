import { useState, ChangeEvent, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { forgotFields } from '../constants/formFields'
import FormAction from './FormAction'
import Input from './Input'
import axios from 'axios'
import React from 'react'

const fields = forgotFields
const fieldsState: Record<string, string> = {}

fields.forEach(field => (fieldsState[field.id] = ''))

<<<<<<< HEAD
export default function ForgotPassword(): JSX.Element {
=======
export default function ForgotPassword() {
  const [forgotPasswordState, setForgotPasswordState] =
    useState<Record<string, string>>(fieldsState)
  const navigate = useNavigate()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setForgotPasswordState({ ...forgotPasswordState, [id]: value })
  }

  const [passwordsMatch, setPasswordsMatch] = useState(true)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (arePasswordsEqual()) {
      console.log(forgotPasswordState)
      resetPassword()
    } else if (!arePasswordsEqual()) {
      console.log('Passwords do not match')
      setPasswordsMatch(false)
    }
  }

  const arePasswordsEqual = (): boolean => {
    return forgotPasswordState.newPassword === forgotPasswordState.confirmPassword
  }

  const resetPassword = async () => {
    const response = await axios.post('http://127.0.0.1:5600/reset-password', {
      email: forgotPasswordState.email,
      newPassword: forgotPasswordState.newPassword
    })
    console.log(response)
    navigate('/profile') 
  }

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="">
        {fields.map(field => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={forgotPasswordState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
            customClass={undefined}
          />
        ))}
        {!passwordsMatch && (
          <p className="text-me-yellow">Passwords do not match</p>
        )}
        <FormAction handleSubmit={handleSubmit} text="Reset password" />
      </div>
    </form>
  )
}
