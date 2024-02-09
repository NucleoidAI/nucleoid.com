import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { alpha, useTheme } from '@mui/material/styles';

import { bgGradient } from 'src/theme/css';
import { _productsCarousel } from 'src/_mock';

import Carousel, { useCarousel, CarouselDots } from 'src/components/carousel';

import EcommerceProductItemHero from '../product/item/ecommerce-product-item-hero';

// ----------------------------------------------------------------------

export default function EcommerceLandingHero() {
  const theme = useTheme();

  const carousel = useCarousel({
    fade: true,
    speed: 100,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    ...CarouselDots({
      rounded: true,
      sx: {
        left: 0,
        right: 0,
        zIndex: 9,
        bottom: 40,
        mx: 'auto',
        position: 'absolute',
      },
    }),
  });

  return (
    <Container
      sx={{
        pt: { xs: 5, md: 8 },
      }}
    >
      <Box
        sx={{
          ...bgGradient({
            color: alpha(theme.palette.background.default, 0.9),
            imgUrl: '/assets/background/overlay_1.jpg',
          }),
          borderRadius: 3,
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
          {_productsCarousel.map((product) => (
            <EcommerceProductItemHero key={product.id} product={product} />
          ))}
        </Carousel>
      </Box>
    </Container>
  );
}
