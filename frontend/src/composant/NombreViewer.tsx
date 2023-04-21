import React, { useEffect, useState } from 'react'

const NombreViewer = () => {
  const [viewerCount, setViewerCount] = useState(0)

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:3000')

    ws.onmessage = event => {
      const message = JSON.parse(event.data)
      if (message.type === 'VIEWER_COUNT') {
        setViewerCount(message.data)
      }
    }

    return () => {
      ws.close()
    }
  }, [])

  return (
    <div>
      <h2 className="text-me-colorprimary font-bold">
        Nombre de spectateurs :
      </h2>
      <p className="text-me-white">{viewerCount}</p>
    </div>
  )
}

export default NombreViewer
