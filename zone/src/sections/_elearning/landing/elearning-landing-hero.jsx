import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { useBoolean } from 'src/hooks/use-boolean';
import { useResponsive } from 'src/hooks/use-responsive';

import { fShortenNumber } from 'src/utils/format-number';

import { _mock } from 'src/_mock';
import { bgGradient } from 'src/theme/css';
import ElearningHeroIllustration from 'src/assets/illustrations/elearning-hero-illustration';

import Iconify from 'src/components/iconify';
import { PlayerDialog } from 'src/components/player';

// ----------------------------------------------------------------------

const SUMMARY = [
  { value: 14000, label: 'Learners', color: 'warning' },
  { value: 1050, label: 'Courses', color: 'error' },
  { value: 59000, label: 'Graduates', color: 'success' },
];

// ----------------------------------------------------------------------

export default function ElearningLandingHero() {
  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');

  const videoOpen = useBoolean();

  return (
    <>
      <Box
        sx={{
          ...bgGradient({
            color: alpha(theme.palette.background.default, 0.9),
            imgUrl: '/assets/background/overlay_1.jpg',
          }),
          overflow: 'hidden',
        }}
      >
        <Container
          sx={{
            py: 15,
            display: { md: 'flex' },
            alignItems: { md: 'center' },
            height: { md: `100vh` },
          }}
        >
          <Grid container spacing={3}>
            <Grid xs={12} md={6} lg={5}>
              <Stack
                sx={{
                  textAlign: { xs: 'center', md: 'unset' },
                }}
              >
                <Typography variant="h1">
                  Free
                  <Box component="span" sx={{ color: 'text.disabled' }}>
                    {` Online `}
                  </Box>
                  <Box component="span" sx={{ color: 'primary.main', textDecoration: 'underline' }}>
                    {` Courses `}
                  </Box>
                  From The Experts
                </Typography>

                <Typography sx={{ color: 'text.secondary', mt: 3, mb: 5 }}>
                  Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis
                  venenatis ante odio sit amet eros.
                </Typography>

                <Stack spacing={3} alignItems="center" direction={{ xs: 'column', md: 'row' }}>
                  <Button color="inherit" size="large" variant="contained">
                    Ready Start
                  </Button>

                  <Stack direction="row" alignItems="center" sx={{ typography: 'h6' }}>
                    <Fab size="medium" color="info" onClick={videoOpen.onTrue} sx={{ mr: 1 }}>
                      <Iconify width={24} icon="carbon:play" />
                    </Fab>
                    Watch Video
                  </Stack>
                </Stack>

                <Divider sx={{ borderStyle: 'dashed', mt: 8, mb: 6 }} />

                <Stack
                  direction="row"
                  spacing={{ xs: 3, sm: 10 }}
                  justifyContent={{ xs: 'center', md: 'unset' }}
                >
                  {SUMMARY.map((item) => (
                    <Stack key={item.value} spacing={0.5} sx={{ position: 'relative' }}>
                      <Box
                        sx={{
                          top: 8,
                          left: -4,
                          width: 24,
                          height: 24,
                          opacity: 0.24,
                          borderRadius: '50%',
                          position: 'absolute',
                          bgcolor: `${item.color}.main`,
                        }}
                      />
                      <Typography variant="h3">{fShortenNumber(item.value)}+</Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {item.label}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </Stack>
            </Grid>

            {mdUp && (
              <Grid xs={12} md={6} lg={7}>
                <ElearningHeroIllustration />
              </Grid>
            )}
          </Grid>
        </Container>
      </Box>

      <PlayerDialog open={videoOpen.value} onClose={videoOpen.onFalse} videoPath={_mock.video(0)} />
    </>
  );
}
