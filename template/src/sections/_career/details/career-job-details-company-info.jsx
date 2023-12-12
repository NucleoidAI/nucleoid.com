import PropTypes from 'prop-types';

import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Image from 'src/components/image';

// ----------------------------------------------------------------------

export default function CareerJobDetailsCompanyInfo({ job }) {
  return (
    <Paper variant="outlined" sx={{ p: 3, borderRadius: 2, bgcolor: 'background.default' }}>
      <Stack spacing={2} direction="row" alignItems="center">
        <Image
          alt={job.company.name}
          src={job.company.logo}
          sx={{ width: 48, height: 48, borderRadius: 1 }}
        />

        <Stack spacing={0.5}>
          <Typography variant="h6">{job.company.name}</Typography>
          <Link variant="body2" sx={{ color: 'text.secondary' }}>
            View Company Profile
          </Link>
        </Stack>
      </Stack>
    </Paper>
  );
}

CareerJobDetailsCompanyInfo.propTypes = {
  job: PropTypes.shape({
    company: PropTypes.shape({
      logo: PropTypes.string,
      name: PropTypes.string,
    }),
  }),
};
