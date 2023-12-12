import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Pagination, { paginationClasses } from '@mui/material/Pagination';

import ReviewItem from './review-item';

// ----------------------------------------------------------------------

export default function Reviews({ reviews }) {
  return (
    <>
      {reviews.map((review) => {
        const { id, name, rating, helpful, message, createdAt, avatarUrl, replyComment, users } =
          review;

        const hasReply = !!replyComment.length;

        return (
          <Box key={id}>
            <ReviewItem
              name={name}
              avatarUrl={avatarUrl}
              createdAt={createdAt}
              message={message}
              rating={rating}
              helpful={helpful}
            />
            {hasReply &&
              replyComment.map((reply) => {
                const userReply = users.filter((user) => user.id === reply.userId)[0];

                return (
                  <ReviewItem
                    key={reply.id}
                    tagUser={reply.tagUser}
                    createdAt={reply.createdAt}
                    message={reply.message}
                    name={userReply.name}
                    avatarUrl={userReply.avatarUrl}
                    hasReply
                  />
                );
              })}
          </Box>
        );
      })}

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
    </>
  );
}

Reviews.propTypes = {
  reviews: PropTypes.array,
};
