import { Helmet } from 'react-helmet-async';

import TravelAboutView from 'src/sections/_travel/view/travel-about-view';

// ----------------------------------------------------------------------

export default function TravelAboutPage() {
  return (
    <>
      <Helmet>
        <title> Travel: About us</title>
      </Helmet>

      <TravelAboutView />
    </>
  );
}
