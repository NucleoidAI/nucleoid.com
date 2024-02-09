import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Rating, { ratingClasses } from '@mui/material/Rating';

// ----------------------------------------------------------------------

export default function ProductRating({ ratingNumber, label, ...other }) {
  return (
    <Stack spacing={0.5} direction="row" alignItems="center" {...other}>
      <Rating
        size="small"
        value={ratingNumber}
        readOnly
        precision={0.5}
        sx={{
          [`&.${ratingClasses.root}`]: {
            '& svg': {
              height: 12,
              width: 12,
            },
          },
        }}
      />

      {label && (
        <Typography variant="caption" sx={{ color: 'text.disabled' }}>
          {label}
        </Typography>
      )}
    </Stack>
  );
}

ProductRating.propTypes = {
  label: PropTypes.string,
  ratingNumber: PropTypes.number,
};
