/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-no-comment-textnodes */
import Header from '../components/Header'
import Forgot_Password from '../components/ForgotPassword'

export default function ForgotPassword () {
  return (
        // eslint-disable-next-line react/react-in-jsx-scope
        <>
             <Header
                heading="Change your password"
                paragraph="Password"
                linkName="ForgotPassword"
                linkUrl="/forgotpassword"
                />
            <ForgotPassword/>
        </>
  )
}
