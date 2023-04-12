/* eslint-disable eol-last */
/* eslint-disable multiline-ternary */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

import React from 'react'
import NavigationBar from '../components/NavigationBar'

const HomePage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: 'calc(100vh - 60px)' }}>
      <NavigationBar />
    </div>
  )
}

export default HomePage