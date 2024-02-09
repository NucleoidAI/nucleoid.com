import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

import { _tags, _mock, _categories, _marketingPosts } from 'src/_mock';

import PostSidebar from '../../blog/common/post-sidebar';
import MarketingNewsletter from '../marketing-newsletter';
import PostSearchMobile from '../../blog/common/post-search-mobile';
import BlogMarketingPosts from '../../blog/marketing/marketing-posts';
import MarketingLandingFreeSEO from '../landing/marketing-landing-free-seo';
import BlogMarketingFeaturedPosts from '../../blog/marketing/marketing-featured-posts';

// ----------------------------------------------------------------------

export default function MarketingPostsView() {
  return (
    <>
      <PostSearchMobile />

      <BlogMarketingFeaturedPosts posts={_marketingPosts.slice(0, 5)} />

      <Container
        sx={{
          mt: 10,
        }}
      >
        <Grid container columnSpacing={{ xs: 0, md: 8 }}>
          <Grid xs={12} md={8}>
            <BlogMarketingPosts posts={_marketingPosts} />
          </Grid>

          <Grid xs={12} md={4}>
            <PostSidebar
              popularTags={_tags}
              categories={_categories}
              recentPosts={{ list: _marketingPosts.slice(-4) }}
              advertisement={{
                title: 'Advertisement',
                description: 'Duis leo. Donec orci lectus, aliquam ut, faucibus non',
                imageUrl: _mock.image.marketing(9),
                path: '',
              }}
            />
          </Grid>
        </Grid>
      </Container>
      <MarketingLandingFreeSEO />

      <MarketingNewsletter />
    </>
  );
}
