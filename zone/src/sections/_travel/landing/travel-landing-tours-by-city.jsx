import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { useResponsive } from 'src/hooks/use-responsive';

import Iconify from 'src/components/iconify';
import TextMaxLine from 'src/components/text-max-line';

// ----------------------------------------------------------------------

export default function TravelLandingToursByCity({ tours }) {
  const mdUp = useResponsive('up', 'md');

  const viewAllBtn = (
    <Button
      component={RouterLink}
      href={paths.travel.tours}
      color="inherit"
      endIcon={<Iconify icon="carbon:chevron-right" />}
    >
      View All
    </Button>
  );

  return (
    <Container
      sx={{
        pt: { xs: 5, md: 10 },
        pb: 10,
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent={{ xs: 'center', md: 'space-between' }}
        sx={{
          mb: { xs: 8, md: 10 },
          textAlign: { xs: 'center', md: 'unset' },
        }}
      >
        <Stack spacing={3}>
          <Typography variant="h2">Tours By City</Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            {`Our Featured Tours can help you find the trip that's perfect for you!`}
          </Typography>
        </Stack>

        {mdUp && viewAllBtn}
      </Stack>

      <Box
        sx={{
          gap: 3,
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
            lg: 'repeat(4, 1fr)',
          },
        }}
      >
        {tours.map((tour) => (
          <TourItem key={tour.id} tour={tour} />
        ))}
      </Box>

      {!mdUp && (
        <Stack alignItems="center" sx={{ mt: 8 }}>
          {viewAllBtn}
        </Stack>
      )}
    </Container>
  );
}

TravelLandingToursByCity.propTypes = {
  tours: PropTypes.array,
};

// ----------------------------------------------------------------------

function TourItem({ tour }) {
  const { coverUrl, location } = tour;

  return (
    <Link component={RouterLink} href={paths.travel.tour} color="inherit" underline="none">
      <Paper
        variant="outlined"
        sx={{
          p: 3,
          borderRadius: 2,
          cursor: 'pointer',
          bgcolor: 'background.default',
          '&:hover': {
            boxShadow: (theme) => theme.customShadows.z24,
            bgcolor: 'background.paper',
          },
        }}
      >
        <Stack direction="row" alignItems="center" spacing={2.5}>
          <Avatar src={coverUrl} sx={{ width: 64, height: 64 }} />

          <Stack spacing={0.5}>
            <TextMaxLine variant="h6" line={1}>
              {location}
            </TextMaxLine>

            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              196 Place
            </Typography>
          </Stack>
        </Stack>
      </Paper>
    </Link>
  );
}

TourItem.propTypes = {
  tour: PropTypes.shape({
    coverUrl: PropTypes.string,
    location: PropTypes.string,
  }),
};
