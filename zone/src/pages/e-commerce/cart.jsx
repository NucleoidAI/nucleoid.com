import { Helmet } from 'react-helmet-async';

import EcommerceCartView from 'src/sections/_ecommerce/view/ecommerce-cart-view';

// ----------------------------------------------------------------------

export default function EcommerceCartPage() {
  return (
    <>
      <Helmet>
        <title> E-commerce: Cart</title>
      </Helmet>

      <EcommerceCartView />
    </>
  );
}
