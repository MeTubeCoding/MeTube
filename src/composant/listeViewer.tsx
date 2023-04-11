import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

interface User {
  id: string;
  avatar: string;
  name: string;
  viewingTime: number;
}

function LiveUsersList() {
  const [liveUsers, setLiveUsers] = useState<User[]>([]);

  useEffect(() => {
      // Établir une connexion avec le serveur de sockets Web
      const socket = io('http://localhost:5600');

      // Écouter les événements de mise à jour de la liste des utilisateurs
      socket.on('liveUsersUpdate', (users: User[]) => {
          setLiveUsers(users);
      });

      // Se déconnecter lorsque le composant est démonté
      return () => socket.disconnect();
  }, []);

  return (
    <div>
      <h2>Liste des utilisateurs en train de regarder le live :</h2>
      <ul>
        {liveUsers.map(user => (
          <li key={user.id}>
            <img src={user.avatar} alt={user.name} />
            <span>{user.name}</span>
            <span>{user.viewingTime}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LiveUsersList;
