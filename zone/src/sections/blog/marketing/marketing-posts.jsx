import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Pagination, { paginationClasses } from '@mui/material/Pagination';

import MarketingPostItem from './marketing-post-item';

// ----------------------------------------------------------------------

export default function MarketingPosts({ posts }) {
  return (
    <>
      <Box
        sx={{
          columnGap: 4,
          display: 'grid',
          rowGap: { xs: 4, md: 5 },
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
          },
        }}
      >
        {posts.slice(0, 8).map((post) => (
          <MarketingPostItem key={post.id} post={post} />
        ))}
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

MarketingPosts.propTypes = {
  posts: PropTypes.array,
};
