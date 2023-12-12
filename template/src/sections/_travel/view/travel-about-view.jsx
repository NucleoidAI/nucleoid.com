import { _brands, _members, _travelPosts, _testimonials } from 'src/_mock';

import TravelTeam from '../team/travel-team';
import TravelAbout from '../about/travel-about';
import TravelNewsletter from '../travel-newsletter';
import TravelOurClients from '../travel-our-clients';
import TravelTestimonial from '../testimonial/travel-testimonial';
import TravelAboutOurMission from '../about/travel-about-our-mission';
import TravelLatestPosts from '../../blog/travel/travel-latest-posts';

// ----------------------------------------------------------------------

export default function TravelAboutView() {
  return (
    <>
      <TravelAbout />

      <TravelAboutOurMission />

      <TravelTeam members={_members} />

      <TravelTestimonial testimonials={_testimonials} />

      <TravelOurClients brands={_brands} />

      <TravelLatestPosts posts={_travelPosts.slice(0, 4)} />

      <TravelNewsletter />
    </>
  );
}
