import { useState } from 'react'
import { IResults, SIResults, CIResults } from './Results'

const useOnSearch = () => {
  const [videos, setVideos] = useState<IResults | []>([])
  const [channels, setChannels] = useState<CIResults | []>([])
  const [shorts, setShorts] = useState<SIResults | []>([])

  const onSearch = (data: string) => {
    console.log(JSON.stringify(data))

    fetch('http://localhost:5600/videos/searchvideos', {
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
}

export { useOnSearch }
