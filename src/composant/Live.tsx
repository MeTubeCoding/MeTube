import React, { useEffect } from "react"
import "../index.css" // Importez le fichier CSS
import "./LiveNavBar"
import { Chat } from "./Chat"
import { LiveNavBar } from "./LiveNavBar"
import { ModerationChat } from "./ModerationChat"
import { Description } from "./Description"
import NombreViewer from './NombreViewer';
import ListeViewer from './ListeViewer';

export function Live() {
	let localStream: MediaStream
	let showEcran: MediaStream
	let peerConnection: RTCPeerConnection
	let remoteStream: MediaStream

	const init = async () => {
		console.log("exec")

		try {
			localStream = await navigator.mediaDevices.getUserMedia({
				video: true,
				audio: false,
			})
			showEcran = await navigator.mediaDevices.getDisplayMedia({ video: true })
		} catch (error) {
			console.log(error)
		
		}

		(document.getElementById("webcam") as HTMLVideoElement).srcObject =localStream;
			
		(document.getElementById("partageEcran") as HTMLVideoElement).srcObject =showEcran;
			

		createOffer()
	}

	const createOffer = async () => {
		peerConnection = new RTCPeerConnection()

		remoteStream = new MediaStream()

		const offer = await peerConnection.createOffer()
		await peerConnection.setLocalDescription(offer)

		console.log("Offer", offer)
	}

	useEffect(() => {
		init()
		console.log("init")
	}, [])

	return (
		<>
			<LiveNavBar />
			<Chat />
			<ModerationChat />
			<Description />

			<div id='videos' className='w-max h-max px-20'>
				<video
					className='transform scale-x-[-1] '
					id='webcam'
					width='500'
					height='500'
					autoPlay
					playsInline
				></video>
				<video
					className=''
					id='partageEcran'
					width='500'
					height='500'
					autoPlay
					playsInline
				></video>
			</div>
      <div className="live-info">
        <NombreViewer /> {/* Ajoutez le composant ListeViewer */}
      </div>
      <div className="live-info">
        <ListeViewer /> {/* Ajoutez le composant ListeViewer */}
      </div>
		</>
	)
}
