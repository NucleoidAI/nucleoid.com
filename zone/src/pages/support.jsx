import { Helmet } from 'react-helmet-async';

import SupportView from 'src/sections/support/view/support-view';

// ----------------------------------------------------------------------

export default function SupportPage() {
  return (
    <>
      <Helmet>
        <title> Support</title>
      </Helmet>

      <SupportView />
    </>
  );
}
