import TravelNewsletter from '../travel-newsletter';
import TravelContactInfo from '../contact/travel-contact-info';
import TravelContactForm from '../contact/travel-contact-form';

// ----------------------------------------------------------------------

export default function TravelContactView() {
  return (
    <>
      <TravelContactInfo />

      <TravelContactForm />

      <TravelNewsletter />
    </>
  );
}
