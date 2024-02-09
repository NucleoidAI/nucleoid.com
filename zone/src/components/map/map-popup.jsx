import PropTypes from 'prop-types';
import { useCallback } from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function MapPopup({ office, onClose, lat, lng }) {
  const handleClose = useCallback(
    (event) => {
      event.stopPropagation();
      onClose();
      console.log('lat-lng', lat, lng);
    },
    [lat, lng, onClose]
  );

  return (
    <Paper
      sx={{
        width: 220,
        overflow: 'hidden',
        borderRadius: 1.5,
        mt: 2,
        ml: 2,
        position: 'relative',
      }}
    >
      <Box sx={{ position: 'absolute', right: 4, top: 4, zIndex: 9 }}>
        <IconButton size="small" onClick={handleClose}>
          <Iconify
            icon="carbon:close-filled"
            sx={{
              opacity: 0.48,
              color: 'common.white',
              '&:hover': {
                opacity: 1,
              },
              ...(!office.photo && {
                color: 'text.disabled',
              }),
            }}
          />
        </IconButton>
      </Box>

      {office.photo && <Image alt="photo" src={office.photo} ratio="4/3" />}

      <Stack
        spacing={1}
        sx={{
          p: 1.5,
          wordBreak: 'break-all',
          ...(!office.photo && {
            p: 2,
            pr: 3.5,
          }),
        }}
      >
        {office.country && <Typography variant="subtitle2">{office.country}</Typography>}

        {office.address && (
          <Typography component="p" variant="caption">
            {office.address}
          </Typography>
        )}

        {office.email && (
          <Stack direction="row" alignItems="flex-start" sx={{ typography: 'caption' }}>
            <Iconify icon="carbon:email" width={18} sx={{ mr: 0.5 }} />
            {office.email}
          </Stack>
        )}

        {office.phoneNumber && (
          <Stack direction="row" alignItems="flex-start" sx={{ typography: 'caption' }}>
            <Iconify icon="carbon:phone" width={18} sx={{ mr: 0.5 }} />
            {office.phoneNumber}
          </Stack>
        )}
      </Stack>
    </Paper>
  );
}

MapPopup.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number,
  office: PropTypes.shape({
    address: PropTypes.string,
    country: PropTypes.string,
    email: PropTypes.string,
    phoneNumber: PropTypes.string,
    photo: PropTypes.string,
  }),
  onClose: PropTypes.func,
};
