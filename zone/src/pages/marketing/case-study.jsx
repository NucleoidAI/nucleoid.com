import { Helmet } from 'react-helmet-async';

import MarketingCaseStudyView from 'src/sections/_marketing/view/marketing-case-study-view';

// ----------------------------------------------------------------------

export default function MarketingCaseStudyPage() {
  return (
    <>
      <Helmet>
        <title> Marketing: Case Study</title>
      </Helmet>

      <MarketingCaseStudyView />
    </>
  );
}
