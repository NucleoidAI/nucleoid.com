import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating, { ratingClasses } from '@mui/material/Rating';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { fCurrency } from 'src/utils/format-number';

import Image from 'src/components/image';

// ----------------------------------------------------------------------

export default function EcommerceCompareItem({ product }) {
  return (
    <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center' }}>
      <Image
        src={product.coverUrl}
        sx={{
          flexShrink: 0,
          borderRadius: 1.5,
          bgcolor: 'background.neutral',
        }}
      />

      <Stack alignItems="center" spacing={1}>
        <Typography variant="subtitle2"> {product.name} </Typography>
        <Typography variant="h6"> {fCurrency(product.price)} </Typography>
        <Rating
          size="small"
          readOnly
          value={product.ratingNumber}
          precision={0.5}
          sx={{
            [`&.${ratingClasses.root}`]: {
              '& svg': {
                width: { xs: 12, md: 20 },
                height: { xs: 12, md: 20 },
              },
            },
          }}
        />
      </Stack>

      <Button
        component={RouterLink}
        href={paths.eCommerce.cart}
        fullWidth
        size="large"
        color="inherit"
        variant="contained"
        sx={{ px: 0 }}
      >
        Buy Now
      </Button>

      {product.details.map((row, index) => (
        <Typography
          key={index}
          sx={{
            typography: { xs: 'caption', md: 'body2' },
          }}
        >
          {row || '-'}
        </Typography>
      ))}
    </Stack>
  );
}

EcommerceCompareItem.propTypes = {
  product: PropTypes.shape({
    coverUrl: PropTypes.string,
    details: PropTypes.array,
    name: PropTypes.string,
    price: PropTypes.number,
    ratingNumber: PropTypes.number,
  }),
};
