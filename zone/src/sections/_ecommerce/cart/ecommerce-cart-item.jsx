import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { fCurrency } from 'src/utils/format-number';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function EcommerceCartItem({ product, wishlist }) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        py: 3,
        minWidth: 720,
        borderBottom: (theme) => `solid 1px ${theme.palette.divider}`,
      }}
    >
      <Stack direction="row" alignItems="center" flexGrow={1}>
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

        <Stack spacing={0.5} sx={{ p: 2 }}>
          <Typography variant="subtitle2">{product.name}</Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Color: Grey Space
          </Typography>
        </Stack>
      </Stack>

      <Stack sx={{ width: 120 }}>
        <TextField
          select
          size="small"
          variant="outlined"
          SelectProps={{
            native: true,
          }}
          sx={{ width: 80 }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </TextField>
      </Stack>

      <Stack sx={{ width: 120, typography: 'subtitle2' }}> {fCurrency(product.price)} </Stack>

      <IconButton>
        <Iconify icon="carbon:trash-can" />
      </IconButton>

      {wishlist && (
        <IconButton>
          <Iconify icon="carbon:shopping-cart-plus" />
        </IconButton>
      )}
    </Stack>
  );
}

EcommerceCartItem.propTypes = {
  product: PropTypes.shape({
    coverUrl: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
  }),
  wishlist: PropTypes.bool,
};
