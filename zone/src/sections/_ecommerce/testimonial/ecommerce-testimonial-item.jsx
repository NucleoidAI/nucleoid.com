import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

import { fDate } from 'src/utils/format-time';

// ----------------------------------------------------------------------

export default function TestimonialItem({ testimonial, sx, ...other }) {
  return (
    <Stack
      spacing={1}
      sx={{
        p: 3,
        borderRadius: 2,
        bgcolor: 'background.neutral',
        ...sx,
      }}
      {...other}
    >
      {testimonial.createdAt && (
        <Typography variant="caption" sx={{ color: 'text.disabled' }}>
          {fDate(testimonial.createdAt)}
        </Typography>
      )}

      <Typography variant="subtitle2">{testimonial.name}</Typography>

      <Rating size="small" value={testimonial.ratingNumber} readOnly />

      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {testimonial.review}
      </Typography>
    </Stack>
  );
}

TestimonialItem.propTypes = {
  sx: PropTypes.object,
  testimonial: PropTypes.shape({
    name: PropTypes.string,
    review: PropTypes.string,
    ratingNumber: PropTypes.number,
    createdAt: PropTypes.instanceOf(Date),
  }),
};
