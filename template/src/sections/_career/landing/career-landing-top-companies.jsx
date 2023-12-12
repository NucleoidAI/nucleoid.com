import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import Image from 'src/components/image';
import TextMaxLine from 'src/components/text-max-line';
import Carousel, { useCarousel, CarouselArrows } from 'src/components/carousel';

// ----------------------------------------------------------------------

export default function CareerLandingTopCompanies({ companies }) {
  const theme = useTheme();

  const carousel = useCarousel({
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: theme.breakpoints.values.lg,
        settings: { slidesToShow: 4 },
      },
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

  return (
    <Box
      sx={{
        pt: { xs: 10, md: 15 },
        overflow: 'hidden',
        bgcolor: 'background.neutral',
      }}
    >
      <Container>
        <Typography variant="h2" sx={{ textAlign: 'center' }}>
          Top Companies
        </Typography>

        <Box sx={{ position: 'relative' }}>
          <CarouselArrows
            onNext={carousel.onNext}
            onPrev={carousel.onPrev}
            leftButtonProps={{ sx: { left: { xs: 0, md: -40 } } }}
            rightButtonProps={{ sx: { right: { xs: 0, md: -40 } } }}
          >
            <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
              {companies.map((company) => (
                <Box
                  key={company.id}
                  sx={{
                    px: 2,
                    py: { xs: 8, md: 10 },
                  }}
                >
                  <CompanyItem company={company} />
                </Box>
              ))}
            </Carousel>
          </CarouselArrows>
        </Box>
      </Container>
    </Box>
  );
}

CareerLandingTopCompanies.propTypes = {
  companies: PropTypes.array,
};

// ----------------------------------------------------------------------

function CompanyItem({ company }) {
  return (
    <Link component={RouterLink} href={paths.career.jobs} color="inherit" underline="none">
      <Box
        sx={{
          py: 5,
          px: 3,
          borderRadius: 2,
          cursor: 'pointer',
          textAlign: 'center',
          position: 'relative',
          transition: (theme) =>
            theme.transitions.create('all', {
              duration: theme.transitions.duration.enteringScreen,
            }),
          '&:hover': {
            bgcolor: 'background.paper',
            boxShadow: (theme) => theme.customShadows.z24,
          },
        }}
      >
        <Image
          alt={company.name}
          src={company.logo}
          sx={{
            mx: 'auto',
            width: 56,
            height: 56,
            borderRadius: 1,
          }}
        />
        <Typography variant="body2" sx={{ color: 'text.disabled', mt: 2.5, mb: 0.5 }}>
          {company.totalJobs} jobs
        </Typography>

        <TextMaxLine variant="subtitle2" persistent>
          {company.name}
        </TextMaxLine>
      </Box>
    </Link>
  );
}

CompanyItem.propTypes = {
  company: PropTypes.shape({
    logo: PropTypes.string,
    name: PropTypes.string,
    totalJobs: PropTypes.number,
  }),
};
