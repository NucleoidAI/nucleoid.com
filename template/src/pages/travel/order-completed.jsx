import { Helmet } from 'react-helmet-async';

import TravelOrderCompletedView from 'src/sections/_travel/view/travel-order-completed-view';

// ----------------------------------------------------------------------

export default function TravelOrderCompletedPage() {
  return (
    <>
      <Helmet>
        <title> Travel: Order Completed</title>
      </Helmet>

      <TravelOrderCompletedView />
    </>
  );
}
