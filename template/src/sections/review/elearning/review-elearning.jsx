import { useState, useCallback } from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

import { useBoolean } from 'src/hooks/use-boolean';

import { _reviews } from 'src/_mock';

import ReviewList from './review-list';
import ReviewSummary from './review-summary';
import ReviewToolbar from './review-toolbar';
import ReviewNewForm from '../common/review-new-form';

// ----------------------------------------------------------------------

export default function ReviewElearning() {
  const [sort, setSort] = useState('latest');

  const formOpen = useBoolean();

  const handleChangeSort = useCallback((event) => {
    setSort(event.target.value);
  }, []);

  return (
    <>
      <Container sx={{ overflow: 'hidden', pt: 10 }}>
        <Grid xs={12} md={7} lg={8}>
          <ReviewToolbar sort={sort} onChangeSort={handleChangeSort} />
        </Grid>

        <Grid container spacing={8} direction="row-reverse">
          <Grid xs={12} md={5} lg={4}>
            <ReviewSummary ratingNumber={4.1} reviewNumber={123456} onOpenForm={formOpen.onTrue} />
          </Grid>

          <Grid xs={12} md={7} lg={8}>
            <ReviewList reviews={_reviews} />
          </Grid>
        </Grid>
      </Container>

      <ReviewNewForm open={formOpen.value} onClose={formOpen.onFalse} />
    </>
  );
}
