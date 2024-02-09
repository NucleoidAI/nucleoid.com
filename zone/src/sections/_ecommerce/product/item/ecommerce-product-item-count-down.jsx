import { add } from 'date-fns';
import PropTypes from 'prop-types';

import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { fCurrency } from 'src/utils/format-number';

import Image from 'src/components/image';
import TextMaxLine from 'src/components/text-max-line';

import ProductCountdownBlock from '../../common/product-countdown-block';

// ----------------------------------------------------------------------

export default function EcommerceProductItemCountDown({ product, color = 'primary', sx }) {
  const theme = useTheme();

  return (
    <Link component={RouterLink} href={paths.eCommerce.product} color="inherit" underline="none">
      <Stack
        spacing={3}
        sx={{
          p: 3,
          borderRadius: 2,
          color: `${color}.darker`,
          bgcolor: `${color}.lighter`,
          transition: theme.transitions.create('background-color', {
            easing: theme.transitions.easing.easeIn,
            duration: theme.transitions.duration.shortest,
          }),
          '&:hover': {
            bgcolor: `${color}.light`,
          },
          ...sx,
        }}
      >
        <Image
          src={product.coverUrl}
          sx={{
            filter: `drop-shadow(20px 20px 24px ${alpha(theme.palette.common.black, 0.16)})`,
          }}
        />

        <Stack spacing={1} sx={{ textAlign: 'center' }}>
          <TextMaxLine variant="subtitle2" sx={{ opacity: 0.72 }}>
            {product.name}
          </TextMaxLine>

          <Typography variant="h5">{`From ${fCurrency(product.price)}`}</Typography>
        </Stack>

        <ProductCountdownBlock expired={add(new Date(), { days: 1, hours: 8 })} />
      </Stack>
    </Link>
  );
}

EcommerceProductItemCountDown.propTypes = {
  color: PropTypes.string,
  product: PropTypes.shape({
    coverUrl: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
  }),
  sx: PropTypes.object,
};
