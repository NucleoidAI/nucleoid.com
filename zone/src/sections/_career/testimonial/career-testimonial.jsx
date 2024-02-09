import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { useResponsive } from 'src/hooks/use-responsive';

import Carousel, { useCarousel, CarouselDots, CarouselArrows } from 'src/components/carousel';

import TestimonialItem from './career-testimonial-item';

// ----------------------------------------------------------------------

export default function CareerTestimonial({ testimonials }) {
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
    <Box
      sx={{
        bgcolor: 'background.neutral',
        py: { xs: 10, md: 15 },
      }}
    >
      <Container>
        <Grid container spacing={3} justifyContent="center">
          <Grid xs={12} md={6}>
            <Typography variant="h2" sx={{ mb: 5, textAlign: 'center' }}>
              What Our Customer Say
            </Typography>

            <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
              {testimonials.map((testimonial) => (
                <TestimonialItem key={testimonial.id} testimonial={testimonial} />
              ))}
            </Carousel>
          </Grid>
        </Grid>

        {mdUp && (
          <CarouselArrows
            spacing={2}
            justifyContent="center"
            onNext={carousel.onNext}
            onPrev={carousel.onPrev}
            sx={{ mt: 10, width: 1 }}
          />
        )}
      </Container>
    </Box>
  );
}

CareerTestimonial.propTypes = {
  testimonials: PropTypes.array,
};
