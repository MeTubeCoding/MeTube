import React, { useEffect, useState } from 'react'

interface Profile {
  username: string
  email: string
}

export default function Profile() {
  const [profile, setProfile] = useState<Profile | null>(null)

  useEffect(() => {
    // Fetch user data from your backend API
    fetch('http://localhost:5600/profile', {
      method: 'GET',
      credentials: 'include' // Send cookies along with the request
    })
      .then(res => {
        if (res.status === 401) {
          throw new Error('Unauthorized')
        }
        return res.json()
      })
      .then(res => {
        setProfile({ username: res.username, email: res.email })
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
            {profile.email}: {profile.username}
          </p>
        </section>
      ) : (
        <p>Not logged in</p>
      )}
    </div>
  )
}
