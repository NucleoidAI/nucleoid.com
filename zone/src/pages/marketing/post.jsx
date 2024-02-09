import { Helmet } from 'react-helmet-async';

import MarketingPostView from 'src/sections/_marketing/view/marketing-post-view';

// ----------------------------------------------------------------------

export default function MarketingPostPage() {
  return (
    <>
      <Helmet>
        <title> Marketing: Blog Post</title>
      </Helmet>

      <MarketingPostView />
    </>
  );
}
