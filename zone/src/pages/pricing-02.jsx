import { Helmet } from 'react-helmet-async';

import Pricing02View from 'src/sections/pricing/view/pricing-02-view';

// ----------------------------------------------------------------------

export default function Pricing02Page() {
  return (
    <>
      <Helmet>
        <title> Pricing 02</title>
      </Helmet>

      <Pricing02View />
    </>
  );
}
