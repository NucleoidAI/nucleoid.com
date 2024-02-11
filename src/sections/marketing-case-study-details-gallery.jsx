import { useEffect } from "react";
import { m } from "framer-motion";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

import Image from "src/components/image";
import { varHover, varTranHover } from "src/components/animate";
import Lightbox, { useLightbox } from "src/components/lightbox";
import Carousel, { useCarousel, CarouselArrows } from "src/components/carousel";

// ----------------------------------------------------------------------

function shuffleArray(array) {
  // eslint-disable-next-line no-plusplus
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const images = shuffleArray([
  "https://cdn.nucleoid.com/media/review1.png",
  "https://cdn.nucleoid.com/media/review2.png",
  "https://cdn.nucleoid.com/media/review3.png",
  "https://cdn.nucleoid.com/media/review4.png",
  "https://cdn.nucleoid.com/media/review5.png",
  "https://cdn.nucleoid.com/media/review6.png",
  "https://cdn.nucleoid.com/media/review7.png",
  "https://cdn.nucleoid.com/media/review8.png",
]);

export default function MarketingCaseStudyDetailsGallery() {
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
    <Container sx={{ mt: 10, mb: 10 }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ mt: 3, mb: 5 }}
      >
        <Typography variant="h4">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </Typography>
        <Typography variant="h4">Join the Community</Typography>
        <CarouselArrows
          spacing={2}
          onNext={carousel.onNext}
          onPrev={carousel.onPrev}
        />
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
            <Box
              sx={{ borderRadius: 0.5, overflow: "hidden", cursor: "pointer" }}
            >
              <m.div variants={varHover(1)} transition={varTranHover()}>
                <Image alt={slide.src} src={slide.src} />
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
    </Container>
  );
}

MarketingCaseStudyDetailsGallery.propTypes = {
  images: PropTypes.array,
};
