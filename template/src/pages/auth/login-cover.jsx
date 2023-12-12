import { Helmet } from 'react-helmet-async';

import LoginCoverView from 'src/sections/auth/login-cover-view';

// ----------------------------------------------------------------------

export default function LoginCoverPage() {
  return (
    <>
      <Helmet>
        <title> Login: Cover</title>
      </Helmet>

      <LoginCoverView />
    </>
  );
}
