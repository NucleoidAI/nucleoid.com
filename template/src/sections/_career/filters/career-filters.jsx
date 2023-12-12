import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';

import { useBoolean } from 'src/hooks/use-boolean';
import { useResponsive } from 'src/hooks/use-responsive';

import Iconify from 'src/components/iconify';

import FilterType from './filter-type';
import FilterLevel from './filter-level';
import FilterSalary from './filter-salary';
import FilterKeyword from './filter-keyword';
import FilterBenefits from './filter-benefits';
import FilterLocation from './filter-location';
import FilterCategories from './filter-categories';

// ----------------------------------------------------------------------

const defaultValues = {
  filterKeyword: null,
  filterCategories: null,
  filterLocation: null,
  filterType: [],
  filterLevel: [],
  filterBenefits: [],
  filterSalary: [0, 20000],
};

export default function CareerFilters() {
  const mdUp = useResponsive('up', 'md');

  const mobileOpen = useBoolean();

  const [filters, setFilters] = useState(defaultValues);

  const handleChangeKeyword = useCallback(
    (newValue) => {
      setFilters({
        ...filters,
        filterKeyword: newValue,
      });
    },
    [filters]
  );

  const handleChangeCategory = useCallback(
    (newValue) => {
      setFilters({
        ...filters,
        filterCategories: newValue,
      });
    },
    [filters]
  );

  const handleChangeLocation = useCallback(
    (newValue) => {
      setFilters({
        ...filters,
        filterLocation: newValue,
      });
    },
    [filters]
  );

  const handleChangeJobType = useCallback(
    (event) => {
      const {
        target: { value },
      } = event;

      setFilters({
        ...filters,
        filterType: typeof value === 'string' ? value.split(',') : value,
      });
    },
    [filters]
  );

  const handleChangeJobLevel = useCallback(
    (event) => {
      const {
        target: { value },
      } = event;
      setFilters({
        ...filters,
        filterLevel: typeof value === 'string' ? value.split(',') : value,
      });
    },
    [filters]
  );

  const handleChangeJobBenefits = useCallback(
    (event) => {
      const {
        target: { value },
      } = event;
      setFilters({
        ...filters,
        filterBenefits: typeof value === 'string' ? value.split(',') : value,
      });
    },
    [filters]
  );

  const handleChangeSalary = useCallback(
    (event, newValue) => {
      setFilters({
        ...filters,
        filterSalary: newValue,
      });
    },
    [filters]
  );

  const onReset = useCallback(() => {
    setFilters(defaultValues);
  }, []);

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    alert(JSON.stringify(filters, null, 2));
    onReset();
  };

  const renderFilters = (
    <>
      <Stack spacing={2.5} direction={{ xs: 'column', md: 'row' }} alignItems="center">
        <FilterKeyword
          filterKeyword={filters.filterKeyword}
          onChangeKeyword={handleChangeKeyword}
        />

        <FilterCategories
          filterCategories={filters.filterCategories}
          onChangeCategory={handleChangeCategory}
        />

        <FilterLocation
          filterLocation={filters.filterLocation}
          onChangeLocation={handleChangeLocation}
        />

        {mdUp && (
          <Button
            size="large"
            variant="contained"
            color="primary"
            onClick={onSubmit}
            sx={{ px: 0, minWidth: { md: 48 } }}
          >
            <Iconify icon="carbon:search" width={24} />
          </Button>
        )}
      </Stack>

      <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 2.5, md: 1 }} sx={{ mt: 2.5 }}>
        <FilterType filterType={filters.filterType} onChangeJobType={handleChangeJobType} />

        <FilterLevel filterLevel={filters.filterLevel} onChangeJobType={handleChangeJobLevel} />

        <FilterSalary filterSalary={filters.filterSalary} onChangeSalary={handleChangeSalary} />

        <FilterBenefits
          filterBenefits={filters.filterBenefits}
          onChangeJobBenefits={handleChangeJobBenefits}
        />
      </Stack>

      {!mdUp && (
        <Button
          size="large"
          variant="contained"
          color="primary"
          startIcon={<Iconify icon="carbon:search" />}
          sx={{ mt: 2.5 }}
        >
          Search
        </Button>
      )}
    </>
  );

  if (mdUp) {
    return <Box sx={{ py: 5 }}>{renderFilters}</Box>;
  }

  return (
    <>
      <Stack alignItems="flex-end" sx={{ py: 3 }}>
        <Button
          color="inherit"
          variant="contained"
          startIcon={<Iconify icon="carbon:filter" width={18} />}
          onClick={mobileOpen.onTrue}
        >
          Filters
        </Button>
      </Stack>

      <Drawer
        anchor="right"
        open={mobileOpen.value}
        onClose={mobileOpen.onFalse}
        PaperProps={{
          sx: { pt: 5, px: 3, width: 280 },
        }}
      >
        {renderFilters}
      </Drawer>
    </>
  );
}
