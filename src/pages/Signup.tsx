/* eslint-disable react/react-in-jsx-scope */
import Header from '../components/Header'
import Signup from '../components/Signup'

export default function SignupPage () {
  return (
        // eslint-disable-next-line react/react-in-jsx-scope, react/jsx-no-comment-textnodes
        <>
            <Header
              heading="Signup to create an account"
              paragraph="Already have an account ? "
              linkName="Login"
              linkUrl="/login"
            />
            <Signup/>
        </>
  )
}
