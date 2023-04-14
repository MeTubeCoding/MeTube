/* eslint-disable react/react-in-jsx-scope */
import { useState, type ChangeEvent, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { signupFields } from '../constants/FormFields'
import FormAction from './FormAction'
import Input from './Input'
import bcrypt from 'bcryptjs'
import { FileUpload } from '@mui/icons-material'

const fields = signupFields
const fieldsState: Record<string, string> = {}

fields.forEach(field => (fieldsState[field.id] = ''))

export default function Signup() {
  const [signupState, setSignupState] =
    useState<Record<string, string>>(fieldsState)
  const navigate = useNavigate()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSignupState({ ...signupState, [e.target.id]: e.target.value })
  }

  const [passwordsMatch, setPasswordsMatch] = useState(true)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(signupState)
    if (arePasswordsEqual()) {
      console.log(signupState)
      createAccount()
    } else {
      console.log('Passwords do not match')
      setPasswordsMatch(false)
    }
  }

  const arePasswordsEqual = (): boolean => {
    return signupState.password === signupState.confirmpassword
  }

  const createAccount = async () => {
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(signupState.password, salt)
    const local = {
      ...signupState,
      password: hashedPassword,
      confirmpassword: hashedPassword
    }

    fetch('http://127.0.0.1:5600/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(local)
    })
      .then(async res => {
        console.log(res)
        return await res.text()
      })
      .then(res => {
        console.log(res)
        navigate('/login') // Rediriger vers la page "account"
      })
  }

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="">
        {fields.map(field => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={signupState[field.id]}
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
        <FormAction handleSubmit={handleSubmit} text="Signup" />
        {!passwordsMatch && (
          <p className="text-me-yellow">Passwords do not match</p>
        )}
      </div>
    </form>
  )
}
