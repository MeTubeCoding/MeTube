import { useState } from 'react'
import { SIResults } from './Results'

const getShorts = () => {
  const [shorts, setShorts] = useState<SIResults | []>([])

  const onLoad = (
    setOnShorts: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setOnShorts(true)
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

export { getShorts }
