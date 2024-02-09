import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { useResponsive } from 'src/hooks/use-responsive';

import Iconify from 'src/components/iconify';

import CareerJobItem from './career-job-item';

// ----------------------------------------------------------------------

export default function CareerJobListSimilar({ jobs }) {
  const mdUp = useResponsive('up', 'md');

  const viewAllBtn = (
    <Button
      component={RouterLink}
      href={paths.career.jobs}
      color="inherit"
      endIcon={<Iconify icon="carbon:chevron-right" />}
    >
      View All Jobs
    </Button>
  );

  return (
    <Box sx={{ bgcolor: 'background.neutral', py: { xs: 10, md: 15 } }}>
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{
            mb: { xs: 8, md: 10 },
          }}
        >
          <Typography variant="h3">Similar Jobs</Typography>

          {mdUp && viewAllBtn}
        </Stack>

        <Box
          sx={{
            gap: 4,
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
          }}
        >
          {jobs.map((job) => (
            <CareerJobItem key={job.id} job={job} />
          ))}
        </Box>

        {!mdUp && (
          <Stack alignItems="center" sx={{ mt: 8 }}>
            {viewAllBtn}
          </Stack>
        )}
      </Container>
    </Box>
  );
}

CareerJobListSimilar.propTypes = {
  jobs: PropTypes.array,
};
