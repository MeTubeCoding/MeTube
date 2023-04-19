import { useState } from 'react'
import { IResults } from './Results'
<<<<<<< HEAD

const useOnSearch = () => {
  const [videos, setVideos] = useState<IResults | []>([])
=======
import { CIResults } from './Results'

const useOnSearch = () => {
  const [videos, setVideos] = useState<IResults | []>([])
  const [channels, setChannels] = useState<CIResults | []>([])
>>>>>>> 1366d026dfdbeba05e275a49417f8fd5c87b611b

  const onSearch = (data: string) => {
    console.log(JSON.stringify(data))

<<<<<<< HEAD
    fetch('http://localhost:5600/videos', {
=======
    fetch('http://localhost:5600/videos/searchvideos', {
>>>>>>> 1366d026dfdbeba05e275a49417f8fd5c87b611b
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data })
    })
      .then(async response => await response.json())
      .then((response: IResults) => {
        setVideos(response)
      })
<<<<<<< HEAD
  }

  return { onSearch, videos, setVideos }
=======

    fetch('http://localhost:5600/channels', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data })
    })
      .then(async response => await response.json())
      .then((response: CIResults) => {
        setChannels(response)
      })
  }

  return { onSearch, videos, channels, setVideos, setChannels }
>>>>>>> 1366d026dfdbeba05e275a49417f8fd5c87b611b
}

export { useOnSearch }
