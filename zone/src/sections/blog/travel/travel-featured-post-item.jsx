import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import { alpha, useTheme } from '@mui/material/styles';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { fDate } from 'src/utils/format-time';

import Image from 'src/components/image';
import TextMaxLine from 'src/components/text-max-line';

import PostTimeBlock from '../common/post-time-block';

// ----------------------------------------------------------------------

export default function TravelFeaturedPostItem({ post, largePost }) {
  const theme = useTheme();

  return (
    <Box sx={{ borderRadius: 2, overflow: 'hidden', position: 'relative' }}>
      <Image
        src={post.coverUrl}
        alt={post.title}
        ratio="1/1"
        overlay={`linear-gradient(to bottom, ${alpha(theme.palette.common.black, 0)} 0%, ${
          theme.palette.common.black
        } 75%)`}
      />

      <Stack
        spacing={1}
        sx={{
          p: 3,
          bottom: 0,
          zIndex: 9,
          position: 'absolute',
          color: 'common.white',
          ...(largePost && {
            p: { xs: 3, md: 5 },
          }),
        }}
      >
        <PostTimeBlock
          createdAt={fDate(post.createdAt)}
          duration={post.duration}
          sx={{ color: 'inherit', opacity: 0.72 }}
        />

        <Link component={RouterLink} href={paths.travel.post} color="inherit">
          <TextMaxLine
            sx={{
              typography: 'h6',
              ...(largePost && {
                typography: { xs: 'h6', md: 'h4' },
              }),
            }}
          >
            {post.title}
          </TextMaxLine>
        </Link>

        {largePost && <TextMaxLine sx={{ opacity: 0.48 }}>{post.description}</TextMaxLine>}

        <Stack direction="row" alignItems="center" sx={{ typography: 'body2', pt: 1.5 }}>
          <Avatar
            src={post.author.avatarUrl}
            sx={{
              mr: 1,
              width: 32,
              height: 32,
              ...(largePost && {
                width: { xs: 32, md: 40 },
                height: { xs: 32, md: 40 },
              }),
            }}
          />
          {post.author.name}
        </Stack>
      </Stack>
    </Box>
  );
}

TravelFeaturedPostItem.propTypes = {
  largePost: PropTypes.bool,
  post: PropTypes.shape({
    title: PropTypes.string,
    coverUrl: PropTypes.string,
    duration: PropTypes.string,
    description: PropTypes.string,
    createdAt: PropTypes.instanceOf(Date),
    author: PropTypes.shape({
      name: PropTypes.string,
      avatarUrl: PropTypes.string,
    }),
  }),
};
