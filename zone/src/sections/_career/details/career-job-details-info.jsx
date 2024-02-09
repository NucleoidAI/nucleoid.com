import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { fDate } from 'src/utils/format-time';
import { fCurrency } from 'src/utils/format-number';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function CareerJobDetailsInfo({ job }) {
  const { createdAt, salary, experience, deadline, level, languages } = job;

  return (
    <Card sx={{ p: 3 }}>
      <Stack spacing={2}>
        <Stack spacing={2} direction="row" alignItems="flex-start">
          <Iconify icon="carbon:calendar" width={24} />
          <Stack>
            <Typography variant="subtitle2"> Date Posted </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {fDate(createdAt)}
            </Typography>
          </Stack>
        </Stack>

        <Stack spacing={2} direction="row" alignItems="flex-start">
          <Iconify icon="carbon:hourglass" width={24} />
          <Stack>
            <Typography variant="subtitle2"> Expiration date </Typography>
            <Typography variant="body2" sx={{ color: 'error.main' }}>
              {fDate(deadline)}
            </Typography>
          </Stack>
        </Stack>

        <Stack spacing={2} direction="row" alignItems="flex-start">
          <Iconify icon="carbon:money" width={24} />
          <Stack>
            <Typography variant="subtitle2"> Offered Salary (month) </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {typeof salary === 'number' ? fCurrency(salary) : salary}
            </Typography>
          </Stack>
        </Stack>

        <Stack spacing={2} direction="row" alignItems="flex-start">
          <Iconify icon="carbon:increase-level" width={24} />
          <Stack>
            <Typography variant="subtitle2"> Experience </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {`${experience} year exp`}
            </Typography>
          </Stack>
        </Stack>

        <Stack spacing={2} direction="row" alignItems="flex-start">
          <Iconify icon="carbon:user" width={24} />
          <Stack>
            <Typography variant="subtitle2"> Level </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {level}
            </Typography>
          </Stack>
        </Stack>

        <Stack spacing={2} direction="row" alignItems="flex-start">
          <Iconify icon="carbon:translate" width={24} />
          <Stack>
            <Typography variant="subtitle2"> Language </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {typeof languages === 'string' ? languages : languages.join(', ')}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Card>
  );
}

CareerJobDetailsInfo.propTypes = {
  job: PropTypes.shape({
    level: PropTypes.string,
    salary: PropTypes.string,
    experience: PropTypes.number,
    deadline: PropTypes.instanceOf(Date),
    createdAt: PropTypes.instanceOf(Date),
    languages: PropTypes.arrayOf(PropTypes.string),
  }),
};
