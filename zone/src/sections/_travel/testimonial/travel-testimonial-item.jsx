import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function TestimonialItem({ testimonial, sx, ...other }) {
  return (
    <Stack
      alignItems={{
        xs: 'center',
        md: 'flex-start',
      }}
      sx={{
        textAlign: {
          xs: 'center',
          md: 'left',
        },
        ...sx,
      }}
      {...other}
    >
      <Iconify width={48} icon="carbon:quotes" sx={{ opacity: 0.48, color: 'primary.main' }} />

      <Typography
        sx={{
          mt: 2,
          mb: 5,
          lineHeight: 1.75,
          fontSize: { md: 20 },
        }}
      >
        {testimonial.review}
      </Typography>

      <Stack spacing={1.5} alignItems="center" direction="row">
        <Box
          sx={{
            width: 8,
            height: 9,
            bgcolor: 'primary.main',
            borderRadius: '50%',
          }}
        />
        <Typography variant="h6">{testimonial.name}</Typography>
      </Stack>
    </Stack>
  );
}

TestimonialItem.propTypes = {
  sx: PropTypes.object,
  testimonial: PropTypes.shape({
    name: PropTypes.string,
    review: PropTypes.string,
  }),
};
