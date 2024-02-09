import { useState, useCallback } from 'react';

import Fab from '@mui/material/Fab';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Popover from '@mui/material/Popover';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { alpha, useTheme } from '@mui/material/styles';

import { paths } from 'src/routes/paths';

import { useResponsive } from 'src/hooks/use-responsive';

import { fDate } from 'src/utils/format-time';

import { _socials, _coursePosts } from 'src/_mock';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import Markdown from 'src/components/markdown';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import PostTags from '../../blog/common/post-tags';
import PostAuthor from '../../blog/common/post-author';
import ElearningNewsletter from '../elearning-newsletter';
import PostPrevAndNext from '../../blog/common/post-prev-and-next';
import PostSocialsShare from '../../blog/common/post-socials-share';
import ElearningLatestPosts from '../../blog/elearning/elearning-latest-posts';

// ----------------------------------------------------------------------

export default function ElearningPostView() {
  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');

  const { title, description, duration, createdAt, author, favorited, heroUrl, tags, content } =
    _coursePosts[0];

  const [favorite, setFavorite] = useState(favorited);

  const [open, setOpen] = useState(null);

  const handleOpen = useCallback((event) => {
    setOpen(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(null);
  }, []);

  const handleChangeFavorite = useCallback((event) => {
    setFavorite(event.target.checked);
  }, []);

  return (
    <>
      <Divider />

      <Container sx={{ overflow: 'hidden' }}>
        <CustomBreadcrumbs
          links={[
            { name: 'Home', href: '/' },
            { name: 'Blog', href: paths.eLearning.posts },
            { name: title },
          ]}
          sx={{ my: 5 }}
        />

        <Stack
          alignItems="center"
          justifyContent="center"
          sx={{ position: 'relative', borderRadius: 2, overflow: 'hidden' }}
        >
          <Fab
            color="primary"
            sx={{
              zIndex: 9,
              position: 'absolute',
            }}
          >
            <Iconify icon="carbon:play" width={24} />
          </Fab>

          <Image
            alt="hero"
            src={heroUrl}
            ratio={mdUp ? '21/9' : '16/9'}
            overlay={`linear-gradient(to bottom, ${alpha(theme.palette.common.black, 0)} 0%, ${
              theme.palette.common.black
            } 75%)`}
          />
        </Stack>

        <Grid container spacing={3} justifyContent={{ md: 'center' }}>
          <Grid xs={12} md={8}>
            <Stack
              spacing={3}
              sx={{
                pb: 6,
                textAlign: 'center',
                pt: { xs: 6, md: 10 },
              }}
            >
              <Typography variant="body2" sx={{ color: 'text.disabled' }}>
                {duration}
              </Typography>

              <Typography variant="h2" component="h1">
                {title}
              </Typography>

              <Typography variant="h5">{description}</Typography>
            </Stack>

            <Divider />

            <Stack direction="row" justifyContent="space-between" spacing={1.5} sx={{ py: 3 }}>
              <Avatar src={author.avatarUrl} sx={{ width: 48, height: 48 }} />

              <Stack spacing={0.5} flexGrow={1}>
                <Typography variant="subtitle2">{author.name}</Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  {fDate(createdAt, 'dd/MM/yyyy p')}
                </Typography>
              </Stack>

              <Stack direction="row" alignItems="center">
                <IconButton onClick={handleOpen} color={open ? 'primary' : 'default'}>
                  <Iconify icon="carbon:share" />
                </IconButton>

                <Checkbox
                  color="error"
                  checked={favorite}
                  onChange={handleChangeFavorite}
                  icon={<Iconify icon="carbon:favorite" />}
                  checkedIcon={<Iconify icon="carbon:favorite-filled" />}
                />
              </Stack>
            </Stack>

            <Divider sx={{ mb: 6 }} />

            <Markdown content={content} firstLetter />

            <PostTags tags={tags} />

            <PostSocialsShare />

            <Divider sx={{ mt: 8 }} />

            <PostAuthor author={author} />

            <Divider />

            <PostPrevAndNext prevPost={_coursePosts[1]} nextPost={_coursePosts[2]} />
          </Grid>
        </Grid>
      </Container>

      <Divider />

      <ElearningLatestPosts posts={_coursePosts.slice(0, 3)} />

      <ElearningNewsletter />

      <Popover
        open={!!open}
        onClose={handleClose}
        anchorEl={open}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        slotProps={{
          paper: {
            sx: { width: 220 },
          },
        }}
      >
        {_socials.map((social) => (
          <MenuItem key={social.value} onClick={handleClose}>
            <Iconify icon={social.icon} width={24} sx={{ mr: 1, color: social.color }} />
            Share via {social.label}
          </MenuItem>
        ))}
      </Popover>
    </>
  );
}
