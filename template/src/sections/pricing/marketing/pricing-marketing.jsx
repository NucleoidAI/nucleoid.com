import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import PlanCard from './pricing-marketing-card';

// ----------------------------------------------------------------------

export default function PricingMarketing({ plans }) {
  return (
    <Container
      sx={{
        pt: 10,
        pb: { xs: 5, md: 10 },
      }}
    >
      <Stack
        spacing={5}
        alignItems={{ xs: 'center', md: 'flex-end' }}
        direction={{ xs: 'column', md: 'row' }}
        justifyContent={{ md: 'space-between' }}
        sx={{ mb: { xs: 5, md: 10 } }}
      >
        <Stack
          spacing={3}
          sx={{
            maxWidth: 480,
            mx: { xs: 'auto', md: 'unset' },
            textAlign: { xs: 'center', md: 'unset' },
          }}
        >
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            Pricing
          </Typography>

          <Typography variant="h2">Check Our Pricing</Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            Choose the perfect plan for your needs.
            <br /> Always flexible to grow
          </Typography>
        </Stack>

        <Stack direction="row" alignItems="center">
          <Typography variant="overline">MONTHLY</Typography>

          <Switch defaultChecked />

          <Typography variant="overline">YEARLY (save 10%)</Typography>
        </Stack>
      </Stack>

      <Box
        sx={{
          gap: 4,
          display: 'grid',
          alignItems: 'center',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            md: 'repeat(3, 1fr)',
          },
        }}
      >
        {plans.map((plan) => (
          <PlanCard key={plan.license} plan={plan} />
        ))}
      </Box>
    </Container>
  );
}

PricingMarketing.propTypes = {
  plans: PropTypes.array,
};
