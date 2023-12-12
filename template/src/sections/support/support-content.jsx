import PropTypes from 'prop-types';
import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary, { accordionSummaryClasses } from '@mui/material/AccordionSummary';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function SupportContent({ contents }) {
  const [expanded, setExpanded] = useState(false);

  const handleChangeExpanded = useCallback(
    (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    },
    []
  );

  return (
    <Box sx={{ pl: { md: 10 } }}>
      {contents.map((faq) => (
        <Accordion
          key={faq.id}
          expanded={expanded === faq.question}
          onChange={handleChangeExpanded(faq.question)}
        >
          <AccordionSummary
            sx={{
              py: 2,
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
            <Typography variant="subtitle1" sx={{ flexGrow: 1 }}>
              {faq.question}
            </Typography>

            <Iconify
              icon={expanded === faq.question ? 'carbon:chevron-down' : 'carbon:chevron-right'}
            />
          </AccordionSummary>

          <AccordionDetails sx={{ color: 'text.secondary' }}>{faq.answer}</AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}

SupportContent.propTypes = {
  contents: PropTypes.array,
};
