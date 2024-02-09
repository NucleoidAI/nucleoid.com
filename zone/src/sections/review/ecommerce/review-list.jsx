import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Pagination, { paginationClasses } from '@mui/material/Pagination';

import ReviewItem from './review-item';

// ----------------------------------------------------------------------

export default function ReviewList({ reviews }) {
  return (
    <Box sx={{ pt: 5 }}>
      {reviews.map((review) => (
        <ReviewItem
          key={review.id}
          name={review.name}
          avatarUrl={review.avatarUrl}
          createdAt={review.createdAt}
          message={review.message}
          rating={review.rating}
          helpful={review.helpful}
        />
      ))}

      <Pagination
        count={10}
        color="primary"
        sx={{
          mt: 5,
          mb: 10,
          [`& .${paginationClasses.ul}`]: {
            justifyContent: 'center',
          },
        }}
      />
    </Box>
  );
}

ReviewList.propTypes = {
  reviews: PropTypes.array,
};
