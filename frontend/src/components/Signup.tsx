/* eslint-disable react/jsx-key */
/* eslint-disable react/react-in-jsx-scope */
import { useState, ChangeEvent, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { signupFields } from '../constants/formFields'
import FormAction from './FormAction'
import Input from './Input'
import bcrypt from 'bcryptjs'
import axios from 'axios'
import React from 'react'

const fields = signupFields
const fieldsState: Record<string, string> = {}

fields.forEach(field => (fieldsState[field.id] = ''))

const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^\w\d\s:])([^\s]){8,}$/;

export default function Signup() {
  const [signupState, setSignupState] =
    useState<Record<string, string>>(fieldsState)
  const navigate = useNavigate()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setSignupState({ ...signupState, [id]: value });
    
  };

  const [passwordsMatch, setPasswordsMatch] = useState(true)
  const [passwordsValid, setPasswordsValid] = useState(true)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Vérifier si l'e-mail existe déjà
    const emailExists = await checkEmailExists(signupState.emailaddress);
    if (emailExists) {
      console.log('Email already exists');
      return;
    }

    if (arePasswordsEqual() && isPasswordValid()) {
      console.log(signupState);
      createAccount();
    } else if (!arePasswordsEqual()) {
      console.log('Passwords do not match');
      setPasswordsMatch(false);
    } else if (!isPasswordValid()) {
      console.log('Password is not valid');
      setPasswordsValid(false);
    }
  };


  const checkEmailExists = async (email: string) => {
    const response = await axios.get(`http://127.0.0.1:5600/check-email?email=${email}`);
    return response.data.exists;
  };


  const arePasswordsEqual = (): boolean => {
    return signupState.password === signupState.confirmpassword
  }

  const isPasswordValid = (): boolean => {
    return PASSWORD_REGEX.test(signupState.password);
  }


  const createAccount = async () => {
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(signupState.password, salt)
    const local = {
      ...signupState,
      password: hashedPassword,
      confirmpassword: hashedPassword
    }

    fetch('http://127.0.0.1:5600/signup', {
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
        {!passwordsMatch && (
          <p className="text-me-yellow">Passwords do not match</p>
        )}
        {!isPasswordValid && (
          <p className="text-me-yellow">
            Password must contain at least 8 characters, one uppercase letter,
            one number and one special character
          </p>
        )}
        <FormAction handleSubmit={handleSubmit} text="Signup" />
      </div>
    </form>
  )
}
