import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function PaymentNewCardForm({ onClose, ...other }) {
  return (
    <Dialog maxWidth="xs" onClose={onClose} {...other}>
      <DialogTitle> Add new card </DialogTitle>

      <DialogContent sx={{ overflow: 'unset' }}>
        <Stack spacing={2.5}>
          <TextField
            label="Card Number"
            placeholder="XXXX XXXX XXXX XXXX"
            InputLabelProps={{ shrink: true }}
          />

          <TextField
            label="Card Holder"
            placeholder="JOHN DOE"
            InputLabelProps={{ shrink: true }}
          />

          <Stack spacing={2} direction="row">
            <TextField
              fullWidth
              label="Expiration Date"
              placeholder="MM/YY"
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              fullWidth
              label="CVV/CVC"
              placeholder="***"
              InputLabelProps={{ shrink: true }}
            />
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            sx={{ typography: 'caption', color: 'text.disabled' }}
          >
            <Iconify icon="carbon:locked" sx={{ mr: 0.5 }} />
            Your transaction is secured with SSL encryption
          </Stack>
        </Stack>
      </DialogContent>

      <DialogActions>
        <Button color="inherit" variant="outlined" onClick={onClose}>
          Cancel
        </Button>

        <Button color="inherit" variant="contained" onClick={onClose}>
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
}

PaymentNewCardForm.propTypes = {
  onClose: PropTypes.func,
};
