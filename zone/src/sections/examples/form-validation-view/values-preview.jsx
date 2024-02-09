import { useFormContext } from 'react-hook-form';

import Stack from '@mui/material/Stack';
import Portal from '@mui/material/Portal';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { useResponsive } from 'src/hooks/use-responsive';

import { bgBlur } from 'src/theme/css';

// ----------------------------------------------------------------------

export default function ValuesPreview() {
  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');

  const {
    watch,
    formState: { errors },
  } = useFormContext();

  const values = watch();

  if (!mdUp) {
    return null;
  }

  return (
    <Portal>
      <Stack
        sx={{
          p: 3,
          top: 0,
          right: 0,
          height: 1,
          width: 280,
          position: 'fixed',
          overflowX: 'auto',
          color: 'common.white',
          zIndex: theme.zIndex.drawer,
          ...bgBlur({ color: theme.palette.grey[900] }),
        }}
      >
        <Typography variant="overline" sx={{ mb: 2, color: 'success.light' }}>
          Values
        </Typography>

        {Object.keys(values).map((value) => (
          <Stack key={value} sx={{ typography: 'caption', mt: 0.5 }}>
            <Typography variant="body2" sx={{ color: 'warning.main' }}>
              {value} :
            </Typography>

            {parseValue(values, value)}
          </Stack>
        ))}

        <Divider sx={{ my: 2 }} />

        <Typography variant="overline" sx={{ mb: 2, color: 'error.light' }}>
          Errors
        </Typography>

        <Typography variant="caption" sx={{ color: 'error.light' }}>
          {JSON.stringify(Object.keys(errors), null, 2)}
        </Typography>
      </Stack>
    </Portal>
  );
}

// ----------------------------------------------------------------------

function parseValue(values, value) {
  return JSON.stringify(values[value]) || '---';
}
