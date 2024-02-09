import { Helmet } from 'react-helmet-async';

import VerifyView from 'src/sections/auth/verify-view';

// ----------------------------------------------------------------------

export default function VerifyPage() {
  return (
    <>
      <Helmet>
        <title> Verify</title>
      </Helmet>

      <VerifyView />
    </>
  );
}
