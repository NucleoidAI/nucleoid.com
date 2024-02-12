import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

import gtag from "../gtag";
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
  useEffect(() => {
    gtag("event", "page_view", {
      page_title: "Low-code Platform",
      page_location: "https://nucleoid.com/",
      page_path: "/low-code-platform",
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Nucleoid - Low-code Platform for Node.js</title>
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
