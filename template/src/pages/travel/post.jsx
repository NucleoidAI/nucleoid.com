import { Helmet } from 'react-helmet-async';

import TravelPostView from 'src/sections/_travel/view/travel-post-view';

// ----------------------------------------------------------------------

export default function TravelPostPage() {
  return (
    <>
      <Helmet>
        <title> Travel: Blog Post</title>
      </Helmet>

      <TravelPostView />
    </>
  );
}
