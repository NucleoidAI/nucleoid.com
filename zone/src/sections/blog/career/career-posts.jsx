import PropTypes from 'prop-types';

import Masonry from '@mui/lab/Masonry';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import Iconify from 'src/components/iconify';

import CareerPostItem from './career-post-item';

// ----------------------------------------------------------------------

export default function CareerPosts({ posts }) {
  return (
    <>
      <Masonry
        columns={{ xs: 1, sm: 2 }}
        spacing={4}
        defaultColumns={1}
        defaultSpacing={4}
        sx={{
          mx: { xs: 'unset', sm: 0 },
        }}
      >
        {posts.slice(0, 8).map((post, index) => (
          <CareerPostItem key={post.id} post={post} index={index} />
        ))}
      </Masonry>

      <Stack
        alignItems="center"
        sx={{
          pt: 5,
          pb: { xs: 10, md: 0 },
        }}
      >
        <Button
          size="large"
          color="inherit"
          variant="outlined"
          endIcon={<Iconify icon="carbon:arrow-down" />}
        >
          Load more
        </Button>
      </Stack>
    </>
  );
}

CareerPosts.propTypes = {
  posts: PropTypes.array,
};
