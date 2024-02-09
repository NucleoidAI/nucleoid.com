import Stack from '@mui/material/Stack';
import RadioGroup from '@mui/material/RadioGroup';

import ReviewProgressItem from './review-progress-item';

// ----------------------------------------------------------------------

const RATINGS = [
  { value: '5start', number: 5212 },
  { value: '4start', number: 2442 },
  { value: '3start', number: 523 },
  { value: '2start', number: 423 },
  { value: '1start', number: 80 },
];

// ----------------------------------------------------------------------

export default function ReviewProgress({ ...other }) {
  const totals = RATINGS.map((rating) => rating.number).reduce(
    (accumulator, curr) => accumulator + curr
  );

  return (
    <RadioGroup>
      <Stack spacing={2} {...other}>
        {RATINGS.map((rating, index) => (
          <ReviewProgressItem key={rating.value} rating={rating} index={index} totals={totals} />
        ))}
      </Stack>
    </RadioGroup>
  );
}
