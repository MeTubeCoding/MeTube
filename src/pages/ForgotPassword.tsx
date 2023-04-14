/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-no-comment-textnodes */
import Header from '../components/Header'
import ForgotPassword from '../components/ForgotPassword'

export default function ForgotPasswordpage() {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
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
