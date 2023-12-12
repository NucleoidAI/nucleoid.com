import { Helmet } from 'react-helmet-async';

import CountUpPageView from 'src/sections/examples/count-up-view';

// ----------------------------------------------------------------------

export default function CountUpPage() {
  return (
    <>
      <Helmet>
        <title> Components: CountUp</title>
      </Helmet>

      <CountUpPageView />
    </>
  );
}
