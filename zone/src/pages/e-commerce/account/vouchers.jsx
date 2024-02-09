import { Helmet } from 'react-helmet-async';

import EcommerceAccountVouchersView from 'src/sections/_ecommerce/view/ecommerce-account-vouchers-view';

// ----------------------------------------------------------------------

export default function EcommerceAccountVouchersPage() {
  return (
    <>
      <Helmet>
        <title> E-commerce: Account Vouchers</title>
      </Helmet>

      <EcommerceAccountVouchersView />
    </>
  );
}
