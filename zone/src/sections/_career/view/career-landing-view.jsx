import {
  _jobs,
  _careerPosts,
  _brandsColor,
  _testimonials,
  _jobsByCompanies,
  _jobsByCountries,
  _jobsByCategories,
} from 'src/_mock';

import CareerNewsletter from '../career-newsletter';
import CareerOurClients from '../career-our-clients';
import CareerDownloadApp from '../career-download-app';
import CareerLandingHero from '../landing/career-landing-hero';
import CareerLandingStep from '../landing/career-landing-step';
import CareerTestimonial from '../testimonial/career-testimonial';
import CareerLatestPosts from '../../blog/career/career-latest-posts';
import CareerLandingConnections from '../landing/career-landing-connections';
import CareerLandingFeaturedJobs from '../landing/career-landing-featured-jobs';
import CareerLandingTopCompanies from '../landing/career-landing-top-companies';
import CareerLandingHotCategories from '../landing/career-landing-hot-categories';
import CareerLandingForRecruiters from '../landing/career-landing-for-recruiters';

// ----------------------------------------------------------------------

export default function CareerLandingView() {
  return (
    <>
      <CareerLandingHero />

      <CareerLandingStep />

      <CareerLandingFeaturedJobs jobs={_jobs.slice(-6)} />

      <CareerLandingTopCompanies companies={_jobsByCompanies} />

      <CareerLandingHotCategories categories={_jobsByCategories} />

      <CareerLandingConnections countries={_jobsByCountries} />

      <CareerLandingForRecruiters />

      <CareerTestimonial testimonials={_testimonials} />

      <CareerOurClients brands={_brandsColor} />

      <CareerLatestPosts posts={_careerPosts.slice(0, 5)} />

      <CareerDownloadApp />

      <CareerNewsletter />
    </>
  );
}
