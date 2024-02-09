import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Pagination, { paginationClasses } from '@mui/material/Pagination';

import TravelTourItem from './travel-tour-item';
import TravelTourItemSkeleton from './travel-tour-item-skeleton';

// ----------------------------------------------------------------------

export default function TravelTourList({ tours, loading }) {
  return (
    <>
      <Box
        sx={{
          columnGap: 3,
          display: 'grid',
          rowGap: { xs: 4, md: 5 },
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          },
        }}
      >
        {(loading ? [...Array(12)] : tours).map((tour, index) =>
          tour ? (
            <TravelTourItem key={tour.id} tour={tour} />
          ) : (
            <TravelTourItemSkeleton key={index} />
          )
        )}
      </Box>

      <Pagination
        count={10}
        color="primary"
        sx={{
          my: 10,
          [`& .${paginationClasses.ul}`]: {
            justifyContent: 'center',
          },
        }}
      />
    </>
  );
}

TravelTourList.propTypes = {
  loading: PropTypes.bool,
  tours: PropTypes.array,
};
