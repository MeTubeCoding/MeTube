/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useRef } from 'react'

const Filters = () => {
  const dropMenu = useRef<HTMLDivElement>(null)

  const dropDown = () => {
    if (dropMenu.current instanceof HTMLDivElement) {
      if (dropMenu.current.classList.contains('collapse')) {
        dropMenu.current.classList.remove('collapse')
      } else {
        dropMenu.current.classList.add('collapse')
      }
    }
  }

  return (
    <div className=" ml-72 text-[#e3e3e3] font-semibold">
        <button onClick={dropDown}>
        <p className='ml-5'>Filtres</p>
        </button>
        <div ref={dropMenu} className='ml-5 collapse'>
            <a>Channels</a>
            <a>Titles</a>
            <a>Tags</a>
        </div>
        <hr className='w-9/12 m-3'></hr>
    </div>
  )
}

export default Filters
