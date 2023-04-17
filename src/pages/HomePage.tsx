import React from 'react'
import NavigationBar from '../components/NavigationBar'

const HomePage = (): JSX.Element => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 'calc(100vh - 60px)'
      }}
    >
      <NavigationBar />
    </div>
  )
}

export default HomePage
