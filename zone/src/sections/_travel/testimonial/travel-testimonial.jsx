import PropTypes from 'prop-types';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { useResponsive } from 'src/hooks/use-responsive';

import Image from 'src/components/image';
import Carousel, { useCarousel, CarouselDots, CarouselArrows } from 'src/components/carousel';

import TestimonialItem from './travel-testimonial-item';

// ----------------------------------------------------------------------

export default function TravelTestimonial({ testimonials }) {
  const mdUp = useResponsive('up', 'md');

  const carousel = useCarousel({
    dots: !mdUp,
    slidesToShow: 1,
    slidesToScroll: 1,
    ...CarouselDots({
      sx: {
        mt: 8,
      },
    }),
  });

  return (
    <Container
      sx={{
        py: { xs: 10, md: 15 },
      }}
    >
      <Grid container spacing={3} alignItems="center">
        <Grid xs={12} md={6}>
          <Typography
            variant="h2"
            sx={{
              mb: 5,
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            What Our Customer Say
          </Typography>

          <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
            {testimonials.map((testimonial) => (
              <TestimonialItem key={testimonial.id} testimonial={testimonial} />
            ))}
          </Carousel>
        </Grid>

        {mdUp && (
          <Grid xs={12} md={6}>
            <Image
              alt="travel testimonial"
              src="/assets/images/travel/travel_testimonial.png"
              sx={{ maxWidth: 296, ml: 'auto' }}
            />
          </Grid>
        )}
      </Grid>

      {mdUp && (
        <CarouselArrows
          spacing={2}
          justifyContent={{ xs: 'center', md: 'unset' }}
          onNext={carousel.onNext}
          onPrev={carousel.onPrev}
          sx={{ mt: 10 }}
        />
      )}
    </Container>
  );
}

TravelTestimonial.propTypes = {
  testimonials: PropTypes.array,
};
