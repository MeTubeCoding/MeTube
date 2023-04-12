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
      <div className="flex justify-center bg-[#101010] p-2 items-center">
          <input
            type="search"
            id="search-dropdown"
            value={searchInput}
            onChange={(e) => { setSearchInput(e.currentTarget.value) }}
            className="bg-[#131313] border border-[#3d3d3d] text-white font-semibold placeholder:text-[#aaaaaa] placeholder:text-opacity-70 placeholder:font-semibold p-1 pl-4 pr-2 rounded-l-full focus:outline-none h-10 w-5/12"
            placeholder="Search..."
            required
          />
          <button type="submit" className="bg-[#212121] h-10 rounded-r-full w-16 justify-center flex items-center border-r border-t border-b border-[#3d3d3d]">
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="none"
              stroke="white"
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
          <div className='bg-[#181818] ml-2 rounded-full hover:bg-[#262626]'>
            <VoiceRecognitionButton setSearchValue={handleSetSearchInput}/>
          </div>
      </div>
    </form>
  )
}

export default SearchBar
