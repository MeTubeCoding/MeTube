import React from "react"
import "./index.css"
// import { Chat } from './composant/Chat';
// import { Description } from './composant/description';
import { Live } from "./composant/Live"
import { LiveNavBar } from "./composant/LiveNavBar"

function App() {
	return (
		<>
			<div className='bg-me-background'>
				<Live />
			</div>
		</>
	)
}

export default App
