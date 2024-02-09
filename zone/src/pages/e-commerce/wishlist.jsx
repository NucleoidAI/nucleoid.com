import { Helmet } from 'react-helmet-async';

import EcommerceWishlistView from 'src/sections/_ecommerce/view/ecommerce-wishlist-view';

// ----------------------------------------------------------------------

export default function EcommerceWishlistPage() {
  return (
    <>
      <Helmet>
        <title> E-commerce: Wishlist</title>
      </Helmet>

      <EcommerceWishlistView />
    </>
  );
}
