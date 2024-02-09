import PropTypes from 'prop-types';
import { useState, useCallback } from 'react';

import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Pagination, { paginationClasses } from '@mui/material/Pagination';

import MarketingCaseStudyItem from './marketing-case-study-item';

// ----------------------------------------------------------------------

export default function MarketingCaseStudyList({ caseStudies }) {
  const [tab, setTab] = useState('All');

  const getCategories = caseStudies.map((project) => project.category);

  const categories = ['All', ...Array.from(new Set(getCategories))];

  const filtered = applyFilter(caseStudies, tab);

  const handleChangeTab = useCallback((event, newValue) => {
    setTab(newValue);
  }, []);

  return (
    <>
      <Tabs
        value={tab}
        scrollButtons="auto"
        variant="scrollable"
        allowScrollButtonsMobile
        onChange={handleChangeTab}
      >
        {categories.map((category) => (
          <Tab key={category} value={category} label={category} />
        ))}
      </Tabs>

      <Box
        sx={{
          pt: 5,
          pb: 10,
          gap: 4,
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          },
        }}
      >
        {filtered.map((project) => (
          <MarketingCaseStudyItem key={project.id} project={project} />
        ))}
      </Box>

      <Pagination
        count={10}
        color="primary"
        sx={{
          pb: 10,
          [`& .${paginationClasses.ul}`]: {
            justifyContent: 'center',
          },
        }}
      />
    </>
  );
}

MarketingCaseStudyList.propTypes = {
  caseStudies: PropTypes.array,
};

// ----------------------------------------------------------------------

function applyFilter(arr, category) {
  if (category !== 'All') {
    arr = arr.filter((project) => project.category === category);
  }
  return arr;
}
