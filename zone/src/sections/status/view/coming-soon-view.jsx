import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';

import { useCountdown } from 'src/hooks/use-countdown';

import { _socials } from 'src/_mock';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function ComingSoonView() {
  const { days, hours, minutes, seconds } = useCountdown(new Date('07/07/2024 21:30'));

  return (
    <>
      <Typography variant="h3" paragraph>
        Coming Soon!
      </Typography>

      <Typography sx={{ color: 'text.secondary' }}>
        We are currently working hard on this page!
      </Typography>

      <Image
        alt="comingsoon"
        src="/assets/illustrations/illustration_comingsoon.svg"
        sx={{
          my: 3,
          mx: 'auto',
          maxWidth: 320,
        }}
      />

      <Stack
        direction="row"
        justifyContent="center"
        divider={<Box sx={{ mx: { xs: 1, sm: 2.5 } }}>:</Box>}
        sx={{ typography: 'h2' }}
      >
        <TimeBlock label="Days" value={days} />

        <TimeBlock label="Hours" value={hours} />

        <TimeBlock label="Minutes" value={minutes} />

        <TimeBlock label="Seconds" value={seconds} />
      </Stack>

      <TextField
        fullWidth
        hiddenLabel
        placeholder="Enter your email"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Button variant="contained" size="large" color="inherit" sx={{ mr: -1.25 }}>
                Notify
              </Button>
            </InputAdornment>
          ),
        }}
        sx={{ my: 5 }}
      />

      <Stack direction="row" justifyContent="center">
        {_socials.map((social) => (
          <IconButton key={social.value}>
            <Iconify icon={social.icon} sx={{ color: social.color }} />
          </IconButton>
        ))}
      </Stack>
    </>
  );
}

// ----------------------------------------------------------------------

function TimeBlock({ label, value }) {
  return (
    <div>
      <Box> {value} </Box>
      <Box sx={{ color: 'text.secondary', typography: 'body1' }}>{label}</Box>
    </div>
  );
}

TimeBlock.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
};
