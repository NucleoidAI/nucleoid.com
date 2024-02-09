import { Helmet } from 'react-helmet-async';

import EcommerceLandingView from 'src/sections/_ecommerce/view/ecommerce-landing-view';

// ----------------------------------------------------------------------

export default function EcommerceLandingPage() {
  return (
    <>
      <Helmet>
        <title> E-commerce: Home</title>
      </Helmet>

      <EcommerceLandingView />
    </>
  );
}
