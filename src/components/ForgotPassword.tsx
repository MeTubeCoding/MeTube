/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable react/react-in-jsx-scope */
import { useState, type ChangeEvent, type FormEvent } from 'react'
import { signupFields } from '../constants/formFields'
import FormAction from './FormAction'
import Input from './Input'

const fields = signupFields
const fieldsState: Record<string, string> = {}

fields.forEach((field) => (fieldsState[field.id] = ''))

export default function ForgotPassword () {
  const [PasswordState, setPasswordState] = useState<Record<string, string>>(
    fieldsState
  )

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordState({ ...PasswordState, [e.target.id]: e.target.value })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(PasswordState)
    createAccount()
  }

  const createAccount = () => {
    const local = PasswordState

    fetch('http://127.0.0.1:5600/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(local)
    })
      .then(async (res) => {
        console.log(res)
        return await res.text()
      })
      .then((res) => {
        console.log(res)
      })
  }

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={PasswordState[field.id]}
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
        <FormAction handleSubmit={handleSubmit} text="Envoyer" />
      </div>
    </form>
  )
}
