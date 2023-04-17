import React, { useEffect } from "react"
import "../index.css" // Importez le fichier CSS
import "./LiveNavBar"
import { Chat } from "./Chat"
import { LiveNavBar } from "./LiveNavBar"
import { ModerationChat } from "./ModerationChat"
import { Description } from "./Description"

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

		(document.getElementById("webcam") as HTMLVideoElement).srcObject =
			localStream
		;(document.getElementById("partageEcran") as HTMLVideoElement).srcObject =
			showEcran

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
			<div className='flex flex-row'>
				<ModerationChat />
				<section className='flex flex-row'>
					<div className='flex flex-col items-center'>
						<div className='relative'>
							<div id='videos' className='w-max h-max px-20'>
								<video
									className='transform scale-x-[-1] '
									id='webcam'
									width='400'
									height='400'
									autoPlay
									playsInline
								></video>
							<div className="absolute top-2 left-2">
								<video
									className=''
									id='partageEcran'
									width='400'
									height='400'
									autoPlay
									playsInline
								></video>
								</div>
							</div>
						</div>
						<div className='flex flex-col items-center mt-4'>
							<Description />
						</div>
					</div>
				</section>

				<Chat />
			</div>
		</>
	)
}
