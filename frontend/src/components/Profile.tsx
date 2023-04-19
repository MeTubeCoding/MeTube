import React, { useEffect, useState } from 'react'

interface Profile {
  username: string
<<<<<<< HEAD
  email: string
=======
  emailaddress: string
>>>>>>> 1366d026dfdbeba05e275a49417f8fd5c87b611b
}

export default function Profile() {
  const [profile, setProfile] = useState<Profile | null>(null)

  useEffect(() => {
    // Fetch user data from your backend API
<<<<<<< HEAD
    fetch('http://localhost:5600/profile', {
=======
    fetch('http://127.0.0.1:5600/profile', {
>>>>>>> 1366d026dfdbeba05e275a49417f8fd5c87b611b
      method: 'GET',
      credentials: 'include' // Send cookies along with the request
    })
      .then(res => {
<<<<<<< HEAD
        if (res.status === 401) {
          throw new Error('Unauthorized')
        }
        return res.json()
      })
      .then(res => {
        setProfile({ username: res.username, email: res.email })
=======
        return res.json()
      })
      .then(res => {
        if (res.username && res.email) {
          setProfile({ username: res.username, emailaddress: res.email })
        }
>>>>>>> 1366d026dfdbeba05e275a49417f8fd5c87b611b
      })
      .catch(err => {
        console.error(err)
      })
  }, []) // Only fetch the data once, on component mount

  return (
    <div>
      {profile ? (
        <section>
          <p>
<<<<<<< HEAD
            {profile.email}: {profile.username}
=======
            {profile.emailaddress}: {profile.username}
>>>>>>> 1366d026dfdbeba05e275a49417f8fd5c87b611b
          </p>
        </section>
      ) : (
        <p>Not logged in</p>
      )}
    </div>
  )
}
