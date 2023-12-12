import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function Pricing02ContentDesktop({ plan }) {
  const startLicense = plan.license === 'Start';

  const proLicense = plan.license === 'Pro';

  const businessLicense = plan.license === 'Business';

  return (
    <Box>
      {plan.options.map((option) => (
        <Stack
          key={option.title}
          alignItems="center"
          justifyContent="center"
          sx={{
            height: 72,
            color: 'text.secondary',
            borderBottom: (theme) => `solid 1px ${theme.palette.divider}`,
            ...(proLicense && {
              bgcolor: 'background.neutral',
            }),
          }}
        >
          {option.disabled ? (
            '-'
          ) : (
            <Iconify
              icon="carbon:checkmark"
              sx={{ width: 24, height: 24, color: 'primary.main' }}
            />
          )}
        </Stack>
      ))}

      <Stack
        sx={{
          py: 5,
          ...(proLicense && {
            bgcolor: 'background.neutral',
            borderRadius: '0 0 16px 16px',
          }),
        }}
      >
        <Button
          size="large"
          variant={proLicense ? 'contained' : 'outlined'}
          color="inherit"
          sx={{ mx: 'auto' }}
        >
          {startLicense && 'Start Free Trial'}

          {proLicense && 'Choose Pro'}

          {businessLicense && 'Contact Sale'}
        </Button>
      </Stack>
    </Box>
  );
}

Pricing02ContentDesktop.propTypes = {
  plan: PropTypes.shape({
    license: PropTypes.string,
    options: PropTypes.array,
  }),
};
