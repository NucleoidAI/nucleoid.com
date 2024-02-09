import { m } from 'framer-motion';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';

import Image from 'src/components/image';
import { varTranHover } from 'src/components/animate';
import Lightbox, { useLightbox } from 'src/components/lightbox';

// ----------------------------------------------------------------------

export default function TravelTourDetailsGallery({ images }) {
  const slides = images.map((slide) => ({
    src: slide,
  }));

  const lightbox = useLightbox(slides);

  return (
    <>
      <Box
        sx={{
          gap: 1,
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
          },
          mb: { xs: 5, md: 10 },
        }}
      >
        <PhotoItem photo={slides[0].src} onOpenLightbox={() => lightbox.onOpen(slides[0].src)} />

        <Box
          sx={{
            gap: 1,
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
          }}
        >
          {slides.slice(1, 5).map((slide) => (
            <PhotoItem
              key={slide.src}
              photo={slide.src}
              onOpenLightbox={() => lightbox.onOpen(slide.src)}
            />
          ))}
        </Box>
      </Box>

      <Lightbox
        index={lightbox.selected}
        slides={slides}
        open={lightbox.open}
        close={lightbox.onClose}
      />
    </>
  );
}

TravelTourDetailsGallery.propTypes = {
  images: PropTypes.array,
};

// ----------------------------------------------------------------------

function PhotoItem({ photo, onOpenLightbox }) {
  return (
    <m.div
      whileHover="hover"
      variants={{
        hover: { opacity: 0.8 },
      }}
      transition={varTranHover()}
    >
      <Image
        alt="photo"
        src={photo}
        ratio="1/1"
        onClick={onOpenLightbox}
        sx={{ borderRadius: 2, cursor: 'pointer' }}
      />
    </m.div>
  );
}

PhotoItem.propTypes = {
  onOpenLightbox: PropTypes.func,
  photo: PropTypes.string,
};
