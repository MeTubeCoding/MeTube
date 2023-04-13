import { useState, type ChangeEvent, type FormEvent } from 'react'
import { signupFields } from '../constants/formFields'
import FormAction from './FormAction'
import Input from './Input'

const fields = signupFields
const fieldsState: Record<string, string> = {}

fields.forEach(field => fieldsState[field.id] = '')

export default function CreateChannel(){
    const [creationState, setSignupState] = useState<Record<string, string>>(fieldsState)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => { setSignupState({ ...creationState, [e.target.id]: e.target.value }) }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(creationState)
    createChannel()
  }

    const createChannel = () => {
        const local = creationState

        fetch('/create-channel' , {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ key: 'value' }),
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
            {
              fields.map(field =>
                <Input
                  key={field.id}
                  handleChange={handleChange}
                  value={creationState[field.id]}
                  labelText={field.labelText}
                  labelFor={field.labelFor}
                  id={field.id}
                  name={field.name}
                  type={field.type}
                  isRequired={field.isRequired}
                  placeholder={field.placeholder}
                  customClass={undefined}/>
              )
            }
            <FormAction handleSubmit={handleSubmit} text="Créer une chaine"/>
          </div>
        </form>
      )
}