import React from 'react'
import NavigationBar from '../components/NavigationBar'
import Video from '../components/Video'

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
      <div>
        <NavigationBar />
      </div>
      <div className="mt-[15%]">
        <Video />
      </div>
    </div>
  )
}

export default HomePage
