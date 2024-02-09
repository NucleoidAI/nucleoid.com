import { Helmet } from 'react-helmet-async';

import EcommerceOrderCompletedView from 'src/sections/_ecommerce/view/ecommerce-order-completed-view';

// ----------------------------------------------------------------------

export default function EcommerceOrderCompletedPage() {
  return (
    <>
      <Helmet>
        <title> E-commerce: Order Completed</title>
      </Helmet>

      <EcommerceOrderCompletedView />
    </>
  );
}
