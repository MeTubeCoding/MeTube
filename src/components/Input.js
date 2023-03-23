const fixedInputClass="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"

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
    isRequired=false,
    placeholder,
    customClass
}){
    return(
        <div className="my-5">
            <label htmlFor={labelFor} className="sr-only">
              {labelText}
            </label>
            <input
              onChange={handleChange}
              value={value}
              id={id}
              lastName={lastName}
              firstName={firstName}
              country={country}
              city={city}
              username={username}
              email={email}
              type={type}
              required={isRequired}
              className={fixedInputClass+customClass}
              placeholder={placeholder}
            />
          </div>
    )
}