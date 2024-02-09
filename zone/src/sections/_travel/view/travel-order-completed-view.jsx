import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { useResponsive } from 'src/hooks/use-responsive';

import { _tours } from 'src/_mock';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';

import TravelOrderCompletedInfo from '../order-completed/travel-order-completed-info';
import TravelOrderCompletedSummary from '../order-completed/travel-order-completed-summary';

// ----------------------------------------------------------------------

const _mockTour = _tours[1];

export default function TravelOrderCompletedView() {
  const mdUp = useResponsive('up', 'md');

  return (
    <Container
      sx={{
        pt: 5,
        pb: { xs: 8, md: 15 },
        gap: 10,
        display: 'grid',
        alignItems: 'flex-start',
        gridTemplateColumns: { md: 'repeat(2, 1fr)' },
      }}
    >
      {mdUp && <Image alt="cover" src={_mockTour.coverUrl} ratio="3/4" sx={{ borderRadius: 2 }} />}

      <Stack spacing={5}>
        <Typography variant="h2">Completed 🎉</Typography>

        <TravelOrderCompletedInfo tour={_mockTour} />

        <TravelOrderCompletedSummary />

        <Stack spacing={2.5} direction={{ xs: 'column', md: 'row' }} justifyContent="center">
          <Button
            component={RouterLink}
            href="/"
            variant="outlined"
            size="large"
            color="inherit"
            startIcon={<Iconify icon="carbon:chevron-left" />}
          >
            Back Home
          </Button>

          <Button
            variant="contained"
            size="large"
            color="inherit"
            startIcon={<Iconify icon="carbon:package" />}
          >
            Download Invoice
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
