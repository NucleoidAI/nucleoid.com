import { Helmet } from 'react-helmet-async';

import FormValidationView from 'src/sections/examples/form-validation-view';

// ----------------------------------------------------------------------

export default function FormValidationPage() {
  return (
    <>
      <Helmet>
        <title> Components: Form Validation</title>
      </Helmet>

      <FormValidationView />
    </>
  );
}
