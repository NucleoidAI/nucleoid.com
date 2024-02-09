import { Helmet } from 'react-helmet-async';

import Pricing01View from 'src/sections/pricing/view/pricing-01-view';

// ----------------------------------------------------------------------

export default function Pricing01Page() {
  return (
    <>
      <Helmet>
        <title> Pricing 01</title>
      </Helmet>

      <Pricing01View />
    </>
  );
}
