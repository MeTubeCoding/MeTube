import React from "react"
export function Chat() {
	// function load(){
	//   fetch("http://127.0.0.1:5600/chat",{
	//     method : "GET",
	//     headers : {
	//         "Content-Type" : "application/json"
	//     },
	//     })
	// }

	// setTimeout(load, 1000)

	function log() {
		console.log("log")
		const message = document.getElementById("message-input") as HTMLInputElement
		const local = {
			message: message.value,
			pseudo: "Tristan"
		}
		fetch("http://127.0.0.1:5600/chat", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(local)
		})
			.then((res) => {
				return res.text()
			})
			.then((res) => {
				console.log(res)
			})
	}

	function getChat() {
		fetch("http://127.0.0.1:5600/chat", {
			method: "GET"
		})
	}
	return (
		<>
			<div>
				<p id='titre_chat' className='text-lg font-bold text-blue-500'>
					Espace de modération
				</p>
				<button className='bg-blue-500 text-white font-bold py-1 px-2 rounded'>
					test
				</button>
			</div>
			<div
				style={{
					width: "30%",
					height: "600px",
					backgroundColor: "#grey",
					border: "1px solid #ccc",
					borderRadius: "20px",
					marginTop: "20px",
					marginLeft: "10px"
				}}
			></div>

			<div className='height: 300px;overflow-y: scroll;border: 1px solid #ccc;padding: 10px;'>
				<form className='margin-top: 10px;'>
					<label htmlFor='message-input'>Message:</label>
					<input
						type='text'
						name='message'
						id='message-input'
						className='width: 80%;padding: 10px;border: 1px solid #ccc;border-radius: 3px;'
					></input>
					<p onClick={log}>send</p>

					<p onClick={getChat}>chat</p>
				</form>
			</div>
		</>
	)
}
