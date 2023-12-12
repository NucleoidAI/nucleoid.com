import { Helmet } from 'react-helmet-async';

import EcommerceCheckoutView from 'src/sections/_ecommerce/view/ecommerce-checkout-view';

// ----------------------------------------------------------------------

export default function EcommerceCheckoutPage() {
  return (
    <>
      <Helmet>
        <title> E-commerce: Checkout</title>
      </Helmet>

      <EcommerceCheckoutView />
    </>
  );
}
