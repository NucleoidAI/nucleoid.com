import PropTypes from 'prop-types';

import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import Image from 'src/components/image';
import TextMaxLine from 'src/components/text-max-line';

import ProductPrice from '../../common/product-price';
import ProductRating from '../../common/product-rating';

// ----------------------------------------------------------------------

export default function EcommerceProductItemBestSellers({ product, ...other }) {
  return (
    <Link component={RouterLink} href={paths.eCommerce.product} color="inherit" underline="none">
      <Stack
        spacing={2}
        direction="row"
        sx={{
          transition: (theme) =>
            theme.transitions.create('opacity', {
              easing: theme.transitions.easing.easeIn,
              duration: theme.transitions.duration.shortest,
            }),
          '&:hover': { opacity: 0.72 },
        }}
        {...other}
      >
        <Image
          src={product.coverUrl}
          sx={{
            width: 80,
            height: 80,
            flexShrink: 0,
            borderRadius: 1.5,
            bgcolor: 'background.neutral',
          }}
        />

        <Stack spacing={0.5}>
          <TextMaxLine variant="body2" line={1} sx={{ fontWeight: 'fontWeightMedium' }}>
            {product.name}
          </TextMaxLine>

          <ProductRating ratingNumber={product.ratingNumber} label={`${product.sold} sold`} />

          <ProductPrice price={product.price} priceSale={product.priceSale} />
        </Stack>
      </Stack>
    </Link>
  );
}

EcommerceProductItemBestSellers.propTypes = {
  product: PropTypes.shape({
    coverUrl: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    priceSale: PropTypes.number,
    sold: PropTypes.number,
    ratingNumber: PropTypes.number,
  }),
};
