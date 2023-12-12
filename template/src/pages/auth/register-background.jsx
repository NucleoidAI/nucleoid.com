import { Helmet } from 'react-helmet-async';

import RegisterBackgroundView from 'src/sections/auth/register-background-view';

// ----------------------------------------------------------------------

export default function RegisterBackgroundPage() {
  return (
    <>
      <Helmet>
        <title> Register: Background</title>
      </Helmet>

      <RegisterBackgroundView />
    </>
  );
}
