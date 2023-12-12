import Box from '@mui/material/Box';

import { countries } from 'src/assets/data';

import { RHFTextField, RHFAutocomplete } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export default function EcommerceCheckoutShippingDetails() {
  return (
    <Box
      rowGap={2.5}
      columnGap={2}
      display="grid"
      gridTemplateColumns={{ xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
    >
      <RHFTextField name="streetAddress" label="Street address" />

      <RHFTextField name="zipCode" label="ZIP Code" />

      <RHFTextField name="city" label="City" />

      <RHFAutocomplete
        name="country"
        type="country"
        label="Country"
        placeholder="Choose a country"
        fullWidth
        options={countries.map((option) => option.label)}
        getOptionLabel={(option) => option}
      />
    </Box>
  );
}
