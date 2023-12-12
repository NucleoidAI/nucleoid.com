import { Helmet } from 'react-helmet-async';

import RegisterCoverView from 'src/sections/auth/register-cover-view';

// ----------------------------------------------------------------------

export default function RegisterCoverPage() {
  return (
    <>
      <Helmet>
        <title> Register: Cover</title>
      </Helmet>

      <RegisterCoverView />
    </>
  );
}
