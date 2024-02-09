import {
  _courses,
  _members,
  _coursePosts,
  _brandsColor,
  _testimonials,
  _coursesByCategories,
} from 'src/_mock';

import ElearningTeam from '../team/elearning-team';
import ElearningNewsletter from '../elearning-newsletter';
import ElearningOurClients from '../elearning-our-clients';
import ElearningDownloadApp from '../elearning-download-app';
import ElearningLandingHero from '../landing/elearning-landing-hero';
import ElearningTestimonial from '../testimonial/elearning-testimonial';
import ElearningLandingIntroduce from '../landing/elearning-landing-introduce';
import ElearningLatestPosts from '../../blog/elearning/elearning-latest-posts';
import ElearningLandingCategories from '../landing/elearning-landing-categories';
import ElearningLandingFeaturedCourses from '../landing/elearning-landing-featured-courses';

// ----------------------------------------------------------------------

export default function ElearningLandingView() {
  return (
    <>
      <ElearningLandingHero />

      <ElearningOurClients brands={_brandsColor} />

      <ElearningLandingIntroduce />

      <ElearningLandingFeaturedCourses courses={_courses} />

      <ElearningLandingCategories categories={_coursesByCategories} />

      <ElearningTeam members={_members.slice(0, 4)} />

      <ElearningTestimonial testimonials={_testimonials} />

      <ElearningLatestPosts posts={_coursePosts.slice(0, 4)} />

      <ElearningDownloadApp />

      <ElearningNewsletter />
    </>
  );
}
