import { useScroll } from 'framer-motion';

import { _pricingHome } from 'src/_mock';

import ScrollProgress from 'src/components/scroll-progress';

import HomeHero from '../home-hero';
import HomeFAQs from '../home-faqs';
import HomeNewStart from '../home-new-start';
import HomeCombination from '../home-combination';
import HomeForDesigner from '../home-for-designer';
import HomeAdvertisement from '../home-advertisement';
import PricingHome from '../../pricing/home/pricing-home';
import HomeFeatureHighlights from '../home-feature-highlights';
import HomeFlexibleComponents from '../home-flexible-components';

// ----------------------------------------------------------------------

export default function HomeView() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <ScrollProgress scrollYProgress={scrollYProgress} />

      <HomeHero />

      <HomeNewStart />

      <HomeFlexibleComponents />

      <HomeFeatureHighlights />

      <HomeForDesigner />

      <PricingHome plans={_pricingHome} />

      <HomeFAQs />

      <HomeCombination />

      <HomeAdvertisement />
    </>
  );
}
