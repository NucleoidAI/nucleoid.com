import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { paths } from 'src/routes/paths';

import { bgGradient } from 'src/theme/css';

// ----------------------------------------------------------------------

export default function HomeAdvertisement() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        ...bgGradient({
          imgUrl: '/assets/images/home/advertisement.jpg',
          color: alpha(theme.palette.grey[900], 0.8),
        }),
        py: { xs: 10, md: 35 },
      }}
    >
      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{
          p: 2.5,
          zIndex: 9,
          textAlign: 'center',
          position: 'relative',
          color: 'common.white',
        }}
      >
        <Typography variant="h1" component="h2" sx={{ opacity: 0.48 }}>
          Start Now
        </Typography>

        <Typography variant="h1" component="h2" sx={{ mb: 8 }}>
          Create Your
          <br /> Website Today
        </Typography>

        <Button
          size="large"
          variant="contained"
          target="_blank"
          rel="noopener"
          color="primary"
          href={paths.zoneStore}
        >
          Purchase Now
        </Button>
      </Stack>
    </Box>
  );
}
