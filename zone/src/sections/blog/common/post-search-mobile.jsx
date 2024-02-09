import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

import { useResponsive } from 'src/hooks/use-responsive';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function PostSearchMobile() {
  const mdDown = useResponsive('down', 'md');

  return (
    <>
      {mdDown && (
        <Box sx={{ px: 2, pb: 3 }}>
          <TextField
            fullWidth
            hiddenLabel
            placeholder="Search..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Iconify icon="carbon:search" width={24} sx={{ color: 'text.disabled' }} />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      )}
    </>
  );
}
