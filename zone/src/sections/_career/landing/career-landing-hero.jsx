import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { inputClasses } from '@mui/material/Input';
import { alpha, useTheme } from '@mui/material/styles';
import { filledInputClasses } from '@mui/material/FilledInput';

import { useResponsive } from 'src/hooks/use-responsive';

import { fShortenNumber } from 'src/utils/format-number';

import { _brands } from 'src/_mock';
import { bgGradient } from 'src/theme/css';
import CareerHeroIllustration from 'src/assets/illustrations/career-hero-illustration';

import Iconify from 'src/components/iconify';
import SvgColor from 'src/components/svg-color';

import FilterKeyword from '../filters/filter-keyword';
import FilterLocation from '../filters/filter-location';

// ----------------------------------------------------------------------

export default function CareerLandingHero() {
  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');

  const [filters, setFilters] = useState({
    filterKeyword: null,
    filterLocation: null,
  });

  const handleChangeKeyword = useCallback(
    (newValue) => {
      setFilters({
        ...filters,
        filterKeyword: newValue,
      });
    },
    [filters]
  );

  const handleChangeLocation = useCallback(
    (newValue) => {
      setFilters({
        ...filters,
        filterLocation: newValue,
      });
    },
    [filters]
  );

  const renderFilters = (
    <Stack
      spacing={{ xs: 1, md: 0 }}
      direction={{ xs: 'column', md: 'row' }}
      sx={{
        p: 1,
        borderRadius: 1,
        bgcolor: 'common.white',
        alignItems: { md: 'center' },
        justifyContent: { md: 'center' },
      }}
    >
      <FilterKeyword
        filterKeyword={filters.filterKeyword}
        onChangeKeyword={handleChangeKeyword}
        sx={{
          bgcolor: 'transparent',
          [`&:hover, &.${inputClasses.focused}`]: {
            bgcolor: 'transparent',
          },
        }}
      />

      {mdUp && <Divider orientation="vertical" sx={{ height: 24 }} />}

      <FilterLocation
        filterLocation={filters.filterLocation}
        onChangeLocation={handleChangeLocation}
        sx={{
          [`& .${filledInputClasses.root}`]: {
            bgcolor: 'transparent',
          },
        }}
      />

      <Button
        size="large"
        variant="contained"
        color="primary"
        sx={{
          px: 0,
          minWidth: { xs: 1, md: 48 },
        }}
      >
        <Iconify icon="carbon:search" width={24} />
      </Button>
    </Stack>
  );

  const renderSummary = (
    <Stack
      spacing={3}
      direction={{ xs: 'column', md: 'row' }}
      divider={<Divider orientation="vertical" flexItem sx={{ borderStyle: 'dashed' }} />}
      sx={{ pt: { md: 5 } }}
    >
      <Stack
        spacing={{ md: 3 }}
        direction="row"
        divider={<Divider orientation="vertical" flexItem sx={{ borderStyle: 'dashed' }} />}
      >
        <Stack spacing={0.5} sx={{ color: 'common.white', width: { xs: 0.5, md: 'auto' } }}>
          <Typography variant="h4">{fShortenNumber(2000000)}+</Typography>
          <Typography variant="body2" sx={{ opacity: 0.48 }}>
            Jobs
          </Typography>
        </Stack>

        <Stack spacing={0.5} sx={{ color: 'common.white', width: { xs: 0.5, md: 'auto' } }}>
          <Typography variant="h4">{fShortenNumber(500000)}+</Typography>
          <Typography variant="body2" sx={{ opacity: 0.48 }}>
            Successful Hiring
          </Typography>
        </Stack>
      </Stack>

      <Stack
        spacing={{ md: 3 }}
        direction="row"
        divider={<Divider orientation="vertical" flexItem sx={{ borderStyle: 'dashed' }} />}
      >
        <Stack spacing={0.5} sx={{ color: 'common.white', width: { xs: 0.5, md: 'auto' } }}>
          <Typography variant="h4">{fShortenNumber(250000)}+</Typography>
          <Typography variant="body2" sx={{ opacity: 0.48 }}>
            Partners
          </Typography>
        </Stack>

        <Stack spacing={0.5} sx={{ color: 'common.white', width: { xs: 0.5, md: 'auto' } }}>
          <Typography variant="h4">{fShortenNumber(156000)}+</Typography>
          <Typography variant="body2" sx={{ opacity: 0.48 }}>
            Employee
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );

  const renderBrands = (
    <Stack
      flexWrap="wrap"
      direction="row"
      alignItems="center"
      sx={{
        mt: { md: 1 },
      }}
    >
      {_brands.slice(0, 4).map((brand) => (
        <Box
          key={brand.id}
          sx={{
            lineHeight: 0,
            my: { xs: 1.5, md: 0.5 },
            mr: { md: 3 },
            width: { xs: 0.5, md: 'auto' },
            '&:last-of-type': {
              mr: 0,
            },
          }}
        >
          <SvgColor
            src={brand.image}
            sx={{
              width: 94,
              height: 28,
              color: 'text.disabled',
            }}
          />
        </Box>
      ))}
    </Stack>
  );

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.grey[900], 0.8),
          imgUrl: '/assets/background/overlay_2.jpg',
        }),
        pt: 15,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        pb: { xs: 10, md: 15 },
        display: { md: 'flex' },
        minHeight: { md: '100vh' },
      }}
    >
      <Container>
        <Grid container spacing={3} justifyContent="space-between">
          <Grid xs={12} md={6} lg={5}>
            <Stack
              spacing={5}
              sx={{
                textAlign: { xs: 'center', md: 'unset' },
              }}
            >
              <Stack spacing={3}>
                <Typography variant="h1" sx={{ color: 'common.white' }}>
                  Get The
                  <Box component="span" sx={{ color: 'primary.main' }}>
                    {` Career `}
                  </Box>
                  You Deserve
                </Typography>

                <Typography sx={{ color: 'grey.500' }}>
                  Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis
                  venenatis ante odio sit amet eros.
                </Typography>
              </Stack>

              {renderFilters}

              {renderBrands}

              {renderSummary}
            </Stack>
          </Grid>

          {mdUp && (
            <Grid xs={12} md={6} lg={6}>
              <CareerHeroIllustration />
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
}
