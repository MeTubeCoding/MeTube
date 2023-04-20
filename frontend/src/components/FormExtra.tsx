import React from 'react'

export default function FormExtra(): JSX.Element {
  return (
    <div className="flex items-center justify-between ">
      <div className="flex items-center text-me-white">
        <input
          id="remember-me"
          name="remember-me"
          type="checkbox"
          className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded ml-60"
        />
        <label
          htmlFor="remember-me"
          className="ml-2 block text-sm text-gray-900"
        >
          Remember me
        </label>
      </div>

      <div className="text-sm text-me-white">
        <a
          href="forgotpassword"
          className="font-medium text-purple-600 hover:text-purple-500 mr-60"
        >
          Forgot your password ?
        </a>
      </div>
    </div>
  )
}
