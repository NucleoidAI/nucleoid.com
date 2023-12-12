import { Helmet } from 'react-helmet-async';

import TravelTourView from 'src/sections/_travel/view/travel-tour-view';

// ----------------------------------------------------------------------

export default function TravelTourPage() {
  return (
    <>
      <Helmet>
        <title> Travel: Tour</title>
      </Helmet>

      <TravelTourView />
    </>
  );
}
