import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';

import { _tags, _mock, _categories, _travelPosts } from 'src/_mock';

import Markdown from 'src/components/markdown';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import PostTags from '../../blog/common/post-tags';
import TravelNewsletter from '../travel-newsletter';
import PostAuthor from '../../blog/common/post-author';
import PostSidebar from '../../blog/common/post-sidebar';
import TravelPostHero from '../../blog/travel/travel-post-hero';
import PostSocialsShare from '../../blog/common/post-socials-share';
import TravelLatestPosts from '../../blog/travel/travel-latest-posts';

// ----------------------------------------------------------------------

export default function TravelPostView() {
  const { title, description, author, tags, content } = _travelPosts[0];

  return (
    <>
      <TravelPostHero post={_travelPosts[0]} />

      <Container>
        <CustomBreadcrumbs
          sx={{ my: 3 }}
          links={[
            { name: 'Home', href: '/' },
            { name: 'Blog', href: paths.travel.posts },
            { name: title },
          ]}
        />
      </Container>

      <Divider sx={{ mb: { xs: 6, md: 10 } }} />

      <Container>
        <Grid container spacing={{ md: 8 }}>
          <Grid xs={12} md={8}>
            <Typography variant="h5" sx={{ mb: 5 }}>
              {description}
            </Typography>

            <Markdown content={content} firstLetter />

            <PostTags tags={tags} />

            <PostSocialsShare />

            <Divider sx={{ mt: 8 }} />

            <PostAuthor author={author} />
          </Grid>

          <Grid xs={12} md={4}>
            <PostSidebar
              popularTags={_tags}
              author={author}
              categories={_categories}
              recentPosts={{ list: _travelPosts.slice(-4) }}
              advertisement={{
                title: 'Advertisement',
                description: 'Duis leo. Donec orci lectus, aliquam ut, faucibus non',
                imageUrl: _mock.image.travel(9),
                path: '',
              }}
            />
          </Grid>
        </Grid>
      </Container>

      <TravelLatestPosts posts={_travelPosts.slice(0, 4)} />

      <TravelNewsletter />
    </>
  );
}
