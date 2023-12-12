import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { fDate } from 'src/utils/format-time';
import { fCurrency } from 'src/utils/format-number';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function TravelOrderCompletedSummary() {
  return (
    <Stack
      spacing={3}
      sx={{
        p: 5,
        borderRadius: 2,
        border: (theme) => `dashed 1px ${theme.palette.divider}`,
      }}
    >
      <Typography variant="h5">Booking Details</Typography>

      <LineItem icon="carbon:calendar" label="Departure day" value={fDate(new Date())} />

      <LineItem icon="carbon:events" label="Guests" value="2 guest" />

      <Divider sx={{ borderStyle: 'dashed' }} />

      <LineItem icon="carbon:cube" label="Booking code" value="KU_H8SDM" />

      <LineItem icon="carbon:calendar" label="Booking day" value={fDate(new Date())} />

      <LineItem icon="carbon:receipt" label="Total" value={fCurrency(1112)} />

      <LineItem icon="carbon:purchase" label="Payment method" value="Paypal" />
    </Stack>
  );
}

// ----------------------------------------------------------------------

function LineItem({ icon, label, value }) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{ typography: 'body2', color: 'text.secondary' }}
    >
      <Iconify icon={icon} width={24} sx={{ mr: 1 }} /> {label}
      <Typography
        variant="subtitle2"
        sx={{ color: 'text.primary', flexGrow: 1, textAlign: 'right' }}
      >
        {value}
      </Typography>
    </Stack>
  );
}

LineItem.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  label: PropTypes.string,
  value: PropTypes.string,
};
