import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import Iconify from 'src/components/iconify';

import CareerJobItem from '../list/career-job-item';

// ----------------------------------------------------------------------

export default function CareerLandingFeaturedJobs({ jobs }) {
  return (
    <Container
      sx={{
        pt: { xs: 5, md: 10 },
        pb: { xs: 10, md: 15 },
      }}
    >
      <Grid
        container
        spacing={{ xs: 2, md: 4 }}
        sx={{
          textAlign: { xs: 'center', md: 'unset' },
        }}
      >
        <Grid xs={12} md={4}>
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            Featured Jobs
          </Typography>
        </Grid>

        <Grid xs={12} md={8}>
          <Typography variant="h3">
            Jobs available apply to Editorial Specialist, Account Manager, Human Resources
            Specialist and more!
          </Typography>
        </Grid>
      </Grid>

      <Box
        sx={{
          columnGap: 4,
          display: 'grid',
          py: { xs: 8, md: 10 },
          rowGap: { xs: 4, md: 5 },
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

      <Stack alignItems="center">
        <Button
          component={RouterLink}
          href={paths.career.jobs}
          color="inherit"
          size="large"
          variant="outlined"
          endIcon={<Iconify icon="carbon:chevron-right" />}
        >
          View All Jobs
        </Button>
      </Stack>
    </Container>
  );
}

CareerLandingFeaturedJobs.propTypes = {
  jobs: PropTypes.array,
};
