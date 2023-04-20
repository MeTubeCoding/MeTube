/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'

const Main = () => {
  const onSearch = (data: string) => {
    console.log(JSON.stringify(data))

    fetch('http://localhost:5600/videos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data })
    }).then(async response => await response.json())
  }
  return <p>ok</p>
}

export default Main
