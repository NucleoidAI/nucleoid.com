import { Helmet } from 'react-helmet-async';

import CareerPostsView from 'src/sections/_career/view/career-posts-view';

// ----------------------------------------------------------------------

export default function CareerPostsPage() {
  return (
    <>
      <Helmet>
        <title> Career: Blog</title>
      </Helmet>

      <CareerPostsView />
    </>
  );
}
