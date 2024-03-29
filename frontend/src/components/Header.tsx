/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'
import { Link } from 'react-router-dom'

interface HeaderProps {
  heading: string
  paragraph: string
  linkName: string
  linkUrl?: string
}

export default function Header({
  heading,
  paragraph,
  linkName,
  linkUrl = '#'
}: HeaderProps) {
  return (
    <div className="mb-10 mt-20">
      <div className="flex justify-center">
        <img
          alt=""
          className="h-14 w-14"
          src="https://www.kindpng.com/picc/m/250-2509985_youtube-icon-png-2018-transparent-png-high-quality.png"
        />
      </div>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 text-me-orange">
        {heading}
      </h2>
      <p className="mt-2 text-center text-sm text-gray-600 mt-5 text-me-yellow">
        {paragraph}{' '}
        <Link
          to={linkUrl}
          className="text-me-lightpurple font-bold hover:text-purple-500"
        >
          {linkName}
        </Link>
      </p>
    </div>
  )
}
