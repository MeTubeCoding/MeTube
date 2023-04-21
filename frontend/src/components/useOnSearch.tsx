import { useState } from 'react'
import { IResults, CIResults, SIResults } from './Results'

const useOnSearch = () => {
  const [videos, setVideos] = useState<IResults | []>([])
  const [channels, setChannels] = useState<CIResults | []>([])
  const [searchShorts, setShorts] = useState<SIResults | []>([])

  const onSearch = (
    data: string,
    setSearched: React.Dispatch<React.SetStateAction<boolean>>,
    setOnShorts: React.Dispatch<React.SetStateAction<boolean>>, 
  ) => {
    console.log(JSON.stringify(data))
    setSearched(true)
    setOnShorts(false)

    fetch('http://127.0.0.1:5600/videos/searchVideos', {
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

    fetch('http://127.0.0.1:5600/channels/searchChannels', {
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
    
    fetch('http://127.0.0.1:5600/shorts/searchShorts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(async response => await response.json())
      .then((response: SIResults) => {
      setShorts(response)
    })
  }

  return { onSearch, videos, channels, searchShorts, setVideos, setChannels, setShorts }
}

export { useOnSearch }
