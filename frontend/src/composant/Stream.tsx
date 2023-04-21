import React, { useEffect, useState } from 'react'
import '../index.css'

export function Stream() {
  let peerConnection: RTCPeerConnection

  const [localStream, setLocalStream] = useState<MediaStream>()
  const [showEcran, setShowEcran] = useState<MediaStream>()

  const init = async () => {
    console.log('exec')

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false
      })
      setLocalStream(stream)

      const display = await navigator.mediaDevices.getDisplayMedia({
        video: true
      })
      setShowEcran(display)
    } catch (error) {
      console.log(error)
    }
  }

  const createOffer = async () => {
    peerConnection = new RTCPeerConnection()

    const offer = await peerConnection.createOffer()
    await peerConnection.setLocalDescription(offer)

    console.log('Offer', offer)
  }

  useEffect(() => {
    init()
    console.log('init')
  }, [])

  useEffect(() => {
    if (localStream && showEcran) {
      ;(document.getElementById('webcam') as HTMLVideoElement).srcObject =
        localStream
      ;(document.getElementById('partageEcran') as HTMLVideoElement).srcObject =
        showEcran

      createOffer()
    }
  })

  return (
    <div className="relative">
      <div id="videos" className="w-max h-max px-20">
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
