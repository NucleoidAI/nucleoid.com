import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Label from 'src/components/label';
import Image from 'src/components/image';

// ----------------------------------------------------------------------

export default function Pricing02Header({ plan }) {
  const startLicense = plan.license === 'Start';

  const proLicense = plan.license === 'Pro';

  return (
    <Stack
      spacing={2}
      alignItems={{ xs: 'flex-start', md: 'center' }}
      sx={{
        px: 3,
        py: 5,
        position: 'relative',
        ...(proLicense && {
          bgcolor: { md: 'background.neutral' },
          borderRadius: '16px 16px 0 0',
        }),
      }}
    >
      {proLicense && (
        <Label color="info" sx={{ position: 'absolute', top: 16, right: 16 }}>
          POPULAR
        </Label>
      )}

      <Typography variant="overline" sx={{ color: 'text.secondary' }}>
        {plan.license}
      </Typography>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={0.5}
        sx={{
          ...(proLicense && {
            color: { md: 'primary.main' },
          }),
        }}
      >
        {!startLicense && (
          <Typography variant="h4" component="span">
            $
          </Typography>
        )}

        <Typography variant="h3" component="span">
          {plan.price}
        </Typography>

        {!startLicense && (
          <Typography variant="subtitle2" component="span">
            /mo
          </Typography>
        )}
      </Stack>

      <Image alt={plan.icon} src={plan.icon} sx={{ width: 80, height: 80 }} />

      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {plan.caption}
      </Typography>
    </Stack>
  );
}

Pricing02Header.propTypes = {
  plan: PropTypes.shape({
    caption: PropTypes.string,
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    license: PropTypes.string,
    price: PropTypes.string,
  }),
};
