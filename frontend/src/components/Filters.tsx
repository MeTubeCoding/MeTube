import React, { useRef } from 'react'
<<<<<<< HEAD

interface Props {
  visible: boolean
=======
import { MdOutlineTune } from 'react-icons/md'

interface Props {
  visible: boolean
  filter: string
  filterChannel: () => void
  filterVideo: () => void
  filterMovie: () => void
  filterPlaylist: () => void
>>>>>>> 1366d026dfdbeba05e275a49417f8fd5c87b611b
}

const Filters = (props: Props) => {
  const dropMenu = useRef<HTMLDivElement>(null)

<<<<<<< HEAD
  const dropDown = () => {
    if (dropMenu.current instanceof HTMLDivElement) {
      if (dropMenu.current.classList.contains('hidden')) {
        dropMenu.current.classList.remove('hidden')
      } else {
        dropMenu.current.classList.add('hidden')
=======
  const uploadDate = [
    {
      name: 'Last hour'
    },
    {
      name: 'Today'
    },
    {
      name: 'This week'
    },
    {
      name: 'This month'
    },
    {
      name: 'This year'
    }
  ]
  const Type = [
    {
      name: 'Video'
    },
    {
      name: 'Channel'
    },
    {
      name: 'Playlist'
    },
    {
      name: 'Movie'
    }
    //,
    // {
    //   name: 'Short'     Should we add Short filter ?
    // }
  ]
  const Duration = [
    {
      name: 'Under 4 minutes'
    },
    {
      name: '4-20 minutes'
    },
    {
      name: 'Over 20 minutes'
    }
  ]
  const Features = [
    {
      name: 'Live'
    },
    {
      name: '4K'
    },
    {
      name: 'HD'
    },
    {
      name: 'Subtitles/CC'
    },
    {
      name: 'Creative Commons'
    },
    {
      name: '360°'
    },
    {
      name: 'VR180'
    },
    {
      name: '3D'
    },
    {
      name: 'HDR'
    },
    {
      name: 'Location'
    },
    {
      name: 'Purchased'
    }
  ]
  const sortBy = [
    {
      name: 'Relevance'
    },
    {
      name: 'Upload date'
    },
    {
      name: 'View count'
    },
    {
      name: 'Rating'
    }
  ]

  const dropDown = () => {
    if (dropMenu.current instanceof HTMLDivElement) {
      if (dropMenu.current.classList.contains('hidden')) {
        // dropMenu.current.classList.add('flex')
        dropMenu.current.classList.remove('hidden')
      } else {
        dropMenu.current.classList.add('hidden')
        // dropMenu.current.classList.remove('flex')
>>>>>>> 1366d026dfdbeba05e275a49417f8fd5c87b611b
      }
    }
  }

  const fVideo = () => {
<<<<<<< HEAD
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
=======
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
>>>>>>> 1366d026dfdbeba05e275a49417f8fd5c87b611b
  }

  return (
    <div
<<<<<<< HEAD
      className={`mt-5 text-me-yellow font-semibold ${
        props.visible ? 'ml-96' : 'ml-60'
      }`}
    >
      <button onClick={dropDown}>
        <p className="ml-5">Filtres</p>
      </button>
      <div ref={dropMenu} className="ml-5 hidden">
        <div>
          <p>Type</p>
          <hr className="w-10 m-3 border-me-yellow"></hr>
          <a onClick={fVideo}>Video</a>
          <a onClick={fChannel}>Channel</a>
          <a onClick={fPlaylist}>Playlist</a>
          <a onClick={fMovie}>Movie</a>
=======
      className={`mt-5 text-me-yellow font-semibold flex flex-col ${
        props.visible ? 'ml-96' : 'ml-60'
      }`}
    >
      <div className="flex flex-row items-center">
        <button
          className="flex flex-row justify-center items-center w-8 h-8 left-3 relative hover:bg-me-lightpurple rounded-lg"
          onClick={dropDown}
        >
          <MdOutlineTune className="text-xl" />
        </button>
        <p className="ml-4">Filters</p>
      </div>

      <div ref={dropMenu} className="ml-5 hidden">
        <div className="flex flex-row">
          <ul className="flex flex-col text-me-yellow p-4">
            <p>UPLOAD DATE</p>
            <hr className={`my-3 border-me-yellow w-36`}></hr>
            {uploadDate.map(({ name }) => {
              return (
                <li key={name} className={`rounded-lg py-1`}>
                  <span className="hover:cursor-pointer text-xs tracking-wider">
                    {name}
                  </span>
                </li>
              )
            })}
          </ul>

          <ul className="flex flex-col text-me-yellow p-4">
            <p>TYPE</p>
            <hr className={`my-3 border-me-yellow w-36`}></hr>
            {Type.map(({ name }) => {
              return (
                <li key={name} className={`rounded-lg py-1`}>
                  <span className="hover:cursor-pointer text-xs tracking-wider">
                    {name}
                  </span>
                </li>
              )
            })}
          </ul>
          <ul className="flex flex-col text-me-yellow p-4">
            <p>DURATION</p>
            <hr className={`my-3 border-me-yellow w-36`}></hr>
            {Duration.map(({ name }) => {
              return (
                <li key={name} className={` rounded-lg py-1`}>
                  <span className="hover:cursor-pointer text-xs tracking-wider">
                    {name}
                  </span>
                </li>
              )
            })}
          </ul>
          <ul className="flex flex-col text-me-yellow p-4">
            <p>FEATURES</p>
            <hr className={`my-3 border-me-yellow w-36`}></hr>
            {Features.map(({ name }) => {
              return (
                <li key={name} className={` rounded-lg py-1`}>
                  <span className="hover:cursor-pointer text-xs tracking-wider">
                    {name}
                  </span>
                </li>
              )
            })}
          </ul>
          <ul className="flex flex-col text-me-yellow p-4">
            <p>SORT BY</p>
            <hr className={`my-3 border-me-yellow w-36`}></hr>
            {sortBy.map(({ name }) => {
              return (
                <li key={name} className={` rounded-lg py-1`}>
                  <span className="hover:cursor-pointer text-xs tracking-wider">
                    {name}
                  </span>
                </li>
              )
            })}
          </ul>
>>>>>>> 1366d026dfdbeba05e275a49417f8fd5c87b611b
        </div>
      </div>
      <hr
        className={`m-3 border-me-yellow ${
<<<<<<< HEAD
          props.visible ? 'w-[71.55%]' : 'w-9/12'
=======
          props.visible ? 'w-[74.96%]' : 'w-[78%]'
>>>>>>> 1366d026dfdbeba05e275a49417f8fd5c87b611b
        }`}
      ></hr>
    </div>
  )
}

export default Filters
