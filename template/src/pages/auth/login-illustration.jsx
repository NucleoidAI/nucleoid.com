import { Helmet } from 'react-helmet-async';

import LoginIllustrationView from 'src/sections/auth/login-illustration-view';

// ----------------------------------------------------------------------

export default function LoginIllustrationPage() {
  return (
    <>
      <Helmet>
        <title> Login: Illustration</title>
      </Helmet>

      <LoginIllustrationView />
    </>
  );
}
