import Fab from '@mui/material/Fab';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, styled, useTheme } from '@mui/material/styles';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

const StyledTypography = styled(Typography)(({ theme }) => ({
  maxWidth: 564,
  margin: 'auto',
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    left: 0,
    right: 0,
    zIndex: 9,
    position: 'absolute',
    color: theme.palette.common.white,
  },
}));

// ----------------------------------------------------------------------

export default function MarketingAboutOurVision() {
  const theme = useTheme();

  return (
    <Container>
      <Stack alignItems="center" justifyContent="center" sx={{ position: 'relative' }}>
        <Typography
          variant="h2"
          sx={{
            mb: 5,
            textAlign: 'center',
            top: { md: 80 },
            left: { md: 0 },
            right: { md: 0 },
            zIndex: { md: 9 },
            position: { md: 'absolute' },
            color: { md: 'common.white' },
          }}
        >
          Our Vision
        </Typography>

        <Stack
          alignItems="center"
          justifyContent="center"
          sx={{
            position: 'relative',
            width: 1,
            borderRadius: 2,
            overflow: 'hidden',
          }}
        >
          <Fab
            color="primary"
            sx={{
              zIndex: 9,
              position: 'absolute',
            }}
          >
            <Iconify icon="carbon:play" width={24} />
          </Fab>

          <Image
            alt="hero"
            src="/assets/images/marketing/marketing_post_01.jpg"
            ratio="16/9"
            overlay={`linear-gradient(to bottom, ${alpha(theme.palette.common.black, 0)} 0%, ${
              theme.palette.common.black
            } 100%)`}
          />
        </Stack>

        <StyledTypography
          variant="h5"
          sx={{
            mt: 5,
            bottom: { md: 80 },
            opacity: { md: 0.72 },
          }}
        >
          Our vision offering the best product nulla vehicula tortor scelerisque ultrices malesuada.
        </StyledTypography>
      </Stack>
    </Container>
  );
}
