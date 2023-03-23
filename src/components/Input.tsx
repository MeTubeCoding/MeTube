import React, { ChangeEvent } from "react";

interface Props {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  labelText: string;
  labelFor: string;
  id: string;
  lastName?: string;
  firstName?: string;
  country?: string;
  city?: string;
  username?: string;
  email?: string;
  type: string;
  isRequired?: boolean;
  placeholder?: string;
  customClass?: string;
}

const fixedInputClass =
  "rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm";

export default function Input({
  handleChange,
  value,
  labelText,
  labelFor,
  id,
  lastName,
  firstName,
  country,
  city,
  username,
  email,
  type,
  isRequired = false,
  placeholder,
  customClass,
}: Props): JSX.Element {
  return (
    <div className="my-5">
      <label htmlFor={labelFor} className="sr-only">
        {labelText}
      </label>
      <input
        onChange={handleChange}
        value={value}
        id={id}
        name={id} // Added `name` attribute to match `id`
        {...(lastName && { lastName })}
        {...(firstName && { firstName })}
        {...(country && { country })}
        {...(city && { city })}
        {...(username && { username })}
        {...(email && { email })}
        type={type}
        required={isRequired}
        className={`${fixedInputClass} ${customClass}`}
        placeholder={placeholder}
      />
    </div>
  );
}