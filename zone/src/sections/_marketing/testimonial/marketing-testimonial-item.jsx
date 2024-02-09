import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------------

export default function TestimonialItem({ testimonial, ...other }) {
  return (
    <Stack
      spacing={{
        xs: 5,
        md: 10,
      }}
      direction={{
        xs: 'column',
        md: 'row',
      }}
      {...other}
    >
      <Typography
        sx={{
          mb: 5,
          lineHeight: 1.75,
          textAlign: 'center',
          fontSize: { md: 20 },
        }}
      >
        {testimonial.review}
      </Typography>

      <Stack sx={{ flexShrink: 0, textAlign: 'center' }}>
        <Avatar
          alt={testimonial.name}
          src={testimonial.avatarUrl}
          sx={{ width: 96, height: 96, mx: 'auto' }}
        />

        <Typography variant="h6" sx={{ mt: 2.5, mb: 0.5 }}>
          {testimonial.name}
        </Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {testimonial.role}
        </Typography>
      </Stack>
    </Stack>
  );
}

TestimonialItem.propTypes = {
  testimonial: PropTypes.shape({
    avatarUrl: PropTypes.string,
    name: PropTypes.string,
    review: PropTypes.string,
    role: PropTypes.string,
  }),
};
