import Container from '@mui/material/Container';

import { useBoolean } from 'src/hooks/use-boolean';

import { _reviews } from 'src/_mock';

import ReviewList from './review-list';
import ReviewSummary from './review-summary';
import ReviewNewForm from '../common/review-new-form';

// ----------------------------------------------------------------------

export default function ReviewEcommerce() {
  const formOpen = useBoolean();

  return (
    <>
      <ReviewSummary ratingNumber={4.1} reviewNumber={123456} onOpenForm={formOpen.onTrue} />

      <Container>
        <ReviewList reviews={_reviews} />
      </Container>

      <ReviewNewForm open={formOpen.value} onClose={formOpen.onFalse} />
    </>
  );
}
