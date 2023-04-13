import React from 'react'
import Header from '../components/Header'
import Signup from '../components/Signup'

export default function SignupPage(): JSX.Element {
  {
    return (
      <>
        <Header
          heading="Signup to create an account"
          paragraph="Already have an account ? "
          linkName="Login"
          linkUrl="/login"
        />
        <Signup />
      </>
    )
  }
}
