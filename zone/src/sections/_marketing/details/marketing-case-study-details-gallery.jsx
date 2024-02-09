import { useEffect } from 'react';
import { m } from 'framer-motion';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import Image from 'src/components/image';
import { varHover, varTranHover } from 'src/components/animate';
import Lightbox, { useLightbox } from 'src/components/lightbox';
import Carousel, { useCarousel, CarouselArrows } from 'src/components/carousel';

// ----------------------------------------------------------------------

export default function MarketingCaseStudyDetailsGallery({ images }) {
  const theme = useTheme();

  const slides = images.map((slide) => ({
    src: slide,
  }));

  const lightbox = useLightbox(slides);

  const carousel = useCarousel({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    responsive: [
      {
        breakpoint: theme.breakpoints.values.md,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: { slidesToShow: 1 },
      },
    ],
  });

  useEffect(() => {
    if (lightbox.open) {
      carousel.onTogo(lightbox.selected);
    }
  }, [carousel, lightbox.open, lightbox.selected]);

  return (
    <>
      <Stack direction="row" justifyContent="space-between" sx={{ mt: 3, mb: 5 }}>
        <Typography variant="h4">Gallery</Typography>
        <CarouselArrows spacing={2} onNext={carousel.onNext} onPrev={carousel.onPrev} />
      </Stack>

      <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
        {slides.map((slide) => (
          <Box
            key={slide.src}
            component={m.div}
            whileHover="hover"
            sx={{ px: 1 }}
            onClick={() => lightbox.onOpen(slide.src)}
          >
            <Box sx={{ borderRadius: 2, overflow: 'hidden', cursor: 'pointer' }}>
              <m.div variants={varHover(1.25)} transition={varTranHover()}>
                <Image alt={slide.src} src={slide.src} ratio="4/3" />
              </m.div>
            </Box>
          </Box>
        ))}
      </Carousel>

      <Lightbox
        index={lightbox.selected}
        slides={slides}
        open={lightbox.open}
        close={lightbox.onClose}
        onGetCurrentIndex={(index) => lightbox.setSelected(index)}
      />
    </>
  );
}

MarketingCaseStudyDetailsGallery.propTypes = {
  images: PropTypes.array,
};
