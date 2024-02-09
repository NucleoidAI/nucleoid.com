import PropTypes from 'prop-types';

import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { fDate } from 'src/utils/format-time';

// ----------------------------------------------------------------------

export default function CareerJobDetailsCompanySimilar({ jobs }) {
  return (
    <Paper
      variant="outlined"
      sx={{
        p: 3,
        borderRadius: 2,
        bgcolor: 'background.default',
      }}
    >
      <Typography variant="h5" sx={{ mb: 1 }}>
        Jobs From This Company
      </Typography>

      {jobs.map((job) => (
        <Stack
          key={job.id}
          spacing={0.5}
          sx={{
            py: 2,
            borderBottom: (theme) => `dashed 1px ${theme.palette.divider}`,
            '&:last-child': {
              borderBottom: 0,
            },
          }}
        >
          <Link component={RouterLink} href={paths.career.job} variant="subtitle1" color="inherit">
            {job.slug}
          </Link>

          <Typography variant="body2" sx={{ color: 'text.disabled' }}>
            {fDate(job.deadline)}
          </Typography>
        </Stack>
      ))}
    </Paper>
  );
}

CareerJobDetailsCompanySimilar.propTypes = {
  jobs: PropTypes.array,
};
