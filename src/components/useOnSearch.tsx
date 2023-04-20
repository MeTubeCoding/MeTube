import { useState } from 'react'
import { IResults } from './Results'
import { CIResults } from './Results'

const useOnSearch = () => {
  const [videos, setVideos] = useState<IResults | []>([])
  const [channels, setChannels] = useState<CIResults | []>([])

  const onSearch = (data: string, setSearched: React.Dispatch<React.SetStateAction<boolean>>) => {
    console.log(JSON.stringify(data))
    setSearched(true)
    
    fetch("http://127.0.0.1:5600/videos", {
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
