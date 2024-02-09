import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------------

export default function TestimonialItem({ testimonial, sx, ...other }) {
  return (
    <Stack
      alignItems="center"
      sx={{
        textAlign: 'center',
        ...sx,
      }}
      {...other}
    >
      <Rating value={testimonial.ratingNumber} readOnly />

      <Typography
        sx={{
          my: 3,
          lineHeight: 1.75,
          fontSize: { md: 20 },
        }}
      >
        {testimonial.review}
      </Typography>

      <Typography variant="h6">{testimonial.name}</Typography>

      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {testimonial.role}
      </Typography>
    </Stack>
  );
}

TestimonialItem.propTypes = {
  sx: PropTypes.object,
  testimonial: PropTypes.shape({
    name: PropTypes.string,
    review: PropTypes.string,
    role: PropTypes.string,
    ratingNumber: PropTypes.number,
  }),
};
