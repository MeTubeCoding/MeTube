/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unreachable */
/* eslint-disable no-return-assign */
import { useState } from 'react'
import { signupFields } from '../constants/formFields'
import { redirect } from 'react-router-dom'
import FormAction from './FormAction'
import Input from './Input'

const fields = signupFields
const fieldsState = {}

fields.forEach(field => fieldsState[field.id] = '')

export default function Signup () {
  const [signupState, setSignupState] = useState(fieldsState)

  const handleChange = (e) => setSignupState({ ...signupState, [e.target.id]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(signupState)
    createAccount()
  }

  const createAccount = () => {
    const local = signupState

    fetch('http://127.0.0.1:5600/data', {

      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(local)
    })
      .then((res) => {
        return res.text()
        console.log(res)
      })
      .then((res) => {
        console.log(res)
      })
  }

  return (
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="">
        {
                fields.map(field =>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={signupState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            lastName={field.lastName}
                            firstName={field.firstName}
                            country={field.country}
                            city={field.city}
                            username={field.username}
                            email={field.email}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                    />

                )
            }
          <FormAction handleSubmit={handleSubmit} text="Signup" to="/login"/>
        </div>

      </form>
  )
}
