import React, { useState, useRef } from 'react'
import { Button, Input, Slider } from 'antd'
import ReactPlayer from 'react-player'
import MusicPlayer from '../components/MusicPlayer'

const VideoEditor = (): JSX.Element => {

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ display: 'flex', flexDirection: 'column', marginRight: 20 }}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <div><MusicPlayer/></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default VideoEditor
