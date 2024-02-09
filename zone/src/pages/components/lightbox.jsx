import { Helmet } from 'react-helmet-async';

import LightboxView from 'src/sections/examples/lightbox-view';

// ----------------------------------------------------------------------

export default function LightboxPage() {
  return (
    <>
      <Helmet>
        <title> Components: Lightbox</title>
      </Helmet>

      <LightboxView />
    </>
  );
}
