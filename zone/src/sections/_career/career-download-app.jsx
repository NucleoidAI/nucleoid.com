import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, styled } from '@mui/material/styles';
import Button, { buttonClasses } from '@mui/material/Button';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

const StyledButton = styled(Button)(({ theme }) => ({
  flexShrink: 0,
  padding: '5px 12px',
  color: theme.palette.common.white,
  border: `solid 1px ${alpha(theme.palette.common.black, 0.24)}`,
  background: `linear-gradient(180deg, ${theme.palette.grey[900]} 0%, ${theme.palette.common.black} 100%)`,
  [`& .${buttonClasses.startIcon}`]: {
    marginLeft: 0,
  },
}));

// ----------------------------------------------------------------------

export default function CareerDownloadApp() {
  return (
    <Box
      sx={{
        py: 10,
        overflow: 'hidden',
        bgcolor: 'primary.lighter',
      }}
    >
      <Container>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          alignItems={{ xs: 'center', md: 'unset' }}
          justifyContent={{ md: 'space-between' }}
        >
          <Stack
            alignItems={{ xs: 'center', md: 'unset' }}
            sx={{
              maxWidth: 360,
              pt: { xs: 0, md: 8 },
              pb: { xs: 8, md: 0 },
              textAlign: { xs: 'center', md: 'unset' },
            }}
          >
            <Typography variant="h2"> Download App </Typography>

            <Typography sx={{ mt: 3, mb: 5, color: 'grey.800' }}>
              Now finding the new job just got even easier with our new app!
            </Typography>

            <AppStoreButton />
          </Stack>

          <Image
            disabledEffect
            alt="mobile app"
            src="/assets/images/career/career_download_app.png"
            sx={{
              maxWidth: 480,
            }}
          />
        </Stack>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

function AppStoreButton({ ...other }) {
  return (
    <Stack direction="row" flexWrap="wrap" spacing={2} {...other}>
      <StyledButton startIcon={<Iconify icon="ri:apple-fill" width={28} />}>
        <Stack alignItems="flex-start">
          <Typography variant="caption" sx={{ opacity: 0.72 }}>
            Download on the
          </Typography>

          <Typography variant="h6" sx={{ mt: -0.5 }}>
            Apple Store
          </Typography>
        </Stack>
      </StyledButton>

      <StyledButton startIcon={<Iconify icon="logos:google-play-icon" width={28} />}>
        <Stack alignItems="flex-start">
          <Typography variant="caption" sx={{ opacity: 0.72 }}>
            Download from
          </Typography>

          <Typography variant="h6" sx={{ mt: -0.5 }}>
            Google Play
          </Typography>
        </Stack>
      </StyledButton>
    </Stack>
  );
}
