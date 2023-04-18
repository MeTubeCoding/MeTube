import React, { useState, useEffect } from 'react';

interface Profile {
  username: string;
  emailaddress: string;
}

export default function Profile() {
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    fetch('http://localhost:5600/profile', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.length > 0) {
          setProfile(res[0]); // set the first profile object returned
        }
      })
      .catch((error) => console.log(error));
  }, []);

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
  );
}
