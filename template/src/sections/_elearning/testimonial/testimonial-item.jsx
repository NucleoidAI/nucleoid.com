import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export function TestimonialItemContent({ testimonial }) {
  const { review } = testimonial;

  return (
    <Stack alignItems="center">
      <Iconify
        icon="carbon:quotes"
        sx={{ width: 48, height: 48, opacity: 0.48, color: 'primary.main' }}
      />

      <Typography
        sx={{
          mt: 2,
          mb: 5,
          lineHeight: 1.75,
          fontSize: { xs: 20, md: 24 },
          fontFamily: (theme) => theme.typography.h1.fontFamily,
        }}
      >
        {review}
      </Typography>
    </Stack>
  );
}

TestimonialItemContent.propTypes = {
  testimonial: PropTypes.shape({
    review: PropTypes.string,
  }),
};

// ----------------------------------------------------------------------

export function TestimonialItemThumbnail({ testimonial, selected }) {
  return (
    <Stack
      sx={{
        width: 96,
        height: 96,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Avatar
        src={testimonial.avatarUrl}
        sx={{
          width: 48,
          height: 48,
          opacity: 0.48,
          cursor: 'pointer',
          transition: (theme) => theme.transitions.create('all'),
          ...(selected && {
            opacity: 1,
            transform: 'scale(2)',
          }),
        }}
      />
    </Stack>
  );
}

TestimonialItemThumbnail.propTypes = {
  selected: PropTypes.bool,
  testimonial: PropTypes.shape({
    avatarUrl: PropTypes.string,
  }),
};
