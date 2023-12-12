import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Label from 'src/components/label';
import Image from 'src/components/image';

// ----------------------------------------------------------------------

export default function Pricing01Card({ plan }) {
  const basicLicense = plan.license === 'Basic';

  const starterLicense = plan.license === 'Starter';

  const premiumLicense = plan.license === 'Premium';

  return (
    <Card
      sx={{
        p: 5,
        textAlign: 'center',
        boxShadow: (theme) => theme.customShadows.z8,
        ...(starterLicense && {
          py: 8,
          boxShadow: (theme) => theme.customShadows.z24,
        }),
      }}
    >
      {starterLicense && (
        <Label color="info" sx={{ position: 'absolute', top: 16, right: 16 }}>
          POPULAR
        </Label>
      )}

      <Stack spacing={5} alignItems="center">
        <Typography variant="overline" component="div" sx={{ color: 'text.secondary' }}>
          {plan.license}
        </Typography>

        <Image alt={plan.icon} src={plan.icon} sx={{ width: 80, height: 80 }} />

        <Stack direction="row" alignItems="center" justifyContent="center" spacing={0.5}>
          {!basicLicense && (
            <Typography variant="h4" component="span">
              $
            </Typography>
          )}

          <Typography variant="h3" component="span">
            {plan.price}
          </Typography>

          {!basicLicense && (
            <Typography variant="subtitle2" component="span">
              /mo
            </Typography>
          )}
        </Stack>

        <Stack spacing={1} sx={{ textAlign: 'center' }}>
          {plan.options.map((option) => (
            <Typography
              key={option.title}
              variant={option.disabled ? 'body2' : 'subtitle2'}
              sx={{
                ...(option.disabled && {
                  color: 'text.disabled',
                  textDecoration: 'line-through',
                }),
              }}
            >
              {option.title}
            </Typography>
          ))}
        </Stack>

        <Button
          fullWidth
          disabled={basicLicense}
          size="large"
          variant={basicLicense ? 'outlined' : 'contained'}
          color={premiumLicense ? 'primary' : 'inherit'}
        >
          {basicLicense && 'Current Plan'}
          {starterLicense && 'Choose Starter'}
          {premiumLicense && 'Choose Premium'}
        </Button>
      </Stack>
    </Card>
  );
}

Pricing01Card.propTypes = {
  plan: PropTypes.shape({
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    license: PropTypes.string,
    options: PropTypes.array,
    price: PropTypes.string,
  }),
};
