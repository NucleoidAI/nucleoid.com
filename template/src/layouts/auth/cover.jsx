import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { useResponsive } from 'src/hooks/use-responsive';

import Image from 'src/components/image';
import Carousel, { useCarousel, CarouselDots } from 'src/components/carousel';

// ----------------------------------------------------------------------

export default function AuthCoverLayout({ title, images, children }) {
  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');

  const carousel = useCarousel({
    autoplaySpeed: 5000,
    fade: true,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    ...CarouselDots({
      rounded: true,
      sx: {
        left: 0,
        right: 0,
        zIndex: 99,
        bottom: 80,
        mx: 'auto',
        position: 'absolute',
      },
    }),
  });

  const renderCarousel = (
    <Carousel {...carousel.carouselSettings}>
      {images.map((img) => (
        <Image
          key={img}
          alt={img}
          src={img}
          overlay={`linear-gradient(to bottom, ${alpha(theme.palette.common.black, 0)} 0%, ${
            theme.palette.common.black
          } 75%)`}
          sx={{
            '& img': { minHeight: '100vh', width: 1 },
          }}
        />
      ))}
    </Carousel>
  );

  return (
    <Box sx={{ minHeight: 1, display: 'flex' }}>
      <Box
        sx={{
          mx: 'auto',
          flexShrink: 0,
          py: { xs: 5, md: 8 },
          px: { xs: 2, md: 10 },
          width: { xs: 1, md: 480 },
        }}
      >
        {children}
      </Box>

      {mdUp && (
        <Box
          sx={{
            flexGrow: 1,
            overflow: 'hidden',
            position: 'relative',
            bgcolor: 'common.black',
          }}
        >
          <Typography
            variant="h2"
            sx={{
              p: 10,
              left: 0,
              bottom: 80,
              width: 1,
              zIndex: 10,
              textAlign: 'center',
              position: 'absolute',
              color: 'common.white',
              whiteSpace: 'pre-line',
            }}
          >
            {title}
          </Typography>

          {renderCarousel}
        </Box>
      )}
    </Box>
  );
}

AuthCoverLayout.propTypes = {
  children: PropTypes.node,
  images: PropTypes.array,
  title: PropTypes.string,
};
