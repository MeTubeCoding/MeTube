import React, { useEffect, useState } from "react"
import "../index.css"
import { Chat } from "./Chat"
import { LiveNavBar } from "./LiveNavBar"
import { ModerationChat } from "./ModerationChat"
import { Description } from "./Description"
import NombreViewer from "./NombreViewer"
import ListeViewer from "./ListeViewer"
import { Titre } from "./Titre"
import { Stream } from "./Stream"

export function Live() {
	let localStream: MediaStream
	let showEcran: MediaStream
	let peerConnection: RTCPeerConnection
	let remoteStream: MediaStream

	const [mode, setMode] = useState("streamer");

	const handleModeChange = (newMode: string) => {
		setMode(newMode);
	}

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
			; (document.getElementById("partageEcran") as HTMLVideoElement).srcObject =
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

	function post() {
		console.log("log")
		const titre = document.getElementById("titre") as HTMLInputElement
		const description = document.getElementById("description") as HTMLInputElement
		const local = {
			titre: titre.value,
			description: description.value,
			date: new Date().toISOString()
		}
		fetch("http://127.0.0.1:5600/dataLive", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(local),
		})
			.then((res) => {
				return res.text()
			})
			.then((res) => {
				console.log(res)
			})
	}

	useEffect(() => {
		init()
		console.log("init")
	}, [])

	return (
		<>

			<LiveNavBar onModeChange={handleModeChange} />

			{mode === "streamer" && (
				<div className='streamer-content'>
					{
						<div className='flex flex-row text-white'>
							<ModerationChat />
							<section className='flex flex-row'>
								<div className='flex flex-col items-center'>
									<Stream />
									<div className='flex flex-col items-center mt-4'>
										<Description />
									</div>
									<Titre />
									<button
										className='mt-4 px-4 py-2 bg-red-500 text-white font-bold rounded-md hover:bg-neutral-300 hover:text-red-600 bg-opacity-90 bg-me-colorprimary'
										onClick={post}
									>
										Send
									</button>
								</div>
							</section>

							<Chat />
							<div>
								<div className='live-info'>
									<NombreViewer />
								</div>
								<div className='live-info'>
									<ListeViewer />
								</div>
							</div>
						</div>
					}
				</div>
			)}

			{mode === "moderateur" && (
				<div className='moderateur-content'>
					{
						<div className='flex flex-row text-white'>
							<ModerationChat />
							<section className='flex flex-row'>
								<div className='flex flex-col items-center'>
									<Stream />
								</div>
							</section>

							<Chat />
							<div>
								<div className='live-info'>
									<NombreViewer />
								</div>
							</div>
						</div>
					}
				</div>
			)}

			{mode === "viewer" && (
				<div className='viewer-content'>
					{
						<div className='flex flex-row text-white'>
							<section className='flex flex-row'>
								<div className='flex flex-col items-center'>
									<Stream />
								</div>
							</section>

							<Chat />
							<div>
								<div className='live-info'>
									<NombreViewer />
								</div>
							</div>
						</div>
					}
				</div>
			)}
		</>
	)
}