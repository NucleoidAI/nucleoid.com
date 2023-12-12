import { Helmet } from 'react-helmet-async';

import CareerContactView from 'src/sections/_career/view/career-contact-view';

// ----------------------------------------------------------------------

export default function CareerContactPage() {
  return (
    <>
      <Helmet>
        <title> Career: Contact us</title>
      </Helmet>

      <CareerContactView />
    </>
  );
}
