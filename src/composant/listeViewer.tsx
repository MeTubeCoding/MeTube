import React, { useEffect, useState } from 'react';

const ListeViewer = () => {
  const [viewers, setViewers] = useState([]);

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:3000');

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      if (message.type === 'VIEWERS_LIST') {
        setViewers(message.data);
      }
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <div>
      <h2>Viewers connectés :</h2>
      <ul>
        {viewers.map((viewer) => (
          <li key={viewer}>{viewer}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListeViewer;
