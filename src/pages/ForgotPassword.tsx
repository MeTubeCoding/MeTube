import Header from '../components/Header'
import ForgotPassword from '../components/ForgotPassword'
import React from 'react'

export default function ForgotPasswordpage(): JSX.Element {
  return (
    <>
      <Header
        heading="Change your password"
        paragraph=""
        linkName=""
        linkUrl=""
      />
      <ForgotPassword />
    </>
  )
}
