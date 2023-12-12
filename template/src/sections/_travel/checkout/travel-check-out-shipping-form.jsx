import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';

import { RHFTextField } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export default function TravelCheckOutShippingForm({ sameBilling, onChangeSameBilling }) {
  return (
    <Stack spacing={5}>
      <div>
        <Typography variant="overline" sx={{ color: 'text.secondary', mb: 3, display: 'block' }}>
          Billing Address
        </Typography>

        <Stack spacing={2.5}>
          <Stack spacing={{ xs: 2.5, md: 2 }} direction={{ xs: 'column', md: 'row' }}>
            <RHFTextField name="billingAddress.firstName" label="First Name" />
            <RHFTextField name="billingAddress.lastName" label="Last Name" />
          </Stack>
          <RHFTextField name="billingAddress.fullAddress" label="Full Address" />
          <RHFTextField name="billingAddress.fullAddress2" label="Full Address2" />
        </Stack>
      </div>

      <div>
        <Stack
          spacing={3}
          direction={{ xs: 'column', md: 'row' }}
          justifyContent={{ md: 'space-between' }}
          alignItems={{ xs: 'flex-start', md: 'center' }}
        >
          <Typography variant="overline" sx={{ color: 'text.secondary' }}>
            Shipping Address
          </Typography>
          <FormControlLabel
            control={<Switch checked={sameBilling} onClick={onChangeSameBilling} />}
            label="Same as Billing Address"
            labelPlacement="start"
          />
        </Stack>

        <Collapse
          in={!sameBilling}
          unmountOnExit
          sx={{
            ...(!sameBilling && { mt: 3 }),
          }}
        >
          <Stack spacing={2.5}>
            <Stack spacing={{ xs: 2.5, md: 2 }} direction={{ xs: 'column', md: 'row' }}>
              <RHFTextField name="shippingAddress.firstName" label="First Name" />
              <RHFTextField name="shippingAddress.lastName" label="Last Name" />
            </Stack>
            <RHFTextField name="shippingAddress.fullAddress" label="Full Address" />
            <RHFTextField name="shippingAddress.fullAddress2" label="Full Address2" />
          </Stack>
        </Collapse>
      </div>
    </Stack>
  );
}

TravelCheckOutShippingForm.propTypes = {
  onChangeSameBilling: PropTypes.func,
  sameBilling: PropTypes.bool,
};
