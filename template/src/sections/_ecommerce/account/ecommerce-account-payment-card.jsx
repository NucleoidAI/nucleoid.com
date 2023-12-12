import PropTypes from 'prop-types';
import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Popover from '@mui/material/Popover';
import Divider from '@mui/material/Divider';
import { alpha } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { useBoolean } from 'src/hooks/use-boolean';

import Label from 'src/components/label';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function EcommerceAccountPaymentCard({ card }) {
  const { value, label, cardNumber, cardHolder, expirationDate, isPrimary } = card;

  const [open, setOpen] = useState(null);

  const numberShow = useBoolean();

  const handleOpen = useCallback((event) => {
    setOpen(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(null);
  }, []);

  return (
    <>
      <Stack
        spacing={3}
        sx={{
          p: 3,
          pr: 1,
          borderRadius: 2,
          border: (theme) => `solid 1px ${alpha(theme.palette.grey[500], 0.24)}`,
        }}
      >
        <Stack direction="row" alignItems="center" sx={{ typography: 'subtitle1' }}>
          <Stack direction="row" alignItems="center" flexGrow={1}>
            <Box component="span">{label}</Box>

            {isPrimary && (
              <Label color="info" startIcon={<Iconify icon="carbon:star-filled" />} sx={{ ml: 1 }}>
                Primary
              </Label>
            )}
          </Stack>

          <Iconify
            icon={
              (value === 'visa' && 'logos:visa') ||
              (value === 'mastercard' && 'logos:mastercard') ||
              'logos:paypal'
            }
            width={24}
          />

          <IconButton onClick={handleOpen}>
            <Iconify icon="carbon:overflow-menu-vertical" />
          </IconButton>
        </Stack>

        <Stack spacing={1} direction="row" alignItems="center">
          <Typography variant="h6">
            {numberShow.value ? cardNumber : `**** **** **** ${cardNumber.slice(-4)}`}
          </Typography>
          <IconButton onClick={numberShow.onToggle}>
            <Iconify icon={numberShow.value ? 'carbon:view' : 'carbon:view-off'} />
          </IconButton>
        </Stack>

        <Box display="grid" gridTemplateColumns="repeat(2, 1fr)">
          <Stack spacing={0.5}>
            <Typography variant="caption" sx={{ color: 'text.disabled' }}>
              Card Holder
            </Typography>
            <Typography variant="subtitle2"> {cardHolder} </Typography>
          </Stack>
          <Stack spacing={0.5}>
            <Typography variant="caption" sx={{ color: 'text.disabled' }}>
              Expiry Date
            </Typography>
            <Typography variant="subtitle2"> {expirationDate} </Typography>
          </Stack>
        </Box>
      </Stack>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem disabled={isPrimary} onClick={handleClose}>
          <Iconify icon="carbon:star-filled" sx={{ mr: 1 }} /> Set primary payment
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <Iconify icon="carbon:edit" sx={{ mr: 1 }} /> Edit
        </MenuItem>

        <Divider sx={{ borderStyle: 'dashed', mt: 0.5 }} />

        <MenuItem onClick={handleClose} sx={{ color: 'error.main' }}>
          <Iconify icon="carbon:trash-can" sx={{ mr: 1 }} /> Delete
        </MenuItem>
      </Popover>
    </>
  );
}

EcommerceAccountPaymentCard.propTypes = {
  card: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
    isPrimary: PropTypes.bool,
    cardHolder: PropTypes.string,
    cardNumber: PropTypes.string,
    expirationDate: PropTypes.string,
  }),
};
