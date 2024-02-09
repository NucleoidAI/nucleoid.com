import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { alpha } from '@mui/material/styles';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import Image from 'src/components/image';
import TextMaxLine from 'src/components/text-max-line';

import ProductPrice from '../../common/product-price';

// ----------------------------------------------------------------------

export default function EcommerceProductItemFeaturedByBrand({ product, sx, ...other }) {
  return (
    <Stack
      spacing={2}
      direction="row"
      sx={{
        p: 2,
        borderRadius: 2,
        border: (theme) => `solid 1px ${alpha(theme.palette.grey[500], 0.24)}`,
        ...sx,
      }}
      {...other}
    >
      <Image
        src={product.coverUrl}
        sx={{
          width: 128,
          height: 128,
          flexShrink: 0,
          borderRadius: 1.5,
          bgcolor: 'background.neutral',
        }}
      />

      <Stack spacing={0.5} flexGrow={1}>
        <TextMaxLine variant="body2" line={1} sx={{ fontWeight: 'fontWeightMedium' }}>
          {product.name}
        </TextMaxLine>

        <TextMaxLine variant="caption" line={1} sx={{ color: 'text.disabled' }}>
          {product.category}
        </TextMaxLine>

        <ProductPrice price={product.price} priceSale={product.priceSale} />

        <Stack flexGrow={1} alignItems="flex-end" justifyContent="flex-end">
          <Button
            component={RouterLink}
            href={paths.eCommerce.product}
            size="small"
            color="inherit"
            variant="contained"
          >
            Buy Now
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}

EcommerceProductItemFeaturedByBrand.propTypes = {
  product: PropTypes.shape({
    category: PropTypes.string,
    coverUrl: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    priceSale: PropTypes.number,
  }),
  sx: PropTypes.object,
};
