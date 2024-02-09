import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { useResponsive } from 'src/hooks/use-responsive';

import Iconify from 'src/components/iconify';

import PostItemMobile from '../common/post-item-mobile';
import CareerLatestPostItem from './career-latest-post-item';

// ----------------------------------------------------------------------

export default function CareerLatestPosts({ posts }) {
  const mdUp = useResponsive('up', 'md');

  const latestPost = posts[0];

  const viewAllBtn = (
    <Button
      component={RouterLink}
      href={paths.career.posts}
      color="inherit"
      endIcon={<Iconify icon="carbon:chevron-right" />}
    >
      View All
    </Button>
  );

  return (
    <Container
      sx={{
        pt: { xs: 5, md: 10 },
        pb: 10,
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent={{ xs: 'center', md: 'space-between' }}
        sx={{
          mb: { xs: 8, md: 10 },
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        <Stack
          sx={{
            maxWidth: { md: 460 },
          }}
        >
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            BLOG
          </Typography>

          <Typography variant="h2" sx={{ my: 3 }}>
            Read Our Lates News
          </Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            Aenean vulputate eleifend tellus. Mauris turpis nunc, blandit et, volutpat molestie,
            porta ut, ligula.
          </Typography>
        </Stack>

        {mdUp && viewAllBtn}
      </Stack>

      <Box
        sx={{
          display: 'grid',
          gap: { xs: 3, md: 4 },
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
          },
        }}
      >
        {mdUp ? (
          <>
            <CareerLatestPostItem post={latestPost} largePost />

            <Masonry columns={{ xs: 1, md: 2 }} spacing={4}>
              {posts.slice(1, 5).map((post, index) => (
                <CareerLatestPostItem key={post.id} post={post} order={index % 2} />
              ))}
            </Masonry>
          </>
        ) : (
          <>
            {posts.slice(0, 5).map((post) => (
              <PostItemMobile key={post.id} post={post} />
            ))}
          </>
        )}
      </Box>

      {!mdUp && (
        <Stack alignItems="center" sx={{ mt: 8 }}>
          {viewAllBtn}
        </Stack>
      )}
    </Container>
  );
}

CareerLatestPosts.propTypes = {
  posts: PropTypes.array,
};
