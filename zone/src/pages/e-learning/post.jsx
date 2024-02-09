import { Helmet } from 'react-helmet-async';

import ElearningPostView from 'src/sections/_elearning/view/elearning-post-view';

// ----------------------------------------------------------------------

export default function ElearningPostPage() {
  return (
    <>
      <Helmet>
        <title> E-learning: Blog Post</title>
      </Helmet>

      <ElearningPostView />
    </>
  );
}
