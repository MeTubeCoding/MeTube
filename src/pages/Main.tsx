/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useEffect, useState } from 'react'
import SearchBar from '../components/SearchBar'

const Main = () => {
  const onSearch = (data: string) => {
    console.log(JSON.stringify(data))

    fetch('http://localhost:5600/videos',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data })
      }
    ).then(async response => await response.json())
  }
  return (
    <p>ok</p>
  )
}

export default Main
