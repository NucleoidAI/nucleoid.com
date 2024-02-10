import { Helmet } from "react-helmet-async";

import MarketingServices from "../sections/marketing-services";
import MarketingNewsletter from "../sections/marketing-newsletter";
import MarketingLandingHero from "../sections/marketing-landing-hero";
import MarketingLandingFaqs from "../sections/marketing-landing-faqs";
import MarketingServicesInclude from "../sections/marketing-services-include";
import MarketingCaseStudyDetails from "../sections/marketing-case-study-details";
import MarketingServicesHowItWorks from "../sections/marketing-services-how-it-works";

export default function MarketingLandingPage() {
  return (
    <>
      <Helmet>
        <title>Nucleoid - Living Intelligence</title>
      </Helmet>

      <MarketingLandingHero />

      <MarketingServicesInclude />

      <Steps />

      <MarketingServices />

      <MarketingServicesHowItWorks />

      <MarketingCaseStudyDetails />

      <MarketingLandingFaqs />

      <MarketingNewsletter />
    </>
  );
}
