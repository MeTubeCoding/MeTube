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
      })
      .catch(error => {
        console.log(error);
        navigate('/login');
      });
  }, []);

  return (
    <div>
      <h1>Profile</h1>
      <p>Lastname : {user.lastname}</p>
      <p>Firstname : {user.firstname}</p>
      <p>Country : {user.country}</p>
      <p>City : {user.city}</p>
      <p>Username : {user.username}</p>
      <p>Email : {user.email}</p>
    </div>
  );
};

export default Profile;
