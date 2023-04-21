import { useState } from 'react'
import { SIResults } from './Results'

const GetShorts = () => {
  const [shorts, setShorts] = useState<SIResults | []>([])

  const onLoad = (
    setOnShorts: React.Dispatch<React.SetStateAction<boolean>>, 
    setSearched: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setOnShorts(true)
    setSearched(false)
    fetch('http://127.0.0.1:5600/shorts/searchShorts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(async response => await response.json())
      .then((response: SIResults) => {
        setShorts(response)
        console.log(response)
      })
  }

  return { shorts, onLoad }
}

export { GetShorts }
