import React from "react"

export function Description() {
	const [description, setDescription] = React.useState("")

	function handleInputChange(event: {
		target: { value: React.SetStateAction<string> }
	}) {
		setDescription(event.target.value)
	}

	function postData() {
		fetch("http://127.0.0.1:5600/chat", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ description })
		})
			.then((res) => res.text())
			.then((res) => console.log(res))
	}

	return (
		<>
			<textarea
				id='description'
				value={description}
				onChange={handleInputChange}
			/>
			<button onClick={postData}>Send</button>
		</>
	)
}
