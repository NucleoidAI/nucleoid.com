import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';

import { paths } from 'src/routes/paths';

import { _caseStudies, _testimonials } from 'src/_mock';

import Image from 'src/components/image';
import Markdown from 'src/components/markdown';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import MarketingNewsletter from '../marketing-newsletter';
import MarketingTestimonial from '../testimonial/marketing-testimonial';
import MarketingLandingFreeSEO from '../landing/marketing-landing-free-seo';
import MarketingCaseStudyListSimilar from '../list/marketing-case-study-list-similar';
import MarketingCaseStudyDetailsGallery from '../details/marketing-case-study-details-gallery';
import MarketingCaseStudyDetailsSummary from '../details/marketing-case-study-details-summary';

// ----------------------------------------------------------------------

const _mockCaseStudy = _caseStudies[0];

export default function MarketingCaseStudyView() {
  return (
    <>
      <Container
        sx={{
          overflow: 'hidden',
          pt: 5,
          pb: { xs: 10, md: 15 },
        }}
      >
        <Image alt="hero" src={_mockCaseStudy.heroUrl} ratio="16/9" sx={{ borderRadius: 2 }} />

        <CustomBreadcrumbs
          sx={{ my: 5 }}
          links={[
            { name: 'Home', href: '/' },
            { name: 'Case Studies', href: paths.marketing.caseStudies },
            { name: _mockCaseStudy.title },
          ]}
        />

        <Grid container spacing={{ xs: 5, md: 8 }} direction={{ md: 'row-reverse' }}>
          <Grid xs={12} md={4}>
            <MarketingCaseStudyDetailsSummary caseStudy={_caseStudies[0]} />
          </Grid>

          <Grid xs={12} md={8}>
            <Markdown content={_mockCaseStudy.content} />
            <MarketingCaseStudyDetailsGallery images={_mockCaseStudy.galleryImgs} />
          </Grid>
        </Grid>
      </Container>

      <MarketingTestimonial testimonials={_testimonials} />

      <MarketingCaseStudyListSimilar caseStudies={_caseStudies.slice(0, 3)} />

      <MarketingLandingFreeSEO />

      <MarketingNewsletter />
    </>
  );
}
