import { Helmet } from 'react-helmet-async';

import CareerAboutView from 'src/sections/_career/view/career-about-view';

// ----------------------------------------------------------------------

export default function CareerAboutPage() {
  return (
    <>
      <Helmet>
        <title> Career: About us</title>
      </Helmet>

      <CareerAboutView />
    </>
  );
}
