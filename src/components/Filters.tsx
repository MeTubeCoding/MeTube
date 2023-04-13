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

  const fVideo = () => {
    console.log('filter by video')
  }

  const fChannel = () => {
    console.log('filter by channel')
  }

  const fPlaylist = () => {
    console.log('filter by playlist')
  }

  const fMovie = () => {
    console.log('filter by movie')
  }

  return (
    <div className=" ml-64 text-me-yellow font-semibold">
      <button onClick={dropDown}>
        <p className="ml-5">Filtres</p>
      </button>
      <div ref={dropMenu} className="ml-5 hidden">
        <p>
          {' '}
          Type
          <hr className="w-10 m-3 border-me-yellow"></hr>
          <a onClick={fVideo}>Video</a>
          <a onClick={fChannel}>Channel</a>
          <a onClick={fPlaylist}>Playlist</a>
          <a onClick={fMovie}>Movie</a>
        </p>
      </div>
      <hr className="w-9/12 m-3 border-me-yellow"></hr>
    </div>
  )
}

export default Filters
