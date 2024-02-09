import { Helmet } from 'react-helmet-async';

import ForgotPasswordView from 'src/sections/auth/forgot-password-view';

// ----------------------------------------------------------------------

export default function ForgotPasswordPage() {
  return (
    <>
      <Helmet>
        <title> Forgot Password</title>
      </Helmet>

      <ForgotPasswordView />
    </>
  );
}
