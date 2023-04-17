import React, { useRef } from 'react'

interface Props {
  visible: boolean
  filter: string
  filterChannel: () => void
  filterVideo: () => void
  filterMovie: () => void
  filterPlaylist: () => void
}

const Filters = (props: Props) => {
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
    console.log('filter by ' + props.filter)
    props.filterVideo()
  }

  const fChannel = () => {
    console.log('filter by ' + props.filter)
    props.filterChannel()
  }

  const fPlaylist = () => {
    console.log('filter by ' + props.filter)
    props.filterPlaylist()
  }

  const fMovie = () => {
    console.log('filter by ' + props.filter)
    props.filterMovie()
  }

  return (
    <div
      className={`mt-5 text-me-yellow font-semibold ${
        props.visible ? 'ml-96' : 'ml-60'
      }`}
    >
      <button onClick={dropDown}>
        <p className="ml-5">Filters, currently filtering by: {props.filter}</p>
      </button>
      <div ref={dropMenu} className="ml-5 hidden">
        <div>
          <p>Type</p>
          <hr className="w-10 m-3 border-me-yellow"></hr>
          <a onClick={fVideo}>Video</a>
          <a onClick={fChannel}>Channel</a>
          <a onClick={fPlaylist}>Playlist</a>
          <a onClick={fMovie}>Movie</a>
        </div>
      </div>
      <hr
        className={`m-3 border-me-yellow ${
          props.visible ? 'w-[74.96%]' : 'w-[78%]'
        }`}
      ></hr>
    </div>
  )
}

export default Filters
