import React, { useEffect, useState } from 'react'

interface Profile {
  username: string
  emailaddress: string
}

export default function Profile() {
  const [profile, setProfile] = useState<Profile | null>(null)

  useEffect(() => {
    // Fetch user data from your backend API
    fetch('http://127.0.0.1:5600/profile', {
      method: 'GET',
      credentials: 'include' // Send cookies along with the request
    })
      .then(res => {
        return res.json()
      })
      .then(res => {
        if (res.username && res.email) {
          setProfile({ username: res.username, emailaddress: res.email })
        }
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
            {profile.emailaddress}: {profile.username}
          </p>
        </section>
      ) : (
        <p>Not logged in</p>
      )}
    </div>
  )
}
