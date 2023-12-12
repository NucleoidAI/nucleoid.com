import PropTypes from 'prop-types';
import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Radio from '@mui/material/Radio';
import Button from '@mui/material/Button';
import { alpha } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel, { formControlLabelClasses } from '@mui/material/FormControlLabel';

import { useBoolean } from 'src/hooks/use-boolean';

import Iconify from 'src/components/iconify';

import PaymentNewCardForm from './payment-new-card-form';

// ----------------------------------------------------------------------

const PAYMENT_OPTIONS = [
  {
    label: 'Paypal',
    value: 'paypal',
  },
  {
    label: 'Credit / Debit',
    value: 'creditcard',
  },
];

const CARD_OPTIONS = [
  {
    value: 'visa1',
    label: '**** **** **** 1212 - Jimmy Holland',
  },
  {
    value: 'visa2',
    label: '**** **** **** 2424 - Shawn Stokes',
  },
  {
    value: 'mastercard',
    label: '**** **** **** 4545 - Cole Armstrong',
  },
];

// ----------------------------------------------------------------------

export default function PaymentMethods() {
  const [method, setMethod] = useState('paypal');

  const formOpen = useBoolean();

  const handleChangeMethod = useCallback((event) => {
    setMethod(event.target.value);
  }, []);

  return (
    <>
      <Stack spacing={5}>
        <Typography variant="h5">Payment Method</Typography>

        <RadioGroup value={method} onChange={handleChangeMethod}>
          <Stack spacing={2.5}>
            {PAYMENT_OPTIONS.map((option) => (
              <OptionItem
                key={option.value}
                option={option}
                selected={method === option.value}
                isCredit={option.value === 'creditcard' && method === 'creditcard'}
                onOpen={formOpen.onTrue}
              />
            ))}
          </Stack>
        </RadioGroup>
      </Stack>

      <PaymentNewCardForm open={formOpen.value} onClose={formOpen.onFalse} />
    </>
  );
}

// ----------------------------------------------------------------------

function OptionItem({ option, onOpen, selected, isCredit }) {
  const { value, label } = option;

  const renderLabel = (
    <Stack direction="row" alignItems="center">
      <Box component="span" sx={{ typography: 'subtitle1', flexGrow: 1 }}>
        {label}
      </Box>

      <Stack spacing={1} direction="row" alignItems="center">
        {value === 'creditcard' ? (
          <>
            <Iconify icon="logos:mastercard" width={24} />,
            <Iconify icon="logos:visa" width={24} />
          </>
        ) : (
          <Iconify icon="logos:paypal" width={24} />
        )}
      </Stack>
    </Stack>
  );

  return (
    <Box
      sx={{
        borderRadius: 1,
        border: (theme) => `solid 1px ${alpha(theme.palette.grey[500], 0.24)}`,
        ...(selected && {
          boxShadow: (theme) => `0 0 0 2px ${theme.palette.text.primary}`,
        }),
      }}
    >
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
          py: 2,
          pr: 2.5,
          width: 1,
          [`& .${formControlLabelClasses.label}`]: {
            width: 1,
          },
        }}
      />

      {isCredit && (
        <Stack
          alignItems="flex-start"
          sx={{
            px: 3,
            width: 1,
          }}
        >
          <TextField
            select
            fullWidth
            label="Card"
            SelectProps={{
              native: true,
            }}
          >
            {CARD_OPTIONS.map((card) => (
              <option key={card.value} value={card.value}>
                {card.label}
              </option>
            ))}
          </TextField>

          <Button
            size="small"
            color="inherit"
            startIcon={<Iconify icon="carbon:add" />}
            onClick={onOpen}
            sx={{ my: 3 }}
          >
            Add new card
          </Button>
        </Stack>
      )}
    </Box>
  );
}

OptionItem.propTypes = {
  isCredit: PropTypes.bool,
  onOpen: PropTypes.func,
  option: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  }),
  selected: PropTypes.bool,
};
