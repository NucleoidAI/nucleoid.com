import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

import EcommerceCompareItem from './ecommerce-compare-item';

// ----------------------------------------------------------------------

export default function EcommerceCompareList({ products }) {
  return (
    <Stack
      direction="row"
      spacing={{ xs: 1, md: 3 }}
      divider={<Divider orientation="vertical" flexItem sx={{ borderStyle: 'dashed' }} />}
    >
      {products.map((product) => (
        <EcommerceCompareItem key={product.id} product={product} />
      ))}
    </Stack>
  );
}

EcommerceCompareList.propTypes = {
  products: PropTypes.array,
};
