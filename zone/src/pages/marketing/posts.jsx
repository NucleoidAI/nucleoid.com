import { Helmet } from 'react-helmet-async';

import MarketingPostsView from 'src/sections/_marketing/view/marketing-posts-view';

// ----------------------------------------------------------------------

export default function MarketingPostsPage() {
  return (
    <>
      <Helmet>
        <title> Marketing: Blog</title>
      </Helmet>

      <MarketingPostsView />
    </>
  );
}
