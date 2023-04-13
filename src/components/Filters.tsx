import React, { useRef } from 'react'

const Filters = () => {
  const dropMenu = useRef<HTMLDivElement>(null)

  const dropDown = () => {
    if (dropMenu.current instanceof HTMLDivElement) {
      if (dropMenu.current.classList.contains('hidden')) {
        dropMenu.current.classList.remove('hidden')
      } else {
        dropMenu.current.classList.add('hidden')
      }
    }
  }

  return (
    <div className=" ml-72 text-me-yellow font-semibold">
      <button onClick={dropDown}>
        <p className="ml-5">Filtres</p>
      </button>
      <div ref={dropMenu} className="ml-5 hidden">
        <a>Channels</a>
        <a>Titles</a>
        <a>Tags</a>
      </div>
      <hr className="w-9/12 m-3 border-me-yellow "></hr>
    </div>
  )
}

export default Filters
