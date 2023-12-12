import Divider from '@mui/material/Divider';

import { _members, _careerPosts, _brandsColor, _testimonials } from 'src/_mock';

import CareerTeam from '../team/career-team';
import CareerAbout from '../about/career-about';
import CareerNewsletter from '../career-newsletter';
import CareerOurClients from '../career-our-clients';
import CareerTestimonial from '../testimonial/career-testimonial';
import CareerAboutOurVision from '../about/career-about-our-vision';
import CareerLatestPosts from '../../blog/career/career-latest-posts';

// ----------------------------------------------------------------------

export default function CareerAboutView() {
  return (
    <>
      <CareerAbout />

      <CareerAboutOurVision />

      <Divider orientation="vertical" sx={{ height: 80, width: 2, mx: 'auto' }} />

      <CareerTeam members={_members} />

      <CareerTestimonial testimonials={_testimonials} />

      <CareerOurClients brands={_brandsColor} />

      <CareerLatestPosts posts={_careerPosts.slice(0, 5)} />

      <CareerNewsletter />
    </>
  );
}
