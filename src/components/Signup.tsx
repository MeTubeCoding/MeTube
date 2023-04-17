/* eslint-disable react/jsx-key */
/* eslint-disable react/react-in-jsx-scope */
import { useState, type ChangeEvent, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { signupFields } from '../constants/formFields'
import FormAction from './FormAction'
import Input from './Input'
import bcrypt from 'bcryptjs'
import axios from 'axios'
import zxcvbn from 'zxcvbn';
import React from 'react'

const fields = signupFields
const fieldsState: Record<string, string> = {}

fields.forEach(field => (fieldsState[field.id] = ''))

export default function Signup() {
  const [signupState, setSignupState] =
    useState<Record<string, string>>(fieldsState)
  const navigate = useNavigate()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setSignupState({ ...signupState, [id]: value });
    
    if (id === 'password') {
      const strength = zxcvbn(value).score; // Score ranges from 0 to 4
      setPasswordStrength(strength);
    }
  };
  

  const [passwordsMatch, setPasswordsMatch] = useState(true)

  const [passwordStrong, setPasswordStrong] = useState(true);

  const [passwordStrength, setPasswordStrength] = useState(0);


  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Vérifier si l'e-mail existe déjà
    const emailExists = await checkEmailExists(signupState.emailaddress);
    if (emailExists) {
      console.log('Email already exists');
      return;
    }

    if (arePasswordsEqual() && isPasswordStrong(signupState.password)) {
      console.log(signupState);
      createAccount();
    } else if (!arePasswordsEqual()) {
      console.log('Passwords do not match');
      setPasswordsMatch(false);
    } else {
      console.log('Password is not strong enough');
      setPasswordStrong(false);
    }
  };


  const checkEmailExists = async (email: string) => {
    const response = await axios.get(`http://127.0.0.1:5600/check-email?email=${email}`);
    return response.data.exists;
  };


  const arePasswordsEqual = (): boolean => {
    return signupState.password === signupState.confirmpassword
  }

  const isPasswordStrong = (password: string): boolean => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
    // Le mot de passe doit contenir au moins une minuscule, une majuscule, un chiffre et faire au moins 8 caractères de long
    return regex.test(password)
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
        {signupState.password && (
          <progress
            value={passwordStrength}
            max="4"
            className={`mt-2 appearance-none w-full ${
              passwordStrength === 4
                ? 'bg-green-300'
                : passwordStrength === 3
                ? 'bg-yellow-300'
                : 'bg-red-300'
            }`}
          />
        )}
        {!passwordsMatch && (
          <p className="text-me-yellow">Passwords do not match</p>
        )}
        {!passwordStrong && (
          <p className="text-me-yellow">Password must contain at least one lowercase letter, one uppercase letter, one number, and be at least 8 characters long</p>
        )}
        <FormAction handleSubmit={handleSubmit} text="Signup" />
      </div>
    </form>
  )
}
