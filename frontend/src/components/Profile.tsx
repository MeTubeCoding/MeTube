import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface User {
  lastname: string;
  firstname: string;
  country: string;
  city: string;
  username: string;
  email: string;
}

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState<User>({ lastname: '', firstname: '', country: '', city: '', username: '', email: '' });

  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const email = localStorage.getItem('email');

  console.log(email)


  useEffect(() => {
    const endpoint = `http://127.0.0.1:5600/profile?email=${email}`; // Remplacez par l'URL de votre serveur

    fetch(endpoint, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(async response => {
        const data = await response.json();

        if (response.ok && Boolean(data.success)) {
          setUser({
            lastname: data.user.lastname,
            firstname: data.user.firstname,
            country: data.user.country,
            city: data.user.city,
            username: data.user.username,
            email: location.state.email || data.user.email
          });
        } else {
          navigate('/login');
        }
>>>>>>> 1366d026dfdbeba05e275a49417f8fd5c87b611b
      })
      .catch(error => {
        console.log(error);
        navigate('/login');
      });
  }, []);

  return (
    <div className="max-w-lg mx-auto py-4 px-8 bg-white border-white border-2 shadow-lg rounded-lg my-20">
      <h1 className="text-3xl font-bold mb-4">Profile</h1>
      <p className="mb-2"><span className="font-bold">Lastname :</span> {user.lastname}</p>
      <p className="mb-2"><span className="font-bold">Firstname :</span> {user.firstname}</p>
      <p className="mb-2"><span className="font-bold">Country :</span> {user.country}</p>
      <p className="mb-2"><span className="font-bold">City :</span> {user.city}</p>
      <p className="mb-2"><span className="font-bold">Username :</span> {user.username}</p>
      <p className="mb-4"><span className="font-bold">Email :</span> {user.email}</p>
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('email');
        navigate('/login');
      }}>Déconnexion</button>
    </div>
  );
  
};

export default Profile;
