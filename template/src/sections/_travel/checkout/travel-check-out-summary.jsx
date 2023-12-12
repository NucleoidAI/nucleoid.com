import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import { inputBaseClasses } from '@mui/material/InputBase';
import { inputAdornmentClasses } from '@mui/material/InputAdornment';

import { useResponsive } from 'src/hooks/use-responsive';

import { fCurrency, fShortenNumber } from 'src/utils/format-number';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import TextMaxLine from 'src/components/text-max-line';

import FilterTime from '../filters/filter-time';
import FilterGuests from '../filters/filter-guests';

// ----------------------------------------------------------------------

export default function TravelCheckOutSummary({
  tour,
  guests,
  departureDay,
  isSubmitting,
  onDecreaseGuests,
  onIncrementGuests,
  onChangeDepartureDay,
}) {
  const smUp = useResponsive('up', 'sm');

  const { coverUrl, slug, ratingNumber, totalReviews, price, tourGuide } = tour;

  return (
    <Card>
      <Box
        sx={{
          p: 4,
          pb: 0,
          gap: 3,
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(1, 1fr)',
            lg: 'repeat(2, 1fr)',
          },
        }}
      >
        <Image alt={slug} src={coverUrl} ratio="1/1" sx={{ borderRadius: 2 }} />

        <Stack>
          <TextMaxLine variant="h5" sx={{ mb: 2 }}>
            {slug}
          </TextMaxLine>

          <Stack spacing={0.5} direction="row" alignItems="center">
            <Iconify icon="carbon:star-filled" sx={{ color: 'warning.main' }} />

            <Box sx={{ typography: 'h6' }}>
              {Number.isInteger(ratingNumber) ? `${ratingNumber}.0` : ratingNumber}
            </Box>

            {totalReviews && (
              <Link variant="body2" sx={{ color: 'text.secondary' }}>
                ({fShortenNumber(totalReviews)} reviews)
              </Link>
            )}
          </Stack>

          <Divider sx={{ borderStyle: 'dashed', my: 2.5 }} />

          <Stack direction="row" alignItems="center" spacing={1.5}>
            <Avatar src={tourGuide.avatarUrl} />

            <div>
              <Typography variant="body2" sx={{ color: 'text.disabled' }}>
                Tour guide by
              </Typography>

              <Typography variant="subtitle2">{tourGuide.name}</Typography>
            </div>
          </Stack>
        </Stack>
      </Box>

      <Stack sx={{ p: 4, pb: 3 }}>
        <Stack
          spacing={2.5}
          direction={{ xs: 'column', sm: 'row' }}
          sx={{
            p: 2.5,
            borderRadius: 2,
            color: 'text.disabled',
            bgcolor: 'background.neutral',
          }}
        >
          <Stack direction="row" spacing={1.5} sx={{ width: 1 }}>
            <Iconify icon="carbon:events" width={24} />

            <Stack spacing={0.5}>
              <Typography variant="caption">Departure day</Typography>

              <FilterTime
                departureDay={departureDay}
                onChangeDepartureDay={onChangeDepartureDay}
                sx={{
                  [`& .${inputBaseClasses.input}`]: {
                    typography: 'subtitle1',
                  },
                  [`& .${inputAdornmentClasses.root}`]: {
                    display: 'none',
                  },
                }}
              />
            </Stack>
          </Stack>

          {smUp && <Divider flexItem orientation="vertical" sx={{ borderStyle: 'dashed' }} />}

          <Stack direction="row" spacing={1.5} sx={{ width: 1 }}>
            <Iconify icon="carbon:calendar" width={24} />

            <Stack spacing={0.5}>
              <Typography variant="caption">Guests</Typography>

              <FilterGuests
                startAdornment={null}
                guests={guests}
                onDecreaseGuests={onDecreaseGuests}
                onIncrementGuests={onIncrementGuests}
                sx={{ height: 'unset' }}
              />
            </Stack>
          </Stack>
        </Stack>

        <Stack
          spacing={1}
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ mt: 3, mb: 2 }}
        >
          <Typography variant="body2" sx={{ color: 'text.disabled' }}>
            Service charge
          </Typography>
          <Typography variant="body2">{fCurrency(price)}</Typography>
        </Stack>

        <Stack spacing={1} direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="body2" sx={{ color: 'text.disabled' }}>
            Discount
          </Typography>
          <Typography variant="body2">-</Typography>
        </Stack>
      </Stack>

      <Divider sx={{ borderStyle: 'dashed' }} />

      <Stack spacing={3} sx={{ p: 3 }}>
        <Stack spacing={1} direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="h5">Total</Typography>
          <Typography variant="h5">{fCurrency(price)}</Typography>
        </Stack>

        <LoadingButton
          type="submit"
          size="large"
          variant="contained"
          color="inherit"
          loading={isSubmitting}
        >
          Complete Booking
        </LoadingButton>
      </Stack>
    </Card>
  );
}

TravelCheckOutSummary.propTypes = {
  isSubmitting: PropTypes.bool,
  onDecreaseGuests: PropTypes.func,
  onIncrementGuests: PropTypes.func,
  onChangeDepartureDay: PropTypes.func,
  departureDay: PropTypes.instanceOf(Date),
  guests: PropTypes.shape({
    adults: PropTypes.number,
    children: PropTypes.number,
  }),
  tour: PropTypes.shape({
    slug: PropTypes.string,
    price: PropTypes.number,
    coverUrl: PropTypes.string,
    ratingNumber: PropTypes.number,
    totalReviews: PropTypes.number,
    tourGuide: PropTypes.shape({
      name: PropTypes.string,
      avatarUrl: PropTypes.string,
    }),
  }),
};
