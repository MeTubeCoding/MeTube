/* eslint-disable prettier/prettier */
import React from 'react'
import { ChannelName } from '../constants/FormField'

function ChannelCreation() {
  return (
    <div>
      {ChannelName.map((input, index) => (
        <div key={index}>
          <label htmlFor={input.labelfor}>{input.labelname}</label>
          <input
            type={input.type}
            name={input.name}
            id={input.labelfor}
            placeholder={input.labelname}
          />
        </div>
      ))}
    </div>
  )
}

export default ChannelCreation
