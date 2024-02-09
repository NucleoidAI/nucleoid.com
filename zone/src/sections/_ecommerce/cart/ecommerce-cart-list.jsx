import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';

import Scrollbar from 'src/components/scrollbar';

import EcommerceCartItem from './ecommerce-cart-item';

// ----------------------------------------------------------------------

export default function EcommerceCartList({ products, wishlist = false }) {
  return (
    <Scrollbar>
      <Stack
        direction="row"
        alignItems="center"
        sx={{
          py: 2,
          minWidth: 720,
          typography: 'subtitle2',
          borderBottom: (theme) => `solid 1px ${theme.palette.divider}`,
        }}
      >
        <Stack flexGrow={1}>Item</Stack>
        <Stack sx={{ width: 120 }}>Qty</Stack>
        <Stack sx={{ width: 120 }}>Subtotal</Stack>
        <Stack sx={{ width: 36 }} />
        {wishlist && <Stack sx={{ width: 36 }} />}
      </Stack>

      {products.map((product) => (
        <EcommerceCartItem key={product.id} product={product} wishlist={wishlist} />
      ))}
    </Scrollbar>
  );
}

EcommerceCartList.propTypes = {
  products: PropTypes.array,
  wishlist: PropTypes.bool,
};
