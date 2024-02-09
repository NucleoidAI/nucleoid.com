import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { fShortenNumber } from 'src/utils/format-number';

import { _socials } from 'src/_mock';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function ReviewTourGuideInfo({ tourGuide }) {
  const { name, about, quotes, totalReviews, ratingNumber, verified, avatarUrl } = tourGuide;

  return (
    <Paper variant="outlined" sx={{ borderRadius: 2 }}>
      <Stack alignItems="center" sx={{ textAlign: 'center', p: 5 }}>
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          badgeContent={
            verified ? (
              <Box
                sx={{
                  width: 20,
                  height: 20,
                  borderRadius: '50%',
                  bgcolor: 'background.default',
                }}
              >
                <Iconify icon="carbon:checkmark-filled" sx={{ color: 'success.main' }} />
              </Box>
            ) : null
          }
        >
          <Avatar src={avatarUrl} sx={{ width: 96, height: 96 }} />
        </Badge>

        <Stack spacing={1} sx={{ my: 2 }}>
          <Typography variant="h4">{name}</Typography>

          <Stack spacing={0.5} direction="row" alignItems="center">
            <Iconify icon="carbon:star-filled" sx={{ color: 'warning.main' }} />

            <Box sx={{ typography: 'h6' }}>
              {Number.isInteger(ratingNumber) ? `${ratingNumber}.0` : ratingNumber}
            </Box>

            <Box sx={{ typography: 'body2', color: 'text.secondary' }}>
              ({totalReviews ? fShortenNumber(totalReviews) : 0} reviews)
            </Box>
          </Stack>
        </Stack>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {about}
        </Typography>

        <Stack direction="row" sx={{ my: 2.5 }}>
          {_socials.map((social) => (
            <IconButton key={social.value}>
              <Iconify icon={social.icon} sx={{ color: social.color }} />
            </IconButton>
          ))}
        </Stack>

        <Typography variant="caption" paragraph sx={{ color: 'text.disabled' }}>
          {quotes}
        </Typography>

        <Button color="inherit" variant="outlined" size="large">
          Contact Tour Guide
        </Button>
      </Stack>
    </Paper>
  );
}

ReviewTourGuideInfo.propTypes = {
  tourGuide: PropTypes.shape({
    about: PropTypes.string,
    avatarUrl: PropTypes.string,
    name: PropTypes.string,
    quotes: PropTypes.string,
    ratingNumber: PropTypes.number,
    totalReviews: PropTypes.number,
    verified: PropTypes.bool,
  }),
};
