import { Helmet } from 'react-helmet-async';

import TravelToursView from 'src/sections/_travel/view/travel-tours-view';

// ----------------------------------------------------------------------

export default function TravelToursPage() {
  return (
    <>
      <Helmet>
        <title> Travel: Tours</title>
      </Helmet>

      <TravelToursView />
    </>
  );
}
