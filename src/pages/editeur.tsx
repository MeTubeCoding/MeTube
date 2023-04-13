/* eslint-disable @typescript-eslint/indent */
/* eslint-disable eol-last */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useEffect, useState } from 'react'

function Editeur () {
  const videoStyle = {
    backgroundColor: 'black',
    width: '80%',
    height: '150px',
    margin: '0 auto'
  }

  const separatorStyle = {
    border: '1px solid black',
    marginTop: '20px'
  }

  return (
    <div>
      <div style={videoStyle}></div>
      <hr style={separatorStyle} />
    </div>
  )
}

export default Editeur
