import React, { useEffect, useState } from 'react'

interface Profile {
  username: string
  emailaddress: string
}

export default function Profile() {
  const [profile, setProfile] = useState<Profile | null>(null)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const email = formData.get('email') as string
    fetch(`http://127.0.0.1:5600/data?email=${email}`, {
      method: 'GET'
    })
      .then(res => {
        return res.json()
      })
      .then(res => {
        if (res.length > 0) {
          setProfile(res[0])
        } else {
          setProfile(null)
        }
      })
  }

  return (
    <div>
      {profile ? (
        <p>
          Logged in as {profile.username} ({profile.emailaddress})
        </p>
      ) : (
        <p>Not logged in</p>
      )}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email address:</label>
        <input type="email" id="email" name="email" required />
        <button type="submit">Get profile</button>
      </form>
      {profile && (
        <section>
          <p>
            {profile.emailaddress}: {profile.username}
          </p>
        </section>
      )}
    </div>
  )
}
