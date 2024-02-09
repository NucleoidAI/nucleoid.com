import { useRef } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { useResponsive } from 'src/hooks/use-responsive';
import { useBoundingClientRect } from 'src/hooks/use-bounding-client-rect';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const SUMMARY = [
  {
    title: 'Professional Tour Guides',
    description: 'Nunc nonummy metus. Donec elit libero',
    icon: '/assets/icons/ic_popularity.svg',
  },
  {
    title: 'Customer Satisfaction',
    description: 'Nunc nonummy metus. Donec elit libero',
    icon: '/assets/icons/ic_reputation.svg',
  },
  {
    title: 'Secure Payment',
    description: 'Nunc nonummy metus. Donec elit libero',
    icon: '/assets/icons/ic_secure_payment.svg',
  },
];

// ----------------------------------------------------------------------

export default function TravelLandingIntroduce() {
  const mdUp = useResponsive('up', 'md');

  const containerRef = useRef(null);

  const container = useBoundingClientRect(containerRef);

  const offsetLeft = container && container.left + 20;

  return (
    <Box
      sx={{
        pt: { xs: 10, md: 15 },
        pb: { xs: 5, md: 10 },
      }}
    >
      <Container ref={containerRef}>
        <Stack
          spacing={3}
          sx={{
            maxWidth: 480,
            mx: { xs: 'auto', md: 'unset' },
            textAlign: { xs: 'center', md: 'unset' },
          }}
        >
          <Typography variant="h2">Explore A Different Way To Travel</Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            Cras ultricies mi eu turpis hendrerit fringilla. Nulla consequat massa quis enim.
          </Typography>
        </Stack>
      </Container>

      <Box
        sx={{
          position: 'relative',
          my: { xs: 8, md: 10 },
          ml: { md: `${offsetLeft}px` },
        }}
      >
        <Card
          sx={{
            p: 5,
            top: 0,
            left: 0,
            zIndex: 9,
            m: { xs: 2, md: 5 },
            position: 'absolute',
            maxWidth: { sm: 360 },
            right: { xs: 0, sm: 'unset' },
            bottom: { xs: 0, sm: 'unset' },
            textAlign: { xs: 'center', sm: 'unset' },
            display: 'flex',
            alignItems: { xs: 'center', sm: 'unset' },
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            Device
          </Typography>

          <Typography variant="h4" sx={{ my: 3 }}>
            The More Important the Work
          </Typography>

          <Stack
            direction="row"
            alignItems="center"
            justifyContent={{ xs: 'center', sm: 'unset' }}
            sx={{
              cursor: 'pointer',
              color: 'primary.main',
              typography: 'subtitle1',
              '&:hover': { opacity: 0.72 },
            }}
          >
            <Iconify icon="carbon:play" width={24} sx={{ mr: 1 }} /> Watch Video
          </Stack>
        </Card>

        <Image
          alt="cover"
          src="/assets/images/travel/travel_post_hero.jpg"
          width={1600}
          height={mdUp ? 900 : 1600}
          ratio={mdUp ? '16/9' : '1/1'}
        />
      </Box>

      <Container sx={{ textAlign: 'center' }}>
        <Box
          sx={{
            display: 'grid',
            gap: { xs: 8, md: 3 },
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              md: 'repeat(3, 1fr)',
            },
          }}
        >
          {SUMMARY.map((value) => (
            <Stack key={value.title} spacing={2}>
              <SvgColor
                src={value.icon}
                sx={{
                  mb: 3,
                  width: 64,
                  height: 64,
                  mx: 'auto',
                  color: 'primary.main',
                }}
              />

              <Typography variant="h5">{value.title}</Typography>

              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {value.description}
              </Typography>
            </Stack>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
