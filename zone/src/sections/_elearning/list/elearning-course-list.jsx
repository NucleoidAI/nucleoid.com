import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import Pagination, { paginationClasses } from '@mui/material/Pagination';

import ElearningCourseItem from './elearning-course-item';
import ElearningCourseItemSkeleton from './elearning-course-item-skeleton';

// ----------------------------------------------------------------------

export default function ElearningCourseList({ courses, loading }) {
  return (
    <>
      <Stack spacing={4}>
        {(loading ? [...Array(9)] : courses).map((course, index) =>
          course ? (
            <ElearningCourseItem key={course.id} course={course} />
          ) : (
            <ElearningCourseItemSkeleton key={index} />
          )
        )}
      </Stack>

      <Pagination
        count={10}
        color="primary"
        sx={{
          my: 10,
          [`& .${paginationClasses.ul}`]: {
            justifyContent: 'center',
          },
        }}
      />
    </>
  );
}

ElearningCourseList.propTypes = {
  courses: PropTypes.array,
  loading: PropTypes.bool,
};
