/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState } from 'react'
import { Button, IconButton, InputBase } from '@mui/material'
import VoiceRecognitionButton from './VoiceRecognitionButton'

interface IProps {
  onSearch: (input: string) => any
}

const SearchBar = (props: IProps) => {
  const [searchInput, setSearchInput] = useState('')
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    props.onSearch(searchInput)
  }
  const handleSetSearchInput = (value: string) => {
    setSearchInput(value)
  }
  return (
    <form onSubmit={handleSearch}>
      <div className="flex justify-center roun">
        <div className="relative">
          <input
            type="search"
            id="search-dropdown"
            value={searchInput}
            onChange={(e) => { setSearchInput(e.currentTarget.value) }}
            className=""
            placeholder="Search..."
            required
          />
          <button
            type="submit"
            className=""
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <span className="sr-only">Search</span>
          </button>
          <VoiceRecognitionButton setSearchValue={handleSetSearchInput} />
        </div>
      </div>
    </form>
  )
}

export default SearchBar
