import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';

import Label from 'src/components/label';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function PricingHomeCard({ plan }) {
  const standardLicense = plan.license === 'Standard';

  const plusLicense = plan.license === 'Plus';

  const extendedLicense = plan.license === 'Extended';

  return (
    <Card
      sx={{
        p: 5,
        boxShadow: (theme) => theme.customShadows.z8,
        ...(plusLicense && {
          py: 10,
          boxShadow: (theme) => theme.customShadows.z24,
        }),
      }}
    >
      {plusLicense && (
        <Label color="info" sx={{ position: 'absolute', top: 40, left: 40 }}>
          POPULAR
        </Label>
      )}

      <Stack spacing={5}>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h5" component="div" sx={{ textTransform: 'uppercase' }}>
            {plan.license}
          </Typography>

          <Stack direction="row" spacing={0.5}>
            <Typography variant="h4" component="span">
              $
            </Typography>
            <Typography variant="h3" component="span">
              {plan.price}
            </Typography>
          </Stack>
        </Stack>

        {standardLicense ? (
          <Box
            component="img"
            alt={plan.icons[0]}
            src={plan.icons[0]}
            sx={{ width: 20, height: 20 }}
          />
        ) : (
          <Stack direction="row" spacing={1.5}>
            {plan.icons.map((icon) => (
              <Box
                key={icon}
                component="img"
                alt={icon}
                src={icon}
                sx={{ width: 20, height: 20 }}
              />
            ))}
          </Stack>
        )}

        <Stack spacing={2.5}>
          {plan.commons.map((option) => (
            <Stack key={option} spacing={1.5} direction="row" alignItems="center">
              <Iconify
                icon="carbon:checkmark-outline"
                sx={{ color: 'primary.main', width: 20, height: 20 }}
              />
              <Typography variant="body2">{option}</Typography>
            </Stack>
          ))}

          <Divider sx={{ borderStyle: 'dashed' }} />

          {plan.options.map((option) => (
            <Stack
              key={option.title}
              direction="row"
              alignItems="center"
              sx={{
                typography: 'body2',
                ...(option.disabled && { color: 'text.disabled' }),
              }}
            >
              <Iconify
                icon={option.disabled ? 'carbon:close-outline' : 'carbon:checkmark-outline'}
                sx={{
                  mr: 2,
                  color: 'primary.main',
                  ...(option.disabled && { color: 'currentColor' }),
                }}
              />
              {option.title}
            </Stack>
          ))}
        </Stack>

        <Stack alignItems="flex-end" spacing={3}>
          <Button
            size="large"
            fullWidth
            variant={standardLicense ? 'outlined' : 'contained'}
            color={extendedLicense ? 'primary' : 'inherit'}
            target="_blank"
            rel="noopener"
            href={paths.zoneStore}
          >
            Choose Package
          </Button>

          <Link
            color="text.secondary"
            target="_blank"
            rel="noopener"
            variant="body2"
            href={paths.license}
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            Read license
            <Iconify icon="carbon:chevron-right" width={16} sx={{ ml: 1 }} />
          </Link>
        </Stack>
      </Stack>
    </Card>
  );
}

PricingHomeCard.propTypes = {
  plan: PropTypes.shape({
    commons: PropTypes.array,
    icons: PropTypes.array,
    license: PropTypes.string,
    options: PropTypes.array,
    price: PropTypes.string,
  }),
};
