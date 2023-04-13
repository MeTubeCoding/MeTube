import { useState } from 'react'
import { IResults } from '../components/Results'

const useOnSearch = () => {
  const [videos, setVideos] = useState<IResults | []>([])

  const onSearch = (data: string) => {
    console.log(JSON.stringify(data))

    fetch('http://localhost:5600/videos', {
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
  }

  return { onSearch, videos, setVideos }
}

export { useOnSearch }
