import { Helmet } from 'react-helmet-async';

import ElearningPostsView from 'src/sections/_elearning/view/elearning-posts-view';

// ----------------------------------------------------------------------

export default function ElearningPostsPage() {
  return (
    <>
      <Helmet>
        <title> E-learning: Blog</title>
      </Helmet>

      <ElearningPostsView />
    </>
  );
}
