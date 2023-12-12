import { Helmet } from 'react-helmet-async';

import ElearningContactView from 'src/sections/_elearning/view/elearning-contact-view';

// ----------------------------------------------------------------------

export default function ElearningContactPage() {
  return (
    <>
      <Helmet>
        <title> E-learning: Contact us</title>
      </Helmet>

      <ElearningContactView />
    </>
  );
}
