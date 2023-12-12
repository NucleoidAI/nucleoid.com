import PropTypes from 'prop-types';

import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import Accordion, { accordionClasses } from '@mui/material/Accordion';
import AccordionSummary, { accordionSummaryClasses } from '@mui/material/AccordionSummary';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function ElearningCourseDetailsLessonItem({
  lesson,
  expanded,
  selected,
  onSelected,
  onExpanded,
}) {
  const playIcon = selected ? 'carbon:pause-outline' : 'carbon:play';

  return (
    <Accordion
      expanded={expanded}
      onChange={onExpanded}
      disabled={!lesson.unLocked}
      sx={{
        [`&.${accordionClasses.expanded}`]: {
          borderRadius: 0,
        },
      }}
    >
      <AccordionSummary
        sx={{
          px: 1,
          minHeight: 64,
          [`& .${accordionSummaryClasses.content}`]: {
            p: 0,
            m: 0,
          },
          [`&.${accordionSummaryClasses.expanded}`]: {
            bgcolor: 'action.selected',
          },
        }}
      >
        <Iconify
          width={24}
          icon={!lesson.unLocked ? 'carbon:locked' : playIcon}
          onClick={onSelected}
        />

        <Typography
          variant="subtitle1"
          sx={{
            pl: 2,
            flexGrow: 1,
          }}
        >
          {lesson.title}
        </Typography>

        <Typography variant="body2">{lesson.duration} m</Typography>

        <Iconify icon={expanded ? 'carbon:chevron-down' : 'carbon:chevron-right'} sx={{ ml: 2 }} />
      </AccordionSummary>

      <AccordionDetails
        sx={{
          p: 2,
          typography: 'body',
          color: 'text.secondary',
        }}
      >
        {lesson.description}
      </AccordionDetails>
    </Accordion>
  );
}

ElearningCourseDetailsLessonItem.propTypes = {
  expanded: PropTypes.bool,
  lesson: PropTypes.object,
  onExpanded: PropTypes.func,
  onSelected: PropTypes.func,
  selected: PropTypes.bool,
};
