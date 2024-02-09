import { Helmet } from 'react-helmet-async';

import TravelLandingView from 'src/sections/_travel/view/travel-landing-view';

// ----------------------------------------------------------------------

export default function TravelLandingPage() {
  return (
    <>
      <Helmet>
        <title> Travel: Home</title>
      </Helmet>

      <TravelLandingView />
    </>
  );
}
