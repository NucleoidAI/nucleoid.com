import { Helmet } from "react-helmet-async";

import Steps from "../sections/Steps";
import HelloWorld from "../sections/HelloWorld";
import MarketingServices from "../sections/marketing-services";
import MarketingNewsletter from "../sections/marketing-newsletter";
import MarketingLandingHero from "../sections/marketing-landing-hero";
import MarketingLandingFaqs from "../sections/marketing-landing-faqs";
import MarketingServicesInclude from "../sections/marketing-services-include";
import MarketingCaseStudyDetails from "../sections/marketing-case-study-details";
import MarketingCaseStudyDetailsGallery from "../sections/marketing-case-study-details-gallery";

export default function MarketingLandingPage() {
  return (
    <>
      <Helmet>
        <title>Nucleoid - Living Intelligence</title>
      </Helmet>

      <MarketingLandingHero />

      <MarketingServicesInclude />

      <Steps />

      <HelloWorld />

      <MarketingCaseStudyDetailsGallery />

      <MarketingServices />

      <MarketingCaseStudyDetails />

      <MarketingLandingFaqs />

      <MarketingNewsletter />
    </>
  );
}
