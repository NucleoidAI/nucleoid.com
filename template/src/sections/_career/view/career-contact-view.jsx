import { _offices } from 'src/_mock';

import ContactMap from 'src/components/map';

import CareerNewsletter from '../career-newsletter';
import CareerContactForm from '../contact/career-contact-form';
import CareerContactInfo from '../contact/career-contact-info';

// ----------------------------------------------------------------------

export default function CareerContactView() {
  return (
    <>
      <CareerContactInfo />

      <ContactMap offices={_offices} />

      <CareerContactForm />

      <CareerNewsletter />
    </>
  );
}
