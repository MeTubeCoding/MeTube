/* eslint-disable prettier/prettier */
import React from 'react'
import ChannelCreation from '../components/ChannelCreation'

const fakeProfile = {
  name: 'John Doe',
  email: 'johndoe@example.com',
  avatar: 'https://via.placeholder.com/150'
}

const ChannelCreationPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}
    >
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-8">{fakeProfile.name}</h1>
        <button className="bg-blue-500 text-white py-2 px-4 rounded">
          Create Channel
        </button>
      </div>
      {/* <h1>{profileName}</h1>
      <button style={{ marginLeft: 'auto' }}>Edit Profile</button> */}
    </div>
  )
}

export default ChannelCreationPage
