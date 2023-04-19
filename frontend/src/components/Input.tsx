<<<<<<< HEAD
=======
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/react-in-jsx-scope */
>>>>>>> 1366d026dfdbeba05e275a49417f8fd5c87b611b
import React from 'react'
import { type ChangeEvent } from 'react'

const fixedInputClass =
  'rounded-md appearance-none relative block w-full bg-me-yellow px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm'

interface InputProps {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void
  value: string
  labelText: string
  labelFor: string
  id: string
  name: string
  type: string
  isRequired?: boolean
  placeholder?: string
  customClass?: string
}

export default function Input({
  handleChange,
  value,
  labelText,
  labelFor,
  id,
  name,
  type,
  isRequired = false,
  placeholder,
  customClass
<<<<<<< HEAD
}: InputProps): JSX.Element {
=======
}: InputProps) {
>>>>>>> 1366d026dfdbeba05e275a49417f8fd5c87b611b
  return (
    <div className="my-5">
      <label htmlFor={labelFor} className="sr-only">
        {labelText}
      </label>
      <input
        onChange={handleChange}
        value={value}
        id={id}
        name={name}
        type={type}
        required={isRequired}
        className={`${fixedInputClass} ${customClass}`}
        placeholder={placeholder}
      />
    </div>
  )
}
