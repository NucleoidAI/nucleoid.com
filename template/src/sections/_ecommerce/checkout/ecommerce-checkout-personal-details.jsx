import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';

import { useBoolean } from 'src/hooks/use-boolean';

import Iconify from 'src/components/iconify';
import { RHFTextField } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export default function EcommerceCheckoutPersonalDetails() {
  const passwordShow = useBoolean();

  return (
    <>
      <Stack direction="row" flexWrap="wrap" alignItems="center" spacing={1} sx={{ mb: 4 }}>
        <Typography variant="subtitle2">Sign in with:</Typography>

        <Button
          color="inherit"
          variant="outlined"
          startIcon={<Iconify icon="carbon:logo-facebook" sx={{ color: '#1877F2' }} />}
        >
          Facebook
        </Button>

        <Button color="inherit" variant="outlined" startIcon={<Iconify icon="logos:google-icon" />}>
          Google
        </Button>

        <Button color="inherit" variant="outlined" startIcon={<Iconify icon="carbon:email" />}>
          Continue with Email
        </Button>
      </Stack>

      <Box
        rowGap={2.5}
        columnGap={2}
        display="grid"
        gridTemplateColumns={{ xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
      >
        <RHFTextField name="firstName" label="First Name" />

        <RHFTextField name="lastName" label="Last Name" />

        <RHFTextField name="emailAddress" label="Email Address" />

        <RHFTextField name="phoneNumber" label="Phone Number" />

        <RHFTextField
          name="password"
          label="Password"
          type={passwordShow.value ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={passwordShow.onToggle} edge="end">
                  <Iconify icon={passwordShow.value ? 'carbon:view' : 'carbon:view-off'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <RHFTextField
          name="confirmPassword"
          label="Password"
          type={passwordShow.value ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={passwordShow.onToggle} edge="end">
                  <Iconify icon={passwordShow.value ? 'carbon:view' : 'carbon:view-off'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </>
  );
}
