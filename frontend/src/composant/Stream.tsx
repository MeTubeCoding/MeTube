import React, { useEffect, useState } from 'react'
import '../index.css'

export default function Stream() {
  let localStream: MediaStream
  let showEcran: MediaStream
  let peerConnection: RTCPeerConnection
  let remoteStream: MediaStream

  const [mode, setMode] = useState('streamer')

  const handleModeChange = (newMode: string) => {
    setMode(newMode)
  }

  const init = async () => {
    console.log('exec')

    try {
      localStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false
      })
      showEcran = await navigator.mediaDevices.getDisplayMedia({ video: true })
    } catch (error) {
      console.log(error)
    }

    ;(document.getElementById('webcam') as HTMLVideoElement).srcObject =
      localStream
    ;(document.getElementById('partageEcran') as HTMLVideoElement).srcObject =
      showEcran

    createOffer()
  }

  const createOffer = async () => {
    peerConnection = new RTCPeerConnection()

    remoteStream = new MediaStream()

    const offer = await peerConnection.createOffer()
    await peerConnection.setLocalDescription(offer)

    console.log('Offer', offer)
  }

  useEffect(() => {
    init()
    console.log('init')
  }, [])

  return (
    <div className="relative">
      <div id="videos" className="w-max h-max px-20 w-full ">
        <video
          className="border rounded-md"
          id="partageEcran"
          width="500"
          height="500"
          autoPlay
          playsInline
        ></video>
        <div className="absolute top-1 right-[64%] ">
          <video
            className="transform scale-x-[-1] scale-y-[95%] border rounded-md"
            id="webcam"
            width="150"
            height="150"
            autoPlay
            playsInline
          ></video>
        </div>
      </div>
    </div>
  )
}
