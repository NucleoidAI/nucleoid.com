import PropTypes from 'prop-types';
import { Controller, useFormContext } from 'react-hook-form';

import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import Stack from '@mui/material/Stack';
import { alpha } from '@mui/material/styles';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel, { formControlLabelClasses } from '@mui/material/FormControlLabel';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function EcommerceCheckoutShippingMethod({ options }) {
  const { control } = useFormContext();

  return (
    <Controller
      name="shipping"
      control={control}
      render={({ field }) => (
        <RadioGroup
          {...field}
          sx={{
            rowGap: 2.5,
            columnGap: 2,
            display: 'grid',
            gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' },
          }}
        >
          {options.map((option) => (
            <OptionItem
              key={option.value}
              option={option}
              selected={field.value === option.value}
            />
          ))}
        </RadioGroup>
      )}
    />
  );
}

EcommerceCheckoutShippingMethod.propTypes = {
  options: PropTypes.array,
};

// ----------------------------------------------------------------------

function OptionItem({ option, selected }) {
  const { value, label, price, description } = option;

  const renderLabel = (
    <Stack flexGrow={1} spacing={0.5} sx={{ width: 1 }}>
      <Stack direction="row" alignItems="center">
        <Iconify
          icon={
            (value === 'standard' && 'carbon:delivery') ||
            (value === 'express' && 'carbon:rocket') ||
            'carbon:bicycle'
          }
          width={24}
        />

        <Box component="span" sx={{ typography: 'subtitle1', flexGrow: 1, ml: 1 }}>
          {label}
        </Box>

        <Box component="span" sx={{ typography: 'h6' }}>
          {`$${price}`}
        </Box>
      </Stack>

      <Box component="span" sx={{ typography: 'body2', color: 'text.secondary' }}>
        {description}
      </Box>
    </Stack>
  );

  return (
    <FormControlLabel
      value={value}
      control={
        <Radio
          disableRipple
          checkedIcon={<Iconify icon="carbon:checkmark-outline" />}
          sx={{ mx: 1 }}
        />
      }
      label={renderLabel}
      sx={{
        m: 0,
        py: 3,
        pr: 2,
        borderRadius: 1,
        border: (theme) => `solid 1px ${alpha(theme.palette.grey[500], 0.24)}`,
        ...(selected && {
          boxShadow: (theme) => `0 0 0 2px ${theme.palette.text.primary}`,
        }),
        [`& .${formControlLabelClasses.label}`]: {
          width: 1,
        },
      }}
    />
  );
}

OptionItem.propTypes = {
  option: PropTypes.shape({
    description: PropTypes.string,
    label: PropTypes.string,
    price: PropTypes.number,
    value: PropTypes.string,
  }),
  selected: PropTypes.bool,
};
