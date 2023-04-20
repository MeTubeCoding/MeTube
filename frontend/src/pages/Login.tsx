import React from 'react'
import Header from '../components/Header'
import Login from '../components/Login'

export default function LoginPage(): JSX.Element {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <>
      <Header
        heading="Login to your account"
        paragraph="Don't have an account yet ? "
        linkName="Signup"
        linkUrl="/signup"
      />
      <Login />
    </>
  )
}
